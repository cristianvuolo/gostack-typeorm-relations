import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';

// realizar injeção de dependencia aqui
export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProductService = container.resolve(CreateProductService);
    const customer = await createProductService.execute({
      name,
      price,
      quantity,
    });
    return response.json(customer);
  }
}
