var listado = [];
var listado2 = [];
var indices = [];
var indices2 = []
var seleccionar = false;


document.getElementById('agregar1')
  .addEventListener('click', function () {

    var nom = document.getElementById('nombre').value;
    var fec = document.getElementById('fecha').value;

    var newBom = new Bombero(nom, fec);
    listado.push(newBom);
    console.log(listado);

    

    document.getElementById("ocultar1").style.display = "block";

    var tabla = document.getElementById("table1");

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');

    td1.id = listado.length - 1;
    td1.addEventListener('click', function () {
      seleccionar = !seleccionar;
      if (seleccionar === false) {
        
        var ad = this.id;
        indices2.forEach(function (value, index) {
          if (value == ad) {
            indices2.splice(index, 1)
          }
        })
      } else {
        indices2.push(this.id);
      }
      console.log(indices2);
    });

    td1.appendChild(document.createTextNode(nom));
    tr.appendChild(td1);
    tabla.appendChild(tr);

  });

//Motobomba recuperacion de datos
document.getElementById('agregar2')
  .addEventListener('click', function () {

    var bomb = document.getElementById('bom').value;

    var newSerie = new Motobomba(bomb);
    listado2.push(newSerie);
    console.log(listado2);

    //La agregacion de las tablas

    document.getElementById("ocultar2").style.display = "block";

    var tabla2 = document.getElementById("table2");

    var tr = document.createElement('tr');

    var td1 = document.createElement('td')

    td1.id = listado2.length - 1;

    td1.addEventListener('click', function () {

      seleccionar = !seleccionar;
      if (seleccionar === false) {
        
        
        var as = this.id;
        indices.forEach(function (value, index) {
          if (value == as) {
            indices.splice(index, 1)
          }
        });

      } else {
        indices.push(this.id);
      }
      
    console.log(indices);

    });

    td1.appendChild(document.createTextNode(bomb));
    tr.appendChild(td1);
    tabla2.appendChild(tr);

  });

  //asociacion con bombero
document.getElementById('asociar')
  .addEventListener('click', function () {

    for (var j = 0; j < listado2; j++) {
      for (var i = 0; i < indices; i++) {
        listado2[indices[j]].addBombero.bombero(listado[indices2[i]]);
        console.log('Hola')

      }

    }
  });
