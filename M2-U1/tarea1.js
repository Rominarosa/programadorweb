var fondo = document.getElementById('fondo');
var rosa = document.getElementsByClassName('rojo');
var rojo = document.getElementsByClassName('azul');
var azul = document.getElementsByClassName('verde');

rojo.addEventListener('click', function () {
    fondo.style.backgroundColor = 'rojo';
});

azul.addEventListener('click', function () {
    fondo.style.backgroundColor = 'azul';
});

verde.addEventListener('click', function () {
    fondo.style.backgroundColor = 'verde';
});