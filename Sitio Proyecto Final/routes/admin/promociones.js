var express = require('express');
var router = express.Router();

var promocionesModel = require("../../models/promocionesModel");

/*GET promociones page*/
router.get('/', async function (req, res, next) {

    var promociones = await promocionesModel.getPromociones();

    res.render('admin/promociones', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        promociones
    });
});

/*Para eliminar una promocion*/
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await promocionesModel.deletePromocionesById(id);
    res.redirect("/admin/promociones")
}); /*cierra eliminar una promocion*/

/*diseno de la pag agregar una promocion*/
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    }); //cierra render//
});//cierra GET//

//inserta Promocion en base de datos//
router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.info != "") {
            await promocionesModel.insertPromociones(req.body);
            res.redirect('/admin/promociones')

        } else {
            res.render("admin/agregar", {
                layout: 'admin/layout',
                error: true, message: "Todos los campos son requeridos"
            })
        }
    } catch (error) {
        console.log(error)
        res.render("admin/agregar", {
            layout: 'admin/layout',
            error: true, message: "No se ha cargado la promoción"
        });
    }
});
//diseno de: modificar + traer la novedad que yo seleccione//
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var promociones = await promocionesModel.getPromocionesById(id);
    res.render("/admin/modificar", {
        layout: 'admin/layout',
        promociones
    });
});//cierro get de modificar

//actualizar la promocion//
router.post('/modificar', async (req, res, next) => {
    try {
        console.log (req.body.id); //para ver si trae id
        var obj = {
            titulo: req.body.titulo,
            info: req.body.info,
        }
        console.log(obj)//para ver si trae los datos
        await promocionesModel.modificarPromocionesById(obj, req.body.id);
        res.redirect("/admin/promociones");

    } catch (error) {
        console.log(error)
        res.render("admin/modificar", {
            layout: 'admin/layout',
            error: true, 
            message: "No se ha modificado la promoción"
        })
    }//cierro el catch
});//cierro el post


module.exports = router;