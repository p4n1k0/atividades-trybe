import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import PostService from '../services/posts.service';


class PostsController {
  constructor(private postService = new PostService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.getAll();

    res.status(statusCodes.OK).json(posts);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await this.postService.getById(Number(id));

    if (!post) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'Post not found' })
    }

    res.status(statusCodes.OK).json(post);
  }
}

export default PostsController;
