import { Request, Response } from 'express';
import connection from '../models/connection';
import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';
import { IProduct } from '../interfaces/index'

class ProductsController {
    constructor(private service = new ProductService()) {
        
    }

    public getAll = async (_req: Request, res: Response) => {
        const products = await this.service.getAll();

        res.status(statusCodes.OK).json(products);
    }

    public getById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const product = await this.service.getById(Number(id));

        if (!product) {
            return res.status(statusCodes.NOT_FOUND)
                .json({ message: 'Product not found' })
        }

        res.status(statusCodes.OK).json(product);
    }

    public create = async (req: Request, res: Response) => {
        const product = req.body as IProduct;
        const productCreated = await this.service.create(product);

        res.status(statusCodes.CREATED).json(productCreated);
    }

    public update = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const product = req.body as IProduct;
        const data = await this.service.update(id, product)

        res.status(statusCodes.OK).json(data);
    }

    public remove = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        await this.service.remove(id)

        res.status(statusCodes.OK)
            .json({ message: 'Product deleted successfully' });
    };

    public getAllByPriceRange = async (req: Request, res: Response) => {
        const { start, end } = req.query;
        const data = await this.service.getAllByPriceRange(Number(start), Number(end));

        res.status(statusCodes.OK).json(data);
    }

    public getAllNotExpired = async (_req: Request, res: Response) => {
        const data = await this.service.getAllNotExpired();

        res.status(statusCodes.OK).json(data);
    }
}

export default ProductsController;
