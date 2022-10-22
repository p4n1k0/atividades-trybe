import { IRestaurant, Restaurant } from '../interfaces';
import connection from '../models/connection';
import RestaurantModel from '../models/restaurant.model';

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
}

export default RestaurantService;
