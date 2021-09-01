var mysql = require("mysql");

var mysqlConn = mysql.createConnection({
	host : process.env.HOST, 
	user : process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

mysqlConn.connect((err)=>{
	if(err){
		console.log(err);
		process.exit(1);
	}
    else{
        console.log("Conectado gracias a Dios");
    }
} );

var query = (sql, args)=>{
  return new Promise(
    (resolve, reject) => {
      mysqlConn.query(sql, args, (err, rows)=>{
        if(err)
          return reject( err );
        resolve( rows );
      });
    }
  );
}


module.exports = {mysqlConn, query};
