const { mysqlConn, query} = require('../../utils/db');
// allHandler(err, returnValue)


//Asincronica
//--------------------------------------------------------------------------
module.exports.getCreditos = async ()=>{
  try{
     return await query("Select * FROM tipo_credito");
   }catch(e){
     throw(e);
   }
}

module.exports.getCredito = async (id) => {
  const sqlstr = "SELECT * FROM tipo_credito where Id_Credito = ?;";
  try{
    return query(sqlstr, [id]);
  }catch(ex){
    throw(ex);
  }
}

  // Insert
  module.exports.addCredito = async ({Descripcion}) => {
    const sqlstr = "INSERT INTO tipo_credito (Descripcion) values (?);";
    try{
      return await query(sqlstr, [Descripcion]);
    }catch(ex){
      throw(ex);
    }
  }

  //Update
  module.exports.updateCredito = async ({ Descripcion, id}) => {
    const sqlstr = "UPDATE tipo_credito set Descripcion = ?  where Id_Credito = ?;";
    try {
      return await query(sqlstr, [Descripcion, id]);
    } catch (ex) {
      throw (ex);
    }
  }