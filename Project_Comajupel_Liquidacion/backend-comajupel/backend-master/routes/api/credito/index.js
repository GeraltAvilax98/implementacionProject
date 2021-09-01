var express = require("express");
var router = express.Router();

const {
  getCreditos,
  addCredito,
  updateCredito,
  deleteCredito,
  getCredito
} = require("./credito.model");

router.get("/", (req, res)=>{
	res.status(200).json({"version":0.01});
}); //get /

//------------------EMLEADOS-------------//
//------INFORMACION GENERAL--------//
router.get("/obtenerCreditos", async (req, res) => {
  try{
    const rows =  await getCreditos();
    res.status(200).json(rows);
  }catch(ex){
    console.log(ex);
    res.status(500).json({msg:"error"});
  }
});

//------INFORMACION PERSONAL--------//
router.get(
  "/obtenerCredito/:id",
  async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await getCredito(id);
      res.status(200).json(rows);
    } catch(ex){
      res.status(500).json({ msg: "error" });
    }
  }
);

//------------------AGREGAR CREDITO----------//
router.post(
    "/addCredito",
    async (req, res) => {
      const { Descripcion } = req.body;
      //validaciones
      try{
        const result = await addCredito({ Descripcion});
        res.status(200).json(result);
      }  catch (ex) {
        res.status(500).json({ msg: "error" });
      }
    }
);

//-----------------------ACTUALIZAR EMPLEADO---------//
router.put(
    "/updateCredito/:id",
    async (req, res) => {
        const { id } = req.params;
        const { Descripcion } = req.body;
        //validaciones
        try {
        const result = await updateCredito({ Descripcion, id })
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
