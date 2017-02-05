import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { OK, UNPROCESSABLE_ENTITY } from 'http-status';

import App from '../../src/app';
import router from '../../src/app-router';

chai.use(chaiHttp);
const { expect, request } = chai;

const app = App('test');
router(app);

// const requestPayload = {
// };

describe('Products Route', () => {

  // it('GET /api/products - should respond with OK', () => {
  //   return request(app)
  //     .get('/api/products')
  //     .then(res => expect(res).to.have.status(OK));
  // });

  // it('GET /api/products - should respond with JSON', () => {
  //   return request(app)
  //     .post('/api/parser')
  //     .then(res => expect(res).to.be.json);
  // });

});
