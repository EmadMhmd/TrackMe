import { Request, Response } from 'express';
import userData from '../persistance/dataAccess/user.data';

class UserContoller {
  addUser = async (req: Request, res: Response) => {
    // const { body } = req;
    try {
      userData.addUser(/* body */);
      res.send({
        msg: 'User added successfully',
      });
    } catch (e) {
      res.status(401).send({
        error: 'Error Throwed From  User add service',
      });
    }
  };
}

export default new UserContoller();
