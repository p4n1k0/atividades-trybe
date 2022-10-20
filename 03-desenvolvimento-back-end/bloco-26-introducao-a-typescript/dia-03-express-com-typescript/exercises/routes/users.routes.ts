import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

const usersController = new UsersController();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);

export default router;
