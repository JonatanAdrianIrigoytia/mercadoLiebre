const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
/*el objetivo de la linea siguiente es poder decir a nuestra
 aplicacion de express que queremos tener la carpeta public como un
 recurso de archivos estaticos para que siempre los podamos consumir de manera sencilla*/
 app.use(express.static(publicPath) );

 app.listen(process.env.PORT || 3100, () => {
     console.log("servidor corriendo en el puerto http://localhost:3100")
 });
 app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
});
app.post("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
});
app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
});
app.post("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
});