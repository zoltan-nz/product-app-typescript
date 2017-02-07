import { Request, Response, Router } from 'express';
// import { UNPROCESSABLE_ENTITY } from 'http-status';
// import { Product, ProductsRequest, ProductsResponse } from '../controllers/products';

/**
 * The `/api/products` route.
 *
 * @type {Router}
 */
const productsRouter: Router = Router();

productsRouter.post('/', (request: Request, response: Response) => {
  // const params: Product = request.body;

  // if (!(Product.isValid(params))) return response.status(UNPROCESSABLE_ENTITY).send({ error: 'Invalid payload' });

  // const product: Product = new Product();
  // const productsResponse: ProductsResponse = product.all();

  // return response.json(productsResponse);
});

export default productsRouter;
