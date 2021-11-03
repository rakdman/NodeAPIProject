
let database=require("../database");
const { param } = require("../routes/user-routes");

module.exports={
     getUser : async (req, res) => {

       
          
            database.query("SELECT * FROM `users`", function (err, result, fields) {
              if (err) throw err;
              res.json(result);
            });
    },
    
    getUserById:async(req,res)=>{

        let id=req.params.id;

        database.query("SELECT * FROM `users` WHERE ID="+id, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
          });

    },
    
     createUser: (req,res) => {
        
            let {user_name,street_name,city_name,postal_code}=req.body;
            // let user=await database.query(`INSERT INTO users ("user_name","street_name","city_name","postal_code") VALUES("${user_name}","${street_name}","${city_name}","${postal_code}")`);
            database.query("INSERT INTO `users` (`user_name`, `street_name`, `city_name`,`postal_code`) VALUES ( '" + user_name + "', '" + street_name + "' , '" + city_name + "', '" + postal_code + "')",(err,result)=>{
                if(err) console.log(err)
                else {
                    res.json({message:"User Created"})
                }
            });
       
    },
    
    

        updateUser: (req,res) => {
        
            let {user_name,street_name,city_name,postal_code}=req.body;
            let id=req.params.id;
          
            database.query("UPDATE `users` SET user_name=" +'"'+  user_name   + '", ' + "street_name=" + '"' + street_name+ '"' +", city_name=" + '"'+ city_name+ '"' + ", postal_code="+ '"' +postal_code + '"'+ " WHERE ID="+'"'+id +'"'   ,(err,result)=>{
                if(err) console.log(err)
                else {
                    res.json({message:"User Details Updated"})
                }
            });
       
    },
    
     deleteUser:async(req,res)=>{

        let id=req.params.id;

        database.query("DELETE FROM `users` WHERE ID="+id, function (err, result, fields) {
            if (err) throw err;
            res.json({message:"User "+ id + " Deleted"})
          });

        
    },
}

