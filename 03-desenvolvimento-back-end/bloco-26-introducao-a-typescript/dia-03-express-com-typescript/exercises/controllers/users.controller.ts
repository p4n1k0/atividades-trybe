import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UserService from '../services/users.service';


class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    res.status(statusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(Number(id));

    if(!user) {
      return res.status(statusCodes.NOT_FOUND)
      .json({ message: 'User not found' });
    }

    res.status(statusCodes.OK).json(user);
  }
}

export default UsersController;
