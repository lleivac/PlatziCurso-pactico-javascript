window.onload=function() {

}

const PI = Math.PI;
let ladoCuadrado = document.getElementById("inputCuadrado").value;

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;

const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * (radio * radio);

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  document.querySelector("#resultadoCuadrado").value = `${perimetro}`;
  document.querySelector("#inputCuadrado").value = "";
}
const calcularAreaCuadrado = () => {
  const input = document.getElementById("areaCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  document.querySelector("#resultadoCuadrado").value = `${area}`;
  document.querySelector("#areaCuadrado").value = "";
  
}
const calcularPerimetroTriangulo = () => {
  const lado1 = parseFloat(document.getElementById("perimetroTriangulolado1").value);
  const lado2 = parseFloat(document.getElementById("perimetroTriangulolado2").value);
  const base = parseFloat(document.getElementById("perimetroTrianguloBase").value);
  const result = (perimetroTriangulo(lado1, lado2, base));
  document.querySelector("#Triangulo").value = `${result}`;
  document.querySelector("#perimetroTriangulolado1").value = "";
  document.querySelector("#perimetroTriangulolado2").value = "";
  document.querySelector("#perimetroTrianguloBase").value = "";
  
}
const calcularAreaTriangulo = () => {
  const base = parseInt(document.getElementById("baseTriangulo").value)
  const altura = parseInt(document.getElementById("alturaTriangulo").value)
  const areaResult = (areaTriangulo(base, altura));
  document.querySelector("#Triangulo").value = `${areaResult}`;
  document.querySelector("#baseTriangulo").value = "";
  document.querySelector("#alturaTriangulo").value = "";
  
}
const calcularDiametroCirculo = ()=>{
  radio = parseFloat(document.getElementById("diametroCirculo").value)
  const result = (diametroCirculo(radio));
  document.querySelector("#resultadoCirculo").value = `${result}`;
  document.querySelector("#diametroCirculo").value = "";
  
}
const calcularPerimetroCirculo = ()=>{
  radio = parseFloat(document.getElementById("perimetroCirculo").value)
  const resultPerimetro = (perimetroCirculo(radio));
  document.querySelector("#resultadoCirculo").value = `${resultPerimetro}`;
  document.querySelector("#perimetroCirculo").value = "";
  
}
const calcularAreaCirculo = ()=>{
  radio = parseFloat(document.getElementById("areaCirculo").value)
  const resultArea = (areaCirculo(radio));
  document.querySelector("#resultadoCirculo").value = `${resultArea}`;
  document.querySelector("#areaCirculo").value = "";
 
}
const limpiarInput = () =>{
  document.querySelector("#resultadoCuadrado").value = "";
  document.querySelector("#Triangulo").value = "";
  document.querySelector("#resultadoCirculo").value = "";
} 

