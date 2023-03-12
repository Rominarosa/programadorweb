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
});


module.exports = router;