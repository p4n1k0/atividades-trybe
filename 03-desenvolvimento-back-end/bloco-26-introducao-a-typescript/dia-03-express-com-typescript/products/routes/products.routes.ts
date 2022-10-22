import { Router } from 'express';
import ProductsController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = Router();
const controller = new ProductsController();

router.get('/price', controller.getAllByPriceRange);
router.get('/n-expired', controller.getAllNotExpired);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);

router.use(productMiddleware);

router.post('/', controller.create);
router.put('/:id', controller.update);

export default router;
