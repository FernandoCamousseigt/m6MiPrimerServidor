// Paso 1
const http = require('http')
// Paso 2
http
 .createServer(function (req, res) {
 // Paso 3
 console.log('¿Aló? ¿Quién habla?')
 })
.listen(8080, () => console.log('Escuchando el puerto 8080')) 
// Paso 4