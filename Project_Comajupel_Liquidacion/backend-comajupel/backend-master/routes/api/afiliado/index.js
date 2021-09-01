var express = require("express");
var router = express.Router();

const {
  obtenerCliente
} = require("./cliente.model");

router.get("/", (req, res)=>{
	res.status(200).json({"version":0.01});
}); //get /


//------INFORMACION PERSONAL--------//
router.get(
    "/obtenerCliente/:id",
    async (req, res) => {
      const { id } = req.params;
      try {
        const rows = await obtenerCliente(id);
        res.status(200).json(rows);
      } catch(ex){
        res.status(500).json({ msg: "error" });
      }
    }
);




module.exports = router;
