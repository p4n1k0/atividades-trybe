import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';


export default class BookModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<Product[]> {
        const result = await this.connection
            .execute('SELECT * FROM Products');
        const [products] = result
        
        return products as Product[];
    }
}
