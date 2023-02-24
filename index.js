console.log("Hola Mundo");

// Ejecuta el archivo y navega hasta http://localhost:3000
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola Mundo!");
});
server.listen(3000, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});

// Importar modulos personalizados
const saludar = require("./perso_modules/saludar.js");
saludar();

// Importar modulos de terceros
const colors = require("colors");
console.log("Hola Mundo".rainbow);
