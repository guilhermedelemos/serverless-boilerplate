/* eslint-disable import/prefer-default-export */

import logger from '../util/logger';

export const handler = async () => {
    logger.verbose('ping.handler');
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            date: new Date().toISOString(),
            message: 'Pong!',
        }),
    };
    logger.verbose('response', response);
    return response;
};
