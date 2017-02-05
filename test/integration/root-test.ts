import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { OK } from 'http-status';
import App from '../../src/app';
import router from '../../src/app-router';

chai.use(chaiHttp);
const { expect, request } = chai;

const app = App('test');
router(app);

// describe('Server is running', () => {
//
//   it('should respond with OK', () => {
//     return request(app)
//       .get('/')
//       .then(res => expect(res.status).eq(OK));
//   });
//
//   it('should respond with json', () => {
//     return request(app)
//       .get('/')
//       .then(res => expect(res).to.be.json);
//   });
//
//   it('should respond with message', () => {
//     const expectedResponse = JSON.stringify({ message: 'Server is running...' });
//
//     return request(app)
//       .get('/')
//       .then(res => {
//         const response = JSON.stringify(res.body);
//         expect(response, expectedResponse);
//       });
//   });
// });
