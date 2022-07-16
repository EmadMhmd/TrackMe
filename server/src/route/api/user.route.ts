import * as express from 'express';
import { userController } from '../../controller';
import isAuth from '../../middleware/auth.middleware';

const router = express.Router();

router.route('/')
  .post(userController.saveUser);

router.route('/signin')
  .post(userController.signin);

router.route('/:id')
  // .all(isAuth)
  .get(userController.getUserById)
  .delete(userController.getUserById)
  .patch(userController.getUserById)
  .put(userController.getUserById);

export default router;
