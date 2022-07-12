const lista1 = [

  100,
  200,
  500,
  400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){

  if (numerito % 2 === 0 ) {
    
    return true;

  }else{
    return false;
  }
  
}
let mediana;
if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 +1]
  //necesitamos dos elementos
  //-> el promedio
  //-> mediana
}else{
  mediana = lista1[mitadLista1];
  //posicion mitadLista1 dentro lista1
  //->mediana
}
