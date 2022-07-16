import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Env from '../../config';

const { SECRETE } = Env;

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  try {
    const authType = authHeader?.split(' ')[0].toLowerCase();
    const authToken = authHeader?.replace(/[ ]+/, ' ').split(' ')[1];
    const isTokenValid = jwt.verify(authToken as string, SECRETE as string) && authType === 'bearer';
    if (isTokenValid) {
      next();
    } else {
      throw new Error();
    }
  } catch {
    res.status(401).send({
      error: 'unauthorized user !!',
    });
  }
};

export default isAuth;
