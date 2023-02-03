//Proyecto webApp que guarda las validaciones de planta en GSheets
function doGet(){ //Funcion para poder ejecutar html 
  var template = HtmlService.createTemplateFromFile('nuevoIngreso'); //Creamos la variable del html
  //Aqui se coloca la url que se genera al implementar la App ya sea en prueba o implementación
  template.appUrl = "https://script.google.com/macros/s/AKfycbwcpQ5nszHvh9T6OwZBLD1HuZEjiPJ5diLaLYN4iiCN/dev";
  var output = template.evaluate(); //Se evealua el codigo html
  return output; //Se retorna el resultado
}

function include(filename) { 
  //Esta función nos permite inyectar los archivos adicionales html de CSS y JS al principal nuevoIngreso.html
  return HtmlService.createHtmlOutputFromFile(filename) //se devuelve el archivo html de css o js al principal
  .getContent(); //Se obtiene el contenido
  
}

function idConsecutivo(){ //Genera el consecutivo para la columna Id
  //Detectar la hoja
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Verificaciones');
  //Obtener ultima fila con datos
  var ultimaFila = hoja.getLastRow();
  var consecutivo = hoja.getRange(ultimaFila, 1).getValue();
  console.log(consecutivo);
  //Asigna el valor de la ultima fila + 1 para crear el id
  var id = consecutivo + 1;
  //Colocar el valor en la columna de Id 
  //hoja.getRange(ultimaFila, 1).setValue(id); Se comenta el código para devolver el valor del Id
  return id;
}

function doPost(e){ //Función que obtiene los valores de la pagina y los pone en el Sheet 
  console.log(e);
  var SS = SpreadsheetApp.getActiveSpreadsheet(); //Obtiene el libro actual de sheet
  var sheetRegistro = SS.getSheetByName('Verificaciones'); //Obtiene la hoja del libro
  var id = idConsecutivo(); //Se llama a la funcion idConsecutivo y se obtiene el nuevo id
  //Se almacenan todos los valores de los campos en variables
  var tipoVerificacion = e.parameter.tipoValidacion;
  var fecha = e.parameter.fecha;
  var turno = e.parameter.turno;
  var maquina = e.parameter.maquina;
  var orden = e.parameter.orden;
  var evaluador = e.parameter.evaluador;
  var question1 = e.parameter.question1;
  var accion1 = e.parameter.accion1;
  var question2 = e.parameter.question2;
  var accion2 = e.parameter.accion2;
  var question3 = e.parameter.question3;
  var accion3 = e.parameter.accion3;
  var question4 = e.parameter.question4;
  var accion4 = e.parameter.accion4;
  var question5 = e.parameter.question5;
  var accion5 = e.parameter.accion5;
  var question6 = e.parameter.question6;
  var accion6 = e.parameter.accion6;
  var question7 = e.parameter.question7;
  var accion7 = e.parameter.accion7;
  var question8 = e.parameter.question8;
  var accion8 = e.parameter.accion8;
  var question9 = e.parameter.question9;
  var accion9 = e.parameter.accion9;
  var question10 = e.parameter.question10;
  var accion10 = e.parameter.accion10;
  var question11 = e.parameter.question11;
  var accion11 = e.parameter.accion11;
  var question12 = e.parameter.question12;
  var accion12 = e.parameter.accion12;
  var observaciones = e.parameter.observaciones;

//Se colocan las variables en el sheet
  sheetRegistro.appendRow([ id, tipoVerificacion, fecha, turno, maquina, orden, evaluador, question1, accion1, question2, accion2, question3, accion3, question4, accion4, question5, accion5, question6, accion6, question7, accion7, question8, accion8, question9, accion9, question10, accion10, question11, accion11, question12, accion12, observaciones ]);

//Se abre una pagina con el resultado obtenido.
  return HtmlService.createTemplateFromFile('ingresoExitoso').evaluate();

}
