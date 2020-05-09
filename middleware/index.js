import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware} from 'redux';

/**
 * Middleware
 */
export default applyMiddleware(
    logger,
    thunk
)



