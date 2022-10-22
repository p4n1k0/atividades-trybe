import { Router } from 'express';
import RestaurantController from '../controllers/restaurant.controller';

const router = Router();
const controller = new RestaurantController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
