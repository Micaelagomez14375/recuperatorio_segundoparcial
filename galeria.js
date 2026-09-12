const obras = [
  { nombre: "Process 6",   anio: 2005, img: "img/reas-1.jpg" },
  { nombre: "Process 14",  anio: 2008, img: "img/reas-2.jpg" },
  { nombre: "Process 18",  anio: 2010, img: "img/reas-3.jpg" },
  { nombre: "Process 12",  anio: 2008, img: "img/reas-4.jpg" },
  { nombre: "Process 17",  anio: 2009, img: "img/reas-5.png" }
];

const galeria = document.getElementById("galeria");

function generarGaleria() {
  galeria.innerHTML = "";

  obras.forEach(function(obra) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const img = document.createElement("img");
    img.src = obra.img;
    img.alt = obra.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = obra.nombre + " (" + obra.anio + ")";

    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    galeria.appendChild(tarjeta);
  });
}

generarGaleria();

const btnChico = document.getElementById("btnChico");
const btnGrande = document.getElementById("btnGrande");

function cambiarTamano(ancho) {
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(function(tarjeta) {
    tarjeta.style.width = ancho;
  });
}

btnChico.addEventListener("click", function() {
  cambiarTamano("12rem");
});

btnGrande.addEventListener("click", function() {
  cambiarTamano("24rem");
});

