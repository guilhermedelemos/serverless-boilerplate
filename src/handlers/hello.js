/* eslint-disable import/prefer-default-export */

import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import logger from '../util/logger';

export const handler = async (event, context) => {
    logger.verbose(`${path.parse(__filename).name}.handler`);
    logger.log('silly', "127.0.0.1 - there's no place like home (6)");
    logger.log('debug', "127.0.0.1 - there's no place like home (5)");
    logger.log('verbose', "127.0.0.1 - there's no place like home (4)");
    logger.log('http', "127.0.0.1 - there's no place like home (4)");
    logger.log('info', "127.0.0.1 - there's no place like home (2)");
    logger.log('warn', "127.0.0.1 - there's no place like home (1)");
    logger.log('error', "127.0.0.1 - there's no place like home (0)");
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
