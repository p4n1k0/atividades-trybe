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

    public update = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const restaurant = req.body as IRestaurant;
        const data = await this.service.update(id, restaurant)

        res.status(statusCodes.OK).json(data);
    }


    public remove = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        await this.service.remove(id)

        res.status(statusCodes.OK)
            .json({ message: 'Product deleted successfully' });
    };
    
    public getAllOpen = async (_req: Request, res: Response) => {
        const data = await this.service.getAllOpen();

        res.status(statusCodes.OK).json(data);
    }
}

export default RestaurantController;
