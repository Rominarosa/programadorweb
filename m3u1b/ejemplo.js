const moment = require ("moment");
moment.locale("es")

console.log("Naci "+ moment ("04/01/2021","DD/MM/YYYY") .fromNow())