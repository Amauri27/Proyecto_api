let mysql = require('../../bd/mysql');
module.exports={
    listar: (req,res)=>{
        mysql.query('select * from product', function (error, results, fields){
            if (error) res.json(error)
            else{
                res.json(results)
            }
        })
    },
    mostrarid: (req,res)=> {
        let id = req.params.id;
        console.log('buscando '+ id);
        mysql.query('select * from product where id=' + id, function (error, results, fields){
            if (error) res.json(error)
            else{
                res.json(results)
            }
        })
    },
    eliminar: (req,res)=>{
        let id = req.params.id;
        console.log('eliminando '+ id)
        mysql.query('delete from product where id=' + id, function (error, results, fields){
            if (error) res.json(error)
            else{
                res.json(results)
            }
        })
    },
    agregar: (req,res)=>{
        console.log(req.params)
        var name = req.params.name;
        var quantity = req.params.quantity;
        var cost = req.params.cost;
        mysql.query("insert into product (name,quantity,cost) values('"+name+"',"+quantity+","+cost+")", function (error, results, fields){
            if (error) res.json(error)
            else{
                res.json(results)
            }
        })
    }
}