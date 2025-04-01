import * as Yup from 'yup';

import Product from '../models/Product';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    const { filename } = request.file;

    console.log(filename);

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    return response.status(201).json({ message: 'ok!' });
  }
}

export default new ProductController();
