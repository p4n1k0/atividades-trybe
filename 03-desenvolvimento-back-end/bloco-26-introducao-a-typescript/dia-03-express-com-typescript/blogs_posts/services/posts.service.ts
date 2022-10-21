import { Post } from '../interfaces';
import connection from '../models/connection';
import PostModel from '../models/posts.model';

class PostService {
    public model: PostModel;

    constructor() {
        this.model = new PostModel(connection);
    }

    public async getAll(): Promise<Post[]> {
        const posts = await this.model.getAll();

        return posts;
    }
}

export default PostService;
