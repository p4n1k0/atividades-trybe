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

    public async getById(id: number): Promise<Product | null> {
        const result = await this.connection
            .execute('SELECT * FROM Products WHERE id = ?', [id]);
        const [rows] = result;
        const [post] = rows as Product[];

        return post || null;
    }
}
