const { mysqlConn, query} = require('../../utils/db');
// allHandler(err, returnValue)


//Asincronica
//--------------------------------------------------------------------------


module.exports.obtenerCliente = async (id) => {
  const sqlstr = "SELECT * FROM cliente where No_Cuenta = ?;";
  try{
    return query(sqlstr, [id]);
  }catch(ex){
    throw(ex);
  }
}
