import express from 'express';
import StudentController from '../controller/studentController.js';
const router =express.Router();

router.get('/',StudentController.getAllDocs);
router.post('/',StudentController.createDoc);
router.get('/edit',StudentController.editDoc);
router.post('/update/:id',StudentController.updateDocById);
router.post('/delete/:id',StudentController.deleteById);


export default router;