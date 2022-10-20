import jwt from 'jsonwebtoken'
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { secret, config } from '../middlewares/jwtConfig'
import { User, IUser } from '../interfaces/index';

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

        return user;
    }

    public async create(user: IUser): Promise<IUser> {
        const userExists = await this.model.getByEmail(user.email);

        if (userExists) {
            console.log('User alread exists');            
        }

        const payload = await this.model.create(user);
        const token = jwt.sign({ payload }, secret, config);
        const data = { token, ...payload };
        
        return  data ;
    }
}

export default UserService;
