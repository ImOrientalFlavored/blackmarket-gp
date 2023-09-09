import express from 'express';

import { registerValidation } from 'middleware/registerValidation.middleware';
import { encryptPassword } from 'middleware/encryptPassword.middleware';
import { registerNewUser } from '../services/registerNewUser';

const mw = [encryptPassword, registerNewUser]

const router = express.Router();
router.all('*', registerValidation);
router.post('/', mw)
router.post('/', (_req, _res) => {
    console.log("Registering user complete");
    console.log("Connection ended");
})

export default router;