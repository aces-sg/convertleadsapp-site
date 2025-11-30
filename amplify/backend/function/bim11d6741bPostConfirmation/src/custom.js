/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();
var cognitoIdentityServiceProvider = new aws.CognitoIdentityServiceProvider();

exports.handler = async (event, context) => {
  let date = new Date();
  console.log("Event structure:", event);

  if (event.request.userAttributes.email) {
    const userEmail = event.request.userAttributes.email;
    const cognitoId = event.request.userAttributes.sub;
    const tableName = process.env.TABLE_USER;
    const userPoolId = event.userPoolId; // Cognito User Pool ID
    const groupName = "user:write"; // Target group name

    // Parameters for query to check if the user exists by email
    const queryParams = {
      TableName: tableName,
      IndexName: "EmailIndex", // Ensure this GSI exists with "email" as the partition key
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: {
        ":email": { S: userEmail },
      },
    };

    try {
      // Check if the user already exists
      const existingUser = await ddb.query(queryParams).promise();

      // User doesn't exist, proceed to create it
      const putParams = {
        Item: {
          id: { S: cognitoId }, // Sub ID from Cognito
          __typename: { S: "User" },
          _lastChangedAt: { N: date.valueOf().toString() },
          _version: { N: "1" },
          ownerId: { S: cognitoId },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
          email: { S: userEmail },
          company: { S: event.request.userAttributes["custom:company"] || "Unknown" },
          cognitoId: { S: cognitoId },
        },
        TableName: tableName,
      };

      await ddb.putItem(putParams).promise();
      console.log("User created successfully");

      // Add user to the "user:read" group
      const addToGroupParams = {
        GroupName: groupName,
        UserPoolId: userPoolId,
        Username: cognitoId,
      };

      await cognitoIdentityServiceProvider.adminAddUserToGroup(addToGroupParams).promise();
      console.log(`User ${cognitoId} added to group ${groupName}`);
    } catch (err) {
      console.error("Error interacting with DynamoDB or Cognito", err);
    }

    console.log("Execution completed");
  } else {
    console.error("Error: Missing userAttributes.email");
  }
};
