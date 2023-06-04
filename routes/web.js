import express from 'express';
import StudentController from '../controller/studentController.js';
const router =express.Router();

router.get('/',StudentController.getAllDocs);
router.get('/edit',(req,res)=>{
    res.render('edit');
});

export default router;