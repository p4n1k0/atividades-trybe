import { IProduct, Product } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

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
}

export default ProductService;
