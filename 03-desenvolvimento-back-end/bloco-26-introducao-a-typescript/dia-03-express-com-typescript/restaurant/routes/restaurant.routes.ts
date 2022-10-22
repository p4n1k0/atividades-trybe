import { Router } from 'express';
import RestaurantController from '../controllers/restaurant.controller';
import middleware from '../middlewares/restaurant.middleware';

const router = Router();
const controller = new RestaurantController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);

router.use(middleware);

router.post('/', controller.create);
router.put('/:id', controller.update);

export default router;
