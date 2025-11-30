import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-southeast-1_4nXBuBVFV', //'us-east-2_GtmxIMGrh',
  ClientId: '49bc32o6290uqoh8r9ing77ipf', //'4vr82i9jcsgi4l11lmmhldkecq',
};

export default new CognitoUserPool(poolData);