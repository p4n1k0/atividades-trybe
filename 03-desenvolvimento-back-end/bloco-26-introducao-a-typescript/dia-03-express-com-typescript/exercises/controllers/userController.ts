import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService  from '../services/userService';


class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const  users = await this.userService.getAll();

    res.status(statusCodes.OK).json(users);
  };
}

export default UsersController;
