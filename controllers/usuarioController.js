var usuario = require('../schemas/usuario');
var SHA3 = require("crypto-js/sha3");
var boom = require("boom");

exports.getusuario = {
  handler: function(request, reply){
    var usuarios = usuario.find({});
    reply(usuarios);
  }
}

exports.putusuario = {
      handler: function(request, reply){
        console.log(request.payload+"llego al backend");
        usuario.findById(request.payload._id,function(err,users){
          console.log('cfdvcfefge');
          console.log(request.payload.tabla+"dany");
          users.tabla=request.payload.tabla;
          users.save(function(err){
            if(err){
              return reply(boom.notAcceptable("Error" + err));
            }
            console.log('usuario saved');
        })

          return reply('ok');
        });
      }
    }

exports.createusuario = {
  /*auth: {
      mode:'required',
      strategy:'session',
      //scope: ['admin']
    },*/
  handler: function(request, reply){
    console.log(request.payload+"llego al backend");
    var newusuario = new usuario({

      scope : request.payload.scope,
      nombre : request.payload.nombre,
      password: SHA3(request.payload.password),
      direccion : request.payload.direccion,
      celular : request.payload.celular,
      correo: request.payload.correo,
      tel_fijo: request.payload.tel_fijo,
      tabla : [],
      zona : request.payload.zona


    });
    newusuario.save(function(err){
      if(err){
        return reply(boom.notAcceptable("Error" + err));
      }
      console.log('usuario saved');
      return reply('ok');
    });

  }
};
