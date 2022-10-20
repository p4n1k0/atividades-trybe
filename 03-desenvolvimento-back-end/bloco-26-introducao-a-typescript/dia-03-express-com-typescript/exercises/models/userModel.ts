import { Pool } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces';

export default class BookModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<User[]> {
        const query = 'SELECT * FROM Users';
        const [users] = await connection.execute(query);

        return users as User[];
    }

    public async getById(id: number): Promise<User | null> {
        const query = 'SELECT * FROM Users WHERE id = ?';
        const values = [id];
      
        const [data] = await connection.execute(query, values);
        const [user] = data as User[];
      
        return user || null;
      }
}
