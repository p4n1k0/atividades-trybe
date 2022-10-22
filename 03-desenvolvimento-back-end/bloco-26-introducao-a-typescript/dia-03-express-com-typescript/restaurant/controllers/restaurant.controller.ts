import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import RestaurantService from '../services/restaurant.service';
import { IRestaurant } from '../interfaces';

class RestaurantController {
    constructor(private service = new RestaurantService()) { }

    public getAll = async (_req: Request, res: Response) => {
        const restaurants = await this.service.getAll();

        res.status(statusCodes.OK).json(restaurants);
    }

    public getById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const restaurant = await this.service.getById(Number(id));

        if (!restaurant) {
            return res.status(statusCodes.NOT_FOUND)
                .json({ message: 'Restaurant not found' })
        }

        res.status(statusCodes.OK).json(restaurant);
    }

    public create = async (req: Request, res: Response) => {
        const restaurant = req.body as IRestaurant;
        const restaurantCreated = await this.service.create(restaurant);

        res.status(statusCodes.CREATED).json(restaurantCreated);
    }
}

export default RestaurantController;
