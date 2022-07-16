import bcrypt from 'bcrypt';
import hashPassword from '../util/hashing';
import { IUser } from '../interface';
// import { userData } from '../persistance/postgresDBDataAccess';
import { userData } from '../persistance/mongoDBDataAccess';
import Env from '../../config';

const { PEPPER } = Env;

class UserService {
  saveUser = async (user : IUser) => {
    try {
      return userData.saveUser({ ...user, password: hashPassword(user.password) });
    } catch {
      throw new Error('Fail to signup the user, Please try again !!');
    }
  };

  getUserById = (id: string) => {
    try {
      return userData.getUserById(id);
    } catch {
      throw new Error('Fail to get the user Data');
    }
  };

  signinUser = async (email: string, password: string) => {
    try {
      const user = await userData.getUserByEmail(email);
      if (user) {
        const isPasswordValid = bcrypt.compareSync(
          `${password}${PEPPER}`,
          Object(user).password,
        );
        if (isPasswordValid) {
          return user;
        }
      }
      return null;
    } catch {
      throw new Error('Fail to get the user Data');
    }
  };
}

export default new UserService();
