import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IRestaurant, Restaurant } from '../interfaces';

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


    public async create(restaurant: IRestaurant): Promise<Restaurant> {
        const { name, category, openingTime, closingTime } = restaurant;

        const result = await this.connection.execute<ResultSetHeader>
            ('INSERT INTO Restaurants (title, category, openingTime, closingTime) VALUES (?, ?, ?, ?, ?)',
                [name, category, openingTime, closingTime],
            );

        const [dataInserted] = result;
        const { insertId } = dataInserted;

        return { id: insertId, ...restaurant };
    }

    public async update(id: number, restaurant: IRestaurant): Promise<Restaurant> {
        const { name, category, openingTime, closingTime } = restaurant;

        await this.connection.execute(
            'UPDATE Restaurants SET name = ?, category = ?, openingTime = ?,  closingTime = ? WHERE id = ?',
            [name, category, openingTime, closingTime, id]
        );

        const editedRestaurant: Restaurant = { id, ...restaurant }

        return editedRestaurant;
    }

    public async remove(id: number): Promise<Restaurant | null> {
        const restaurantToBeDeleted = await this.getById(id);
        if (!restaurantToBeDeleted) {
            return null;
        }

        await this.connection.execute(
            'DELETE FROM Restaurants WHERE id = ?',
            [id],
        );

        return restaurantToBeDeleted;
    }
}
