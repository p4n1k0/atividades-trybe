import { Router } from 'express';
import PostsController from '../controllers/posts.controller';
import postMiddleware from '../middlewares/posts.middleware'

const router = Router();
const postsController = new PostsController();

router.get('/', postsController.getAll);
router.get('/:id', postsController.getById);
router.delete('/:id', postsController.remove);

router.use(postMiddleware);

router.post('/', postsController.create);
router.put('/:id', postsController.update);

export default router;
