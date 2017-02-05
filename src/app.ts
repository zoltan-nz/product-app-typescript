import { json, urlencoded } from 'body-parser';
import * as express from 'express';
import morgan = require('morgan');

/**
 * Provide an express application with the given environment settings. Default environment is 'development'.
 *
 * @param env
 * @returns {express.Application}
 */
export default function(env: string = 'development'): express.Application {

  const app: express.Application = express();

  if (env !== 'test') app.use(morgan('dev'));
  app.use(json());
  app.use(urlencoded({ extended: false }));

  return app;
};
