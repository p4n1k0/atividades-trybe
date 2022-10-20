import { Router } from 'express';
import UsersControllers from '../controllers/userController';

const router = Router();
const usersController = new UsersControllers();

router.get('/', usersController.getAll);

export default router;
