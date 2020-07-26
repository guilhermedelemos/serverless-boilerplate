/* eslint-disable import/prefer-default-export */

export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      date: new Date().toISOString(),
      message: 'Pong!',
    }),
  };
  return response;
};
