const express = require("express");
const path = require("path");
const app = express();

// Carpeta de archivos estáticos (CSS, JS, imágenes, etc.)
const publicfolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicfolderPath));

app.listen(3001, () => { 
    const PORT = 3001;  
    console.log("Servidor corriendo en el puerto 3001");
    console.log(`Página Home:          http://localhost:${PORT}/`);
    console.log(`Página Babbage:       http://localhost:${PORT}/babbage`);
    console.log(`Página Berners-Lee:   http://localhost:${PORT}/berners-lee`);
    console.log(`Página Clarke:        http://localhost:${PORT}/clarke`);
    console.log(`Página Hamilton:      http://localhost:${PORT}/hamilton`);
    console.log(`Página Hopper:        http://localhost:${PORT}/hopper`);
    console.log(`Página Lovelace:      http://localhost:${PORT}/lovelace`);
    console.log(`Página Turing:        http://localhost:${PORT}/turing`);
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/babbage", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/hamilton.html"));
});

app.get("/hopper", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/hopper.html"));
});

app.get("/lovelace", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/lovelace.html"));
});

app.get("/turing", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/turing.html"));
});


