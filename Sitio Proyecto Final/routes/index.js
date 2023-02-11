var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async(req, res, next) => {
  console.log(req.body)
});

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var teléfono = req.body.telefono;
var email = req.body.email;
var mensaje = req.body.mensaje;

var obj = {
  to: 'romina.rosa.quintana@gmail.com',
  subject: 'Contacto desde la Web',
  html: nombre + " " + apellido + "se cotacto a traves de la web y desea mas info a este correo" + email + ".<br> Además, realizo el siguiente comentario:" + mensaje + ".<br> su telefono es " + telefono
}//cierra var obj

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS
    
  }
}); //cierra transporter

var info = await transporter.sendMail(obj);

res.render ('index',{
  message:'Mensaje enviado correctamente',
});
// cierra peticion del post
