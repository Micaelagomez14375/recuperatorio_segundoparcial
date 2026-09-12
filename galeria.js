const obras = [
  { nombre: "Process 6",   anio: 2005, img: "imgs/reas-1.jpg" },
  { nombre: "Process 14",  anio: 2008, img: "imgs/reas-2.jpg" },
  { nombre: "Process 18",  anio: 2010, img: "imgs/reas-3.jpg" },
  { nombre: "Process 12",  anio: 2008, img: "imgs/reas-4.jpg" },
  { nombre: "Process 17",  anio: 2009, img: "imgs/reas-5.jpg" }
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
