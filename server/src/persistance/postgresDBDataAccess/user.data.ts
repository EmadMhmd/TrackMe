import { User } from '../../models/postgres';
import { IUser } from '../../interface';

class UserData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUser = async (user: IUser) => {
    try {
      const newUser = await User.create({ ...user });
      return newUser;
    } catch {
      throw new Error('Fail to save the user, Please try again !!');
    }
  };

  getUserById = (id: string) => {
    try {
      return User.findOne({ where: { id } });
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };

  getUserByEmail = (email: string) => {
    try {
      return User.findOne({ where: { email } });
    } catch {
      throw new Error('Fail to get the user, Please try again !!');
    }
  };
}

export default new UserData();
