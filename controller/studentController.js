import StudentMode from '../models/StudentMode.js';
class StudentController{
    static createDoc=async(req,res)=>{
        // console.log(req.body);
        try{
            const {name,age,fees}=req.body;
            const doc=new StudentMode({
                name:name,
                age:age,
                fees:fees
            });
            const result=await doc.save();
            res.redirect('/student'); 
            
        }catch(err){
            console.log(err);
        }
    
    }
    static getAllDocs=async(req,res)=>{
        try{
            const result=await StudentMode.find();
            // console.log(result);

            res.render("index",{data:result});
        }catch(err){
            console.log(err);
        }
    }

    static editDoc=async(req,res)=>{
        // console.log(req.params.id);
        try{
          const result=await StudentMode.findById(req.params.id);
          res.render('edit',{data:result});
        }catch(err){
            console.log(err);
        }
        
    }
    static updateDocById=async(req,res)=>{
          try{
              const result=await StudentMode.findByIdAndUpdate(req.params.id,req.body);
              res.redirect('/student');
          }catch(err){
            console.log(err);
          }
    }

    static deleteById=async(req,res)=>{
        try{
            const result=await StudentMode.findByIdAndDelete(req.params.id);
            res.redirect('/student');
        }catch(err){
          console.log(err);
        }
    
    }
//crud
}

export default StudentController;