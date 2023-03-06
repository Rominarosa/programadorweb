var express = require('express');
var router = express.Router();
var usuariosModel = require("./../../models/usuarioModel");

router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

//para destruir variables de sesion//
router.get("/logout",function (req, res, next) {
    req.session.destroy (); // para destruir la sesion
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

router.post("/", async (req, res, netx) => {
    try {
        console.log(req.body);
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserAndPassword
            (usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id; //es el nombre de la columna
            req.session.nombre = data.usuario;

            res.redirect("/admin/novedades");
            
        } else {
            res.render("admin/login", {
                layout: "admin/layout",
                error: true
            })
        } //cierra el else

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;