const { INCREMENTO, DECREMENTO , INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento =function () {
  {type: INCREMENTO}
}

const decremento = function()  {
  {type: DECREMENTO}
}

const incrementoImpar = function()  {
  {type: INCREMENTO_IMPAR}
}

const incrementoAsync = function() { 
  {type: INCREMENTO_ASYNC}
}

module.exports = {
  incremento,
  decremento,
  incrementoImpar,
  incrementoAsync
}