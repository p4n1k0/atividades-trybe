import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, Product } from '../interfaces';


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

    public async create(product: IProduct): Promise<Product> {
        const { name, brand, price, manufacturingDate, expirationDate } = product;

        const result = await this.connection.execute<ResultSetHeader>
            ('INSERT INTO Products (title, author, category, publicationDate) VALUES (?, ?, ?, ?, ?)',
                [name, brand, price, manufacturingDate, expirationDate],
            );

        const [dataInserted] = result;
        const { insertId } = dataInserted;

        return { id: insertId, ...product };
    }

    public async update(id: number, product: IProduct) {
        const { name, brand, price, manufacturingDate, expirationDate } = product;

        await this.connection.execute(
            'UPDATE Posts SET name = ?, brand = ?, price = ?,  manufacturingDate = ?, expirationDate = ? WHERE id = ?',
            [name, brand, price, manufacturingDate, expirationDate, id]
        );
    }
}
