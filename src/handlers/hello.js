import { v4 as uuidv4 } from 'uuid';

const handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      id: uuidv4(),
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      context,
    }),
  };
  return response;
};

export default handler;
