var express = require("express");
var router = express.Router();

const {
  getEmpleados,
  addEmpleado,
  updateEmpleado,
  deleteEmpleado,
  getEmpleado
} = require("./empleado.model");

router.get("/", (req, res)=>{
	res.status(200).json({"version":0.01});
}); //get /

//------------------EMLEADOS-------------//
//------INFORMACION DE EMPLEADOS--------//
router.get("/obtenerEmpleados", async (req, res) => {
  try{
    const rows =  await getEmpleados();
    res.status(200).json(rows);
  }catch(ex){
    console.log(ex);
    res.status(500).json({msg:"error"});
  }
});


router.get(
  "/obtenerEmpleado/:id",
  async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await getEmpleado(id);
      res.status(200).json(rows);
    } catch(ex){
      res.status(500).json({ msg: "error" });
    }
  }
);

//------------------AGREGAR EMPLEADO----------//
router.post(
    "/addEmpleado",
    async (req, res) => {
      const { Nombre, Apellido, Id_Estado, Id_Cargo } = req.body;
      //validaciones
      try{
        const result = await addEmpleado({ Nombre, Apellido, Id_Estado, Id_Cargo});
        res.status(200).json(result);
      }  catch (ex) {
        res.status(500).json({ msg: "error" });
      }
    }
);

//-----------------------ACTUALIZAR EMPLEADO---------//
router.put(
    "/updateEmpleado/:id",
    async (req, res) => {
        const { id } = req.params;
        const { Nombre, Apellido, Id_Estado, Id_Cargo } = req.body;
        //validaciones
        try {
        const result = await updateEmpleado({ Nombre, Apellido, Id_Estado, Id_Cargo, id })
        res.status("200").json(result);
        } catch (ex) {
        res.status(500).json({ msg: "error" });
        }
    }
);
//-----------------------BORRAR EMPLEADO---------//
router.delete(
    "/deleteEmpleado/:id",
    async (req, res) => {
      const { id } = req.params;
      //validaciones
      try {
        const result = await deleteEmpleado( id );
        res.status("200").json(result);
      } catch (ex) {
        res.status(500).json({ msg: "error" });
      }
    }
);

module.exports = router;
