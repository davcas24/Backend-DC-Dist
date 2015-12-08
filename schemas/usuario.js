var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var usuarioSchema = new mongoose.Schema({
  scope : [String],
  nombre : {type: String, unique: true, required: true},
  password : String,
  direccion : String,
  celular : String,
  correo : String,
  zona : String,
  tel_fijo : String,
  tabla : []

});

usuarioSchema.plugin(uniqueValidator);
module.exports = mongoose.model('usuario', usuarioSchema);
