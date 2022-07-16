import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { userService } from '../services';
import Env from '../../config';

const { SECRETE } = Env;
class UserController {
  saveUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      await userService.saveUser(body);
      res.send({
        msg: 'User added successfully',
      });
    } catch (e: unknown) {
      res.status(401).send({
        error: (e instanceof Error && e.message) || 'Fail to signup the user, Please try again !!',
      });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(id);
      res.send({
        msg: 'User got successfully', user,
      });
    } catch (e: unknown) {
      res.status(401).send({
        error: (e instanceof Error && e.message) || 'Fail to get user data, Please try again !!',
      });
    }
  };

  signin = async (req: Request, res: Response) => {
    const { body: { email, password } } = req;
    try {
      const user = await userService.signinUser(email, password);
      if (user) {
        const token = jwt.sign({ user }, SECRETE as string);
        res.send({
          msg: 'Signin successfully',
          data: { token, ...user },
        });
      } else {
        res.send({
          msg: 'Email and password not match, Please try again',
        });
      }
    } catch (e: unknown) {
      res.status(401).send({
        error: (e instanceof Error && e.message) || 'Fail to signin, Please try again !!',
      });
    }
  };
}

export default new UserController();
