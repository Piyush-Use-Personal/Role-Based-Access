import { Router } from 'express';
import Controller from './../controllers/index.js';
var router = Router();

// To make user login.
router.get('/login', Controller.login)

// to get the account details
router.get('/account', Controller.getAccount)

// to approve the account
router.put('/approve', Controller.approveAccount)

// to update the account
router.put('/account', Controller.updateAccount)

export default router;

