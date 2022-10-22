import { IRestaurant, Restaurant } from '../interfaces';
import connection from '../models/connection';
import RestaurantModel from '../models/restaurant.model';
import { NotFoundError } from 'restify-errors';

class RestaurantService {
    public model: RestaurantModel;

    constructor() {
        this.model = new RestaurantModel(connection);
    }

    public async getAll(): Promise<Restaurant[]> {
        const restaurants = await this.model.getAll();

        return restaurants;
    }

    public async getById(id: number) {
        const restaurant = await this.model.getById(id);

        return restaurant;
    }

    public async create(restaurant: IRestaurant) {
        const data = await this.model.create(restaurant);

        return data
    }

    public async update(id: number, restaurant: IRestaurant) {
        const restauranttExists = await this.model.update(id, restaurant);

        if (restauranttExists === null) {
            throw new NotFoundError('NotFoundError');
        }

        return await this.model.update(id, restaurant);
    }

    public async remove(id: number) {
        const restaurant = await this.model.remove(id);

        if (restaurant === null) {
            throw new NotFoundError('NotFoundError');
        }

        return restaurant;
    }


    public async getAllOpen() {
        const data = await this.model.getAllOpen();

        if (!data.length) {
            throw new NotFoundError('NotFoundError');
        }

        return data;
    }
}

export default RestaurantService;
