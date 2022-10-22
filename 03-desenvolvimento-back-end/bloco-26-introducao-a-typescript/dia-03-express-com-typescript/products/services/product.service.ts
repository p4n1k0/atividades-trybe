import { IProduct, Product } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { NotFoundError } from 'restify-errors';

class ProductService {
    public model: ProductModel;

    constructor() {
        this.model = new ProductModel(connection);
    }

    public async getAll(): Promise<Product[]> {
        const products = await this.model.getAll();

        return products;
    }

    public async getById(id: number) {
        const product = await this.model.getById(id);

        return product;
    }

    public async create(product: IProduct) {
        const data = await this.model.create(product);

        return data
    }

    public async update(id: number, product: IProduct) {
        const productExists = await this.model.getById(id);

        if (!productExists) {
            throw new NotFoundError('NotFoundError');
        }

        return await this.model.update(id, product);
    }

    public async remove(id: number) {
        const product = await this.model.remove(id);

        if (product === null) {
            throw new NotFoundError('NotFoundError');
        }

        return product;
    }
}

export default ProductService;
