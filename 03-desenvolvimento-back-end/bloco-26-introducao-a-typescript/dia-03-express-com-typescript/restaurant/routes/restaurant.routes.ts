import { Router } from 'express';
import RestaurantController from '../controllers/restaurant.controller';
import middleware from '../middlewares/restaurant.middleware';

const router = Router();
const controller = new RestaurantController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

router.use(middleware);

router.post('/', controller.create);

export default router;
