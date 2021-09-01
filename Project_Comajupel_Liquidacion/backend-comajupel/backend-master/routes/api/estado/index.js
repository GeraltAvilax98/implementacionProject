var express = require("express");
var router = express.Router();

const {
  
  getEstado
} = require("./estado.model");

router.get("/", (req, res)=>{
	res.status(200).json({"version":0.01});
}); //get /




//------INFORMACION PERSONAL--------//
router.get(
  "/obtenerEstado/:id",
  async (req, res) => {
    const { id } = req.params;
    try {
      const rows = await getEstado(id);
      res.status(200).json(rows);
    } catch(ex){
      res.status(500).json({ msg: "error" });
    }
  }
);



module.exports = router;
