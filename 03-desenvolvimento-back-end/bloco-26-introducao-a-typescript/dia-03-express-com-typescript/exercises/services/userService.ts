import connection from '../models/connection';
import UserModel from '../models/userModel';
import { User } from '../interfaces/index';


class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection);
    }

    public async getAll(): Promise<User[]> {
        const data = await this.getAll();

        return data;
    }
}

export default UserService;
