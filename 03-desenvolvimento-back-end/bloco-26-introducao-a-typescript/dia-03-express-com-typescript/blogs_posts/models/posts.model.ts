import { Pool } from 'mysql2/promise';
import { Post, IPost } from '../interfaces/index';


export default class PostModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<Post[]> {
        const result = await this.connection
            .execute('SELECT * FROM Posts')
        const [posts] = result;

        return posts as Post[];
    }

    public async getById(id: number): Promise<Post | null> {
        const result = await this.connection
            .execute('SELECT * FROM Posts WHERE id = ?', [id]);
        const [rows] = result;
        const [post] = rows as Post[];

        return post || null;
    }
}
