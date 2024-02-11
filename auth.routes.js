import { Router } from 'express';
import { check } from 'express-validator';
import authController from './auth.controller.js';

const router = new Router();

router.post(
  '/registration',
  [
    check('username', 'field must not be empty').notEmpty(),
    check('email', 'incorrect email').isEmail(),
    check('phone-number', 'incorrect phone number').isLength({ min: 16 }),
    check('message', 'field must not be empty').notEmpty()
  ],
  authController.registration
);

export default router;
