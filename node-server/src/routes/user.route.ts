import * as express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.post('/signup', userController.addUser); // test add to alias

// router.post('/testOcr',ocrController.testOcr);

export default router;
