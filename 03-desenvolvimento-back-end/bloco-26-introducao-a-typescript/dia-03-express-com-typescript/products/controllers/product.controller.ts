import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';

class ProductsController {
    constructor(private productService = new ProductService()) { }

    public getAll = async (_req: Request, res: Response) => {
        const products = await this.productService.getAll();

        res.status(statusCodes.OK).json(products);
    }

    public getById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const product = await this.productService.getById(Number(id));

        if (!product) {
            return res.status(statusCodes.NOT_FOUND)
                .json({ message: 'Product not found' })
        }

        res.status(statusCodes.OK).json(product);
    }
}

export default ProductsController;
