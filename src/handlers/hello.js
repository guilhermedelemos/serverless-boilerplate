/* eslint-disable import/prefer-default-export */

import { v4 as uuidv4 } from 'uuid';

export const handler = async (event, context) => {
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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
