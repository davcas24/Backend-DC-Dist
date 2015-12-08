var usuario = require('../schemas/usuario');
var SHA3 = require("crypto-js/sha3");
var boom = require("Boom");

exports.getusuario = {
  handler: function(request, reply){
    var usuario = usuario.find({});
    reply(usuario);
  }
}

exports.createusuario = {
  /*auth: {
      mode:'required',
      strategy:'session',
      //scope: ['admin']
    },*/
  handler: function(request, reply){
    var newusuario = new usuario({
      scope : request.payload.user_user,
      nombre : request.payload.user_name,
      password : SHA3(request.payload.user_password),
      direccion : request.payload.user_dire,
      celular : request.payload.user_cel,
      correo : request.payload.user_mail,
      tel_fijo : request.payload.user_fijo,
      tabla : request.payload.user_tabla,
      zona : request.payload.user_zona
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
