import { Request, Response } from 'express';
import statusCodes  from '../statusCodes';
import PostService from '../services/posts.service';


class PostsController {
    constructor(private postService = new PostService()) { }  
  
    public getAll = async (_req: Request, res: Response) => {  
      const posts = await this.postService.getAll();
  
      res.status(statusCodes.OK).json(posts);  
    };  
  }

  export default PostsController;
  