//constantes de las medidas con su valor en metros
const mt = 1;
const km = 1000;
const cm = 0.01;
const mil = 1609.34;
const ft = 0.3048;
const inch = 0.0254;

//constantes del programa
const numPedido = document.querySelector(".num-pedido");
const unidad1 = document.querySelector(".unidad1");
const unidad2 = document.querySelector(".unidad2");
const calcularBtn = document.querySelector(".calcular-btn");

calcularBtn.addEventListener("click", () => {
  const valor = Number(numPedido.value);
  const unidadInicial = unidad1.value;
  const unidadFinal = unidad2.value;

  let resultado;
  let singular = false;
  
  //Conversiones de unidadInicial a metros
  switch (unidadInicial) {
    case "metro":
      resultado = valor;
      break;
    case "kilometro":
      resultado = valor * km;
      break;
    case "centimetro":
      resultado = valor * cm;
      break;
    case "milla":
      resultado = valor * mil;
      break;
    case "pie":
      resultado = valor * ft;
      break;
    case "pulgada":
      resultado = valor * inch;
      break;
  }
  
  //Conversiones de metros a unidadFinal
  switch (unidadFinal) {
    case "metro":
      resultado = resultado;
      break;
    case "kilometro":
      resultado = resultado / km;
      break;
    case "centimetro":
      resultado = resultado / cm;
      break;
    case "milla":
      resultado = resultado / mil;
      break;
    case "pie":
      resultado = resultado / ft;
      break;
    case "pulgada":
      resultado = resultado / inch;
      break;
  }
  
  //Chequea si el resultado es singular
  if (resultado === 1) {
    singular = true;
  }
  
  //Muestra el resultado con la unidad correspondiente
  Swal.fire({
    title: "Resultado",
    text: `${valor} ${unidadInicial} son ${resultado.toFixed(2)} ${unidadFinal}${singular ? "" : "s"}.`,
    icon: "success",
    confirmButtonText: "OK",
    customClass: "alert"
  });
  
});
