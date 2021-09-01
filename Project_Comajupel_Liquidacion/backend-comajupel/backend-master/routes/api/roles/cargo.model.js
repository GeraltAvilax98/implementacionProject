const { mysqlConn, query} = require('../../utils/db');
// allHandler(err, returnValue)


//Asincronica
//--------------------------------------------------------------------------
module.exports.getCargos = async ()=>{
  try{
     return await query("Select * FROM cargo");
   }catch(e){
     throw(e);
   }
}

module.exports.obtenerCargo = async (id) => {
  const sqlstr = "SELECT * FROM cargo where Id_Cargo = ?;";
  try{
    return query(sqlstr, [id]);
  }catch(ex){
    throw(ex);
  }
}

  // Insert
  module.exports.addCargo = async ({Descripcion}) => {
    const sqlstr = "INSERT INTO cargo (Descripcion) values (?);";
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