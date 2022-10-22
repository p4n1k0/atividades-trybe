import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';
import { IProduct } from '../interfaces/index'

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

    public create = async (req: Request, res: Response) => {
        const product = req.body as IProduct;
        const productCreated = await this.productService.create(product);

        res.status(statusCodes.CREATED).json(productCreated);
    }

    public update = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const product = req.body as IProduct;
        const data = await this.productService.update(id, product)
    
        res.status(statusCodes.OK).json(data);
      }
}

export default ProductsController;
