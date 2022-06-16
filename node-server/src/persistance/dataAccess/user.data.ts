// import userModel, { User } from '../../models/sql/user.model';

class UserData {
  addUser = async (/* user : User */) => {
    try {
      // eslint-disable-next-line new-cap
      // const newUser = new userModel(user);
      // await newUser.save();
      // return this.getEmpByObj(newEmp);
    } catch (e) {
      Object(e).message = 'Fail to save the employee !!';
      throw e;
    }
  };

  // getUserByObj = async (obj: User) => {
  //   try {
  //     return userModel.findOne(obj);
  //   } catch (e) {
  //     Object(e).message = 'Fail to get required employee !!';
  //     throw e;
  //   }
  // };
}

export default new UserData();
