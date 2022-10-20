import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces/index';

const MESSAGES = {
    USER_NOT_FOUND: 'User not found',
    UNAUTHORIZED: 'Invalid email or password',
    USER_EXISTS: 'User already exists',
    FORBIDDEN: 'You are not allowed to take this action',
};


class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection);
    }

    public async getAll(): Promise<User[]> {
        const users = await this.model.getAll();

        return users;
    }

    public async getById(id: number): Promise<User | null> {
        const user = await this.model.getById(id);

        if (user === null) {
            return 
        }

        return user;
    }
}

export default UserService;
