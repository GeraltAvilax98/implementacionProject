var express = require("express");
var router = express.Router();

var liquidaciones_routes = require("./empleado/index");

var liquidaciones_routes = require("./credito/index");

var liquidaciones_routes = require("./roles/index");

var liquidaciones_routes = require("./afiliado/index");

var liquidaciones_routes = require("./estado/index");

router.use("/liquidaciones", liquidaciones_routes);


module.exports = router;
