const { mysqlConn, query} = require('../../utils/db');
// allHandler(err, returnValue)


//Asincronica
//--------------------------------------------------------------------------


module.exports.getEstado = async (id) => {
  const sqlstr = "SELECT * FROM estado where Id_Estado = ?;";
  try{
    return query(sqlstr, [id]);
  }catch(ex){
    throw(ex);
  }
}