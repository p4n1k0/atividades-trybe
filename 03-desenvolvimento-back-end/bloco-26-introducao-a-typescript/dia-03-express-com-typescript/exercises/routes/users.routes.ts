import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import userMiddleware from '../middlewares/userMiddleware'

const router = Router();

const usersController = new UsersController();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);

router.use(userMiddleware);

router.post('/', usersController.create);
router.put('/:id', usersController.update);

export default router;
