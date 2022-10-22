import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import RestaurantService from '../services/restaurant.service';

class ProductsController {
    constructor(private service = new RestaurantService()) { }

    public getAll = async (_req: Request, res: Response) => {
        const restaurants = await this.service.getAll();

        res.status(statusCodes.OK).json(restaurants);
    }
}

export default ProductsController;
