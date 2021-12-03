var router = require('express').Router();
var productoController = require('../controllers/productoController')

router.get('/',function(req,res){
    productoController.listar(req,res)
})

router.get('/:id',function(req,res){
    productoController.mostrarid(req,res)
})

router.delete('/:id',function(req,res){
    productoController.eliminar(req,res)
})

router.post('/', function(req,res){
    productoController.agregar(req,res)
})

module.exports = router;