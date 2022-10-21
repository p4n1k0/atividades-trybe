import jwt from 'jsonwebtoken'
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { secret, config } from '../middlewares/jwtConfig'
import { User, IUser, UserCredentials } from '../interfaces/index';
import IToken from '../interfaces/itoken.interface';
import { NotFoundError } from 'restify-errors';

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

    public async update(id: number, user: IUser, token: string) {
        const { payload } = jwt.verify(token, secret) as IToken;

        if (payload.id !== id) {
            throw new NotFoundError ('NotFoundError');
        }

        return this.model.update(id, user);
    }

    public async remove(id: number, token: string) {
        const { payload } = jwt.verify(token, secret) as IToken;

        if (payload.id !== id) {
            return { message: 'You are not allowed to take this action'};
        }
        
        const userFound = await this.model.remove(id);

        if (userFound === null) {
            return { message: 'User not found'};
        }

        return userFound;
    }

    public async login(userCredentials: UserCredentials){
        const data = await this.model.getByEmail(userCredentials.email);

        if (data === null || data.password !== userCredentials.password) {
            return { message: 'Invalid email or password'}
        }

        return { data: { token: 'fake token' } };
    }
}

export default UserService;
