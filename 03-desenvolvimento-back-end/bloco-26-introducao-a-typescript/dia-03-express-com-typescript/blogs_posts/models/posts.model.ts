import { Pool, ResultSetHeader } from 'mysql2/promise';
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

    public async create(post: IPost): Promise<Post> {
        const { title, author, category, publicationDate } = post;

        const result = await this.connection.execute<ResultSetHeader>
            ('INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)',
                [title, author, category, publicationDate],
            );

        const [dataInserted] = result;
        const { insertId } = dataInserted;

        return { id: insertId, ...post };
    }

    public async update(id: number, post: IPost) {
        const { title, author, category, publicationDate } = post;

        await this.connection.execute(
            'UPDATE Posts SET title = ?, author = ?, category = ?, publicationDate = ? WHERE id = ?',
            [title, author, category, publicationDate, id]
        );
    }

    public async remove(id: number): Promise<Post | null> {
        const postToBeDeleted = await this.getById(id);
        if (!postToBeDeleted) {
            return null;
        }

        await this.connection.execute(
            'DELETE FROM Posts WHERE id = ?',
            [id],
        );

        return postToBeDeleted;
    }

    public async getAllBySearchTerm(term: string): Promise<Post[]> {
        const result = await this.connection
            .execute('SELECT * FROM Posts WHERE title LIKE ? OR author LIKE ? OR category LIKE ? OR publicationDate LIKE ?',
                [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`]);                
        const [posts] = result;

        return posts as Post[];
    }
}
