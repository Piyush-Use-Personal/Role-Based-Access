import { Router } from 'express';
import Controller from './../controllers/index.js';
import AuthenticateRoles from './../middlewares/AuthenticateRoles.js';
var router = Router();

// To make user login.
router.get('/login', Controller.login)

// to get the account details
router.get('/account', AuthenticateRoles.Customer, Controller.getAccount)

// to approve the account
router.put('/approve',AuthenticateRoles.Admin, Controller.approveAccount)

// to update the account
router.put('/account',AuthenticateRoles.Agent, Controller.updateAccount)

export default router;

