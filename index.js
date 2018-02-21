var contador = 0;
var esteNo = 0;

function inicio() {
  esteNo = 0;
  myVar = setTimeout(comprobar, 30000);
  console.log(myVar);
  contador = contador + 30000;
}

function comprobar() {
  var elegido = document.getElementsByName('mec');
  for (var i = 0; i < elegido.length; i++) {
    if (elegido[i].checked) {
      var esEste = elegido[i].value;
      if (esEste == '1') {
        uno();
      }else if (esEste == '2') {
        dos();
      }else if (esEste == '3') {
        tres();
      }
    }else {
      esteNo++;
      if (esteNo >= elegido.length) {
        inicio();
      }
    }
  }
}

function uno() {
  setTimeout(fin, 10000);
  contador = contador + 10000;
}

function dos() {
  setTimeout(fin, 20000);
  contador = contador + 20000;
}

function tres() {
  setTimeout(fin, 30000);
  contador = contador + 30000;
}

function fin() {
  console.log(contador);
}
