import { Pool } from 'mysql2/promise';
import { Restaurant } from '../interfaces';

export default class RestaurantModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async getAll(): Promise<Restaurant[]> {
        const result = await this.connection
            .execute('SELECT * FROM Restaurants');
        const [restaurants] = result;

        return restaurants as Restaurant[];
    }
}
