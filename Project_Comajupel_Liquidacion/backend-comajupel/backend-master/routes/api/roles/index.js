var express = require("express");
var router = express.Router();

const {
  addCargo,
  obtenerCargo
} = require("./cargo.model");

router.get("/", (req, res)=>{
	res.status(200).json({"version":0.01});
}); //get /


//------INFORMACION PERSONAL--------//
router.get(
    "/obtenerCargo/:id",
    async (req, res) => {
      const { id } = req.params;
      try {
        const rows = await obtenerCargo(id);
        res.status(200).json(rows);
      } catch(ex){
        res.status(500).json({ msg: "error" });
      }
    }
);

//------------------AGREGAR CARGO----------//
router.post(
    "/addCargo",
    async (req, res) => {
      const { Descripcion } = req.body;
      //validaciones
      try{
        const result = await addCargo({ Descripcion});
        res.status(200).json(result);
      }  catch (ex) {
        res.status(500).json({ msg: "error" });
      }
    }
);




module.exports = router;
