const { mysqlConn, query} = require('../../utils/db');
// allHandler(err, returnValue)


//Asincronica
//--------------------------------------------------------------------------
module.exports.getEmpleados = async ()=>{
  try{
     return await query("Select * FROM empleado_deptcredito");
   }catch(e){
     throw(e);
   }
}

module.exports.getEmpleado = async (id) => {
  const sqlstr = "SELECT * FROM empleado_deptcredito where Id_Empleado = ?;";
  try{
    return query(sqlstr, [id]);
  }catch(ex){
    throw(ex);
  }
}

  // Insert
  module.exports.addEmpleado = async ({Nombre, Apellido, Id_Estado, Id_Cargo}) => {
    const sqlstr = "INSERT INTO empleado_deptcredito (Nombre, Apellido, Id_Estado, Id_Cargo) values (?,?,?,?);";
    try{
      return await query(sqlstr, [Nombre, Apellido, Id_Estado, Id_Cargo]);
    }catch(ex){
      throw(ex);
    }
  }

  //Update
  module.exports.updateEmpleado = async ({ Nombre, Apellido, Id_Estado, Id_Cargo, id}) => {
    const sqlstr = "UPDATE empleado_deptcredito set Nombre = ?, Apellido = ?, Id_Estado = ?, Id_Cargo = ? where Id_Empleado = ?;";
    try {
      return await query(sqlstr, [Nombre, Apellido, Id_Estado, Id_Cargo, id]);
    } catch (ex) {
      throw (ex);
    }
  }
  
  // Delete
  module.exports.deleteEmpleado = async ( id) => {
    const sqlstr = "DELETE FROM  empleado_deptcredito where Id_Empleado = ?;";
    try {
      return await query(sqlstr, [id]);
    } catch (ex) {
      throw (ex);
    }
  }