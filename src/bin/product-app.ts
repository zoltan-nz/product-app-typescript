#!/usr/bin/env node

/**
 * Command line tool which creates an app, setup routes and launching a server.
 *
 * Options:
 * NODE_ENV='production' (default is 'development')
 * PORT=4100 (default is 3000)
 */

import { env, stdout } from 'process';
import App from '../app';
import router from '../app-router';
import Server from '../app-server';

stdout.write('Parse The Parcel. Start...\n');

const { NODE_ENV, PORT } = env;

const app = App(NODE_ENV);
router(app);

const server = Server(app, PORT);
