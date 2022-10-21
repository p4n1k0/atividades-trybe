import { Router } from 'express';
import PostsController from '../controllers/posts.controller';

const router = Router();
const postsController = new PostsController();

router.get('/', postsController.getAll);
router.get('/:id', postsController.getById)

export default router;
