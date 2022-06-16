/* eslint-disable class-methods-use-this */
import axios from 'axios';
import IUser from '../interfaces/domain/user';
import vars from '../config/env.config';

const backendUrl = vars.get('backendUrl');

class User {
  signup = (user : IUser) => axios.post(`${backendUrl}/signup`, user);
}

export default new User();
