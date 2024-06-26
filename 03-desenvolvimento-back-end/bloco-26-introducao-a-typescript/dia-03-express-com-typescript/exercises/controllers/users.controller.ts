import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/users.service';
import { IUser, UserCredentials } from '../interfaces';


class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    res.status(statusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(Number(id));

    if (!user) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'User not found' });
    }

    res.status(statusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const userCreated = await this.userService.create(user);

    res.status(statusCodes.CREATED).json(userCreated);
  }

  public update = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers

    if (!token) {
      return res.status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Token not found' })
    }

    const id = Number(req.params.id);
    const user = req.body as IUser;
    await this.userService.update(id, user, token as string);

    res.status(statusCodes.NO_CONTENT)
  }

  public remove = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;

    if (!token) {
      return res.status(statusCodes.UNAUTHORIZED)
        .json({ message: 'Token not found' })
    }

    const id = Number(req.params.id);
    const user = req.body;

    await this.userService.update(id, user, token as string)

    res.status(statusCodes.OK)
      .json({ message: 'User deleted successfully'});
  };

  public login = async (req: Request, res: Response) => {
    const userCredentials = req.body as UserCredentials;
    const { data } = await this.userService.login(userCredentials);

    res.status(statusCodes.OK).json(data);
  }
}

export default UsersController;
