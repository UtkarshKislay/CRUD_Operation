import StudentMode from '../models/StudentMode.js';
class StudentController{
    static createDoc=(req,res)=>{
        res.redirect('/student');
    }
    static getAllDocs=async(req,res)=>{
        try{
            const result=await StudentMode.find();
            console.log(result);
            res.render("index",{data:result});
        }catch(err){
            console.log(err);
        }
    }

    static editDoc=(req,res)=>{
        res.render('edit');
    }
    static updateDocById=(req,res)=>{
        res.redirect('/student');
    }

    static deleteById=(req,res)=>{
        res.redirect('/student');
    }
//crud
}

export default StudentController;