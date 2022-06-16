import * as express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/signup', userController.addUser);

export default router;
