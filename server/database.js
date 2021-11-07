var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  insecureAuth:true,
  user: 'root',

  
  password: 'sysadm',
  database: 'web_database'
})

connection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Database connected');
})

module.exports=connection;