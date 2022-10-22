import { Router } from 'express';
import ProductsController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = Router();
const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);

router.use(productMiddleware);

router.post('/', productsController.create);

export default router;
