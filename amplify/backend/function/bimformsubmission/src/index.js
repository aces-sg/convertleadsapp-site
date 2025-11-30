const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

const snsClient = new SNSClient({ region: 'ap-southeast-1' });

exports.handler = async (event) => {
    console.log('\n\nLoading handler\n\n', event);

    try {
        const { input } = event.arguments;
        const command = new PublishCommand({
            Message: JSON.stringify(input),
            Subject: 'Submissions',
            TopicArn: 'arn:aws:sns:ap-southeast-1:517820625953:formsubmission',
        });

        await snsClient.send(command);

        return {
            status: 200,
            message: 'Form submission success',
        };
    } catch (err) {
        console.error('SNS message failed to send:', err);
        return {
            status: 500,
            message: 'Form submission failed',
        };
    }
};