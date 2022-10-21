import { Router } from 'express';
import PostsController from '../controllers/posts.controller';

const router = Router();
const postsController = new PostsController();

router.get('/posts', postsController.getAll)

export default router;
