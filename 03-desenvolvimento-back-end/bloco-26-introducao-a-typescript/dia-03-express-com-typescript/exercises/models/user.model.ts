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

    public async getByEmail(email: string): Promise<User | null> {
        const result = await this.connection
            .execute('SELECT * FROM Users WHERE email = ?', [email]);

        const [insertEmail] = result
        const [user] = insertEmail as User[];

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

    public async update(id: number, user: IUser): Promise<User> {
        const { name, email, password } = user;

        await this.connection.execute(
            'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?',
            [name, email, password]
        );

        const editedUser: User = { id, name, email, password };

        return editedUser;
    }

    public async remove(id: number): Promise<User | null> {
        const userToBeDeleted = await this.getById(id);
        if (!userToBeDeleted) {
            return null;
        }

        await this.connection.execute(
            'DELETE FROM Users WHERE id = ?',
            [id],
        );

        return userToBeDeleted;
    }
}
