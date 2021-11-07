const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
let database=require("../database");


module.exports={

    //Registering User
    registerUser :  (req, res) => {
   
        let {user_name,password,email}=req.body;

          bcryptjs.hash(password,10,(err,encrypted_password)=>{
            if (err) throw err;
            database.query("SELECT * FROM `login` WHERE USER_NAME= " +'"'+user_name+'"'+" AND EMAIL="+'"'+email+'"', function (err, result, fields) {
                
     
                if (!(result[0])) 
                {
                    database.query("INSERT INTO `login` (`user_name`, `password`, `email`) VALUES ( '" + user_name + "', '" + encrypted_password + "' , '" + email + "')",(err,result)=>{
                        if(err) console.log(err)
                        else {
                             res.json({message:"User Login Created"})
                        }
                    });
    
                } else {
                let input_email= result[0].email
                let input_user_name= result[0].user_name
                if ( (input_email === email) &&  (input_user_name === user_name)) 
                {res.json({message:"User Already Exists!"})}
                else{
    
                    database.query("INSERT INTO `login` (`user_name`, `password`, `email`) VALUES ( '" + user_name + "', '" + encrypted_password + "' , '" + email + "')",(err,result)=>{
                        if(err) console.log(err)
                        else {
                             res.json({message:"User Login Created"})
                            }
                    });
    
                }
    
                }
            });
        })

       

   },




   //Login check
   loginUser : async (req, res) => {
   
    
    let {user_name,password}=req.body;

   
     database.query("SELECT * FROM `login` WHERE USER_NAME= " +'"'+user_name+'"', function (err, result, fields) {
        if (err) throw err;

        if (!(result[0])) 
        {
            res.json({message:"User Do Not Exists"})

        } else {

        let db_user_name= result[0].user_name
        let db_password= result[0].password

        async function checkUser() {
                if ( ( await bcryptjs.compare(password,db_password.toString())) && (db_user_name === user_name) )  
                    {
                
                    const token = jwt.sign(
                        { user_name, password },
                        'privatekey',
                        {
                        expiresIn: "2h",
                        }
                    );
                
                    res.json({user_name:user_name, token: token})
                
                }
                else{

                    {res.json({message:"Invalid Credentials!"})}
                }
        }
    
        checkUser()

        }
    });




},


}