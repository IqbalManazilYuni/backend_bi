import express from 'express';
import {getUsers,getUsersById,updateUser,deleteUser} from "../controller/UserController.js"
import { registerUser } from '../controller/RegisterController.js';

const router =express.Router();

router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.post('/register',registerUser);
router.patch('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

export default router;