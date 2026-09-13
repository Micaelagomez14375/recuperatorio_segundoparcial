
let estudio = {
  cantidad: 0,      
  horas: 0,         
  honorario: 0      
};

let instalaciones = [];

const pasoConfig = document.getElementById("paso-configuracion");
const pasoInstalaciones = document.getElementById("paso-instalaciones");
const pasoResultados = document.getElementById("paso-resultados");
const cajaResultados = document.getElementById("caja-resultados");

const campoCant = document.getElementById("cant-instalaciones");
const campoHoras = document.getElementById("horas-jornada");
const campoHonorario = document.getElementById("honorario-hora");
const btnIniciar = document.getElementById("btn-iniciar-carga");

const campoNombre = document.getElementById("nombre-instalacion");
const campoPersonas = document.getElementById("personas-trabajo");
const campoDias = document.getElementById("dias-produccion");
const btnAgregar = document.getElementById("btn-agregar-instalacion");
const contador = document.getElementById("contador-instalaciones");
const totalLbl = document.getElementById("total-instalaciones-lbl");

const btnCalcular = document.getElementById("btn-calcular");
const btnReiniciar = document.getElementById("btn-reiniciar");

const resCostoDia = document.getElementById("res-costo-dia");
const resMayor = document.getElementById("res-instalacion-mayor");
const resPorcentaje = document.getElementById("res-porcentaje");

function esValido(valor) {
  return !isNaN(valor) && valor > 0;
}

btnIniciar.addEventListener("click", function () {
  const cant = parseInt(campoCant.value);
  const horas = parseFloat(campoHoras.value);
  const honorario = parseFloat(campoHonorario.value);

  if (!esValido(cant) || !esValido(horas) || !esValido(honorario)) {
    alert("Ingresá valores válidos y mayores a cero.");
    return;
  }

  estudio.cantidad = cant;
  estudio.horas = horas;
  estudio.honorario = honorario;

  pasoConfig.disabled = true;
  pasoInstalaciones.disabled = false;
  totalLbl.textContent = cant;
});

btnAgregar.addEventListener("click", function () {
  const nombre = campoNombre.value.trim();
  const personas = parseInt(campoPersonas.value);
  const dias = parseInt(campoDias.value);

  if (nombre === "") {
    alert("Ingresá un nombre válido.");
    return;
  }
  if (!esValido(personas)) {
    alert("Las personas deben ser un número mayor a 0.");
    return;
  }
  if (!esValido(dias)) {
    alert("Los días deben ser un número mayor a 0.");
    return;
  }

  instalaciones.push([nombre, personas, dias]);

  campoNombre.value = "";
  campoPersonas.value = "";
  campoDias.value = "";

  contador.textContent =
    "Instalaciones cargadas: " + instalaciones.length + " de " + estudio.cantidad;

  if (instalaciones.length === estudio.cantidad) {
    pasoInstalaciones.disabled = true;
    pasoResultados.disabled = false;
    alert("Carga finalizada. Presioná calcular resultados.");
  }
});

btnCalcular.addEventListener("click", function () {
  let totalPersonas = 0;      
  let costoTotalEstudio = 0;  
  let indiceMayor = 0;         

  for (let i = 0; i < instalaciones.length; i++) {
    const nombre = instalaciones[i][0];
    const personas = instalaciones[i][1];
    const dias = instalaciones[i][2];

    totalPersonas += personas;
    costoTotalEstudio += personas * dias * estudio.horas * estudio.honorario;

    if (dias > instalaciones[indiceMayor][2]) {
      indiceMayor = i;
    }
  }

  const costoDia = totalPersonas * estudio.horas * estudio.honorario;

  const mayor = instalaciones[indiceMayor];
  const costoMayor = mayor[1] * mayor[2] * estudio.horas * estudio.honorario;

  const porcentaje = (costoMayor / costoTotalEstudio) * 100;

  resCostoDia.textContent = "$" + costoDia.toLocaleString();
  resMayor.textContent =
    mayor[0] + " (" + mayor[2] + " días) - $" + costoMayor.toLocaleString();
  resPorcentaje.textContent = porcentaje.toFixed(2) + "%";

  cajaResultados.classList.remove("oculto");
  btnCalcular.disabled = true;
  btnReiniciar.disabled = false;
});

btnReiniciar.addEventListener("click", function () {
  estudio = { cantidad: 0, horas: 0, honorario: 0 };
  instalaciones = [];

  campoCant.value = "";
  campoHoras.value = "";
  campoHonorario.value = "";
  campoNombre.value = "";
  campoPersonas.value = "";
  campoDias.value = "";
  contador.textContent = "Instalaciones cargadas: 0 de 0";
  totalLbl.textContent = "0";

  resCostoDia.textContent = "-";
  resMayor.textContent = "-";
  resPorcentaje.textContent = "-";

  pasoConfig.disabled = false;
  pasoInstalaciones.disabled = true;
  pasoResultados.disabled = true;
  cajaResultados.classList.add("oculto");
  btnCalcular.disabled = false;
  btnReiniciar.disabled = true;
});
