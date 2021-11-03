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

// connection.query('SELECT * AS solution', function (err, rows) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()
module.exports=connection;