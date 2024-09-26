var ruta = require("express").Router();
var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorId} = require("../bd/usuariosBD");


ruta.get("/", async(req,res)=>{
    //res.send("Hola estas en raiz");
    const usuarios = await mostrarUsuarios();
    //console.log(usuarios);
    res.json(usuarios);
});

ruta.get("/buscarPorId/:id", async(req,res)=>{
    var usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

ruta.delete("/borrarUsuario/:id", async(req,res)=>{
    var borrado = await borrarUsuario(req.params.id);
    res.json(borrado);
});

ruta.post("/nuevoUsuario", async(req, res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
})

module.exports = ruta;