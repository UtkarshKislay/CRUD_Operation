import express from 'express';
import StudentController from '../controller/studentController.js';
const router =express.Router();

router.get('/',StudentController.getAllDocs);
export default router;