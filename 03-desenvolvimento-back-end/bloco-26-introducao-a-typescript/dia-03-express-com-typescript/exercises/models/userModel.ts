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
}
