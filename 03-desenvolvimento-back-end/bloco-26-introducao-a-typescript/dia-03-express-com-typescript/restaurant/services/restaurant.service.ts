import { Restaurant } from '../interfaces';
import connection from '../models/connection';
import RestaurantModel from '../models/restaurant.model';

class ProductService {
    public model: RestaurantModel;

    constructor() {
        this.model = new RestaurantModel(connection);
    }

    public async getAll(): Promise<Restaurant[]> {
        const restaurants = await this.model.getAll();

        return restaurants;
    }
}

export default ProductService;
