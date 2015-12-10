var inventario = require('../schemas/inventario');

exports.getinventarioSERVER = {
  handler: function(request, reply){
    var inventarioS = inventario.find({});
    reply(inventarioS);
  }
}

exports.createinventarioSERVER = {
  handler: function(request, reply){

    var newinventario = new inventario({

      ID : request.payload.inventario_ID,
      Descripcion : request.payload.inventario_Descripcion,
      Num_Original: request.payload.inventario_Num_Original,
      Cantidad : request.payload.inventario_Cantidad,
      Precio : request.payload.inventario_Precio

    });
    newinventario.save();
    console.log('inventario saved');
    return reply('ok');
  }
}
