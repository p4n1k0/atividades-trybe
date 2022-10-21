import { IPost } from '../interfaces';
import connection from '../models/connection';
import PostModel from '../models/posts.model';
import { NotFoundError } from 'restify-errors';

class PostService {
    public model: PostModel;

    constructor() {
        this.model = new PostModel(connection);
    }

    public async getAll() {
        const posts = await this.model.getAll();

        return posts;
    }


    public async getById(id: number) {
        const post = await this.model.getById(id);

        return post;
    }

    public async create(post: IPost) {
        const data = await this.model.create(post);

        return data
    }

    public async update(id: number, post: IPost) {
        const postExists = await this.model.getById(id);

        if (!postExists) {
            throw new NotFoundError('NotFoundError');
        }

        return await this.model.update(id, post);
    }
}

export default PostService;
