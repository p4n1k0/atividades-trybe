import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, IUser } from '../interfaces/index';

export default class UserModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<User[]> {
        const result = await this.connection
            .execute('SELECT * FROM Users')
        const [users] = result;

        return users as User[];
    }

    public async getById(id: number): Promise<User | null> {
        const result = await this.connection
            .execute('SELECT * FROM Users WHERE id = ?', [id]);
        const [rows] = result;
        const [user] = rows as User[];

        return user || null;
    }

    public async create(user: IUser): Promise<User> {
        const { name, email, password } = user;

        const result = await this.connection.execute<ResultSetHeader>
            ('INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
                [name, email, password],
            );

        const [dataInserted] = result;
        const { insertId } = dataInserted;

        return { id: insertId, ...user };
    }
}
