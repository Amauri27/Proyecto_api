var router = require('express').Router();

var vehiculos = require('./vehiculos');
router.use('/vehiculos', vehiculos);
router.get('/',function(req,res){
    res.json({mensaje:'Bienvenido a mi api'})
})

var personas = require('./personas');
router.use('/personas', personas);

var productos = require('./productos');
router.use('/productos',productos);


module.exports=router;