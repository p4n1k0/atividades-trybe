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

    public async getById(id: number): Promise<Restaurant | null> {
        const result = await this.connection
            .execute('SELECT * FROM Restaurants WHERE id = ?', [id]);
        const [restaurants] = result;
        const [restaurant] = restaurants as Restaurant[];

        return restaurant || null;
    }
}
