const texto = document.querySelector(".textoServicios");
const imagen = document.querySelector(".imagenServicios");
const muestras = document.querySelector(".muestras");
const obtencion = document.querySelector(".obtencion");
const prueba = document.querySelector(".prueba");
const mecanica = document.querySelector(".mecanica-servicios");
const header = document.querySelector("header");
const title = document.querySelector(".hero-title");
const text = document.querySelector(".hero-text");
const titleSec = document.querySelector(".title-prof");
const text2 = document.querySelector(".text-prof");
const servicios = document.querySelector(".servicios-text");
const serviciosTexto = document.querySelector(".text-servicios");

const size = () => {
  const wSize = window.outerWidth;
  if (wSize <= 767) {
    title.style.fontSize = "35px";
    text.classList.remove("w-25");
    title.classList.remove("w-50");
    titleSec.style.fontSize = "2rem";
    servicios.style.flexDirection = "column";
  } else if (wSize <= 992) {
    title.style.fontSize = "40px";
    titleSec.style.fontSize = "4rem";
    text.style.fontSize = "24px";
    text.classList.add("w-25");
    title.classList.add("w-50");
    servicios.style.flexDirection = "column";
  } else {
    title.style.fontSize = "64px";
    text.style.fontSize = "30px";
    text.classList.add("w-25");
    title.classList.add("w-50");
  }
};

window.addEventListener("resize", size);
window.addEventListener("load", size);

mecanica.onclick = () => {
  prueba.classList.remove("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.add("active-servicios");

  texto.innerHTML =
    "Estudios enfocados al análisis de la resistencia a la deformación, en materiales naturales o antropomorfos, así como su respuesta ante la realización de proyectos civiles a corto y largo plazo, dichos estudios son realizados bajo las normativas internacionales competentes, lo cual garantiza el mejor diseño de cimentación.";

  imagen.style.background = "url(/image/imagen4.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center";
  imagen.style.backgroundSize = "cover";

  header.style.background =
    "linear-gradient(0deg, rgba(70, 84, 95, 0.5), rgba(70, 84, 95, 0.5)), url(/image/camion.jpg)";
  header.style.backgroundPosition = "center";
  header.style.backgroundSize = "cover";
  header.style.backgroundRepeat = "no-repeat";
};

obtencion.onclick = () => {
  prueba.classList.remove("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.add("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML =
  "muestreo para la identificación de contaminantes por hidrocarburos totales, solidos, gases o líquidos que garanticen proyectos ambientales bajo los mayores estándares.";

  imagen.style.background = "url('/image/muestra de suelo 2.png')";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center";
  imagen.style.backgroundSize = "cover";

  header.style.background =
    "linear-gradient(0deg, rgba(70, 84, 95, 0.5), rgba(70, 84, 95, 0.5)), url('/image/camion 4.jpg')";
  header.style.backgroundPosition = "center";
  header.style.backgroundSize = "cover";
  header.style.backgroundRepeat = "no-repeat";
};

muestras.onclick = () => {
  prueba.classList.remove("active-servicios");
  muestras.classList.add("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML =
    "muestreo de aguas subterráneas someras y análisis de aguas contaminadas con hidrocarburos, compuestos volátiles, regidos bajo las normas de CONAGUA y SEMARNAT para evaluación de materiales disueltos.";

  imagen.style.background = "url('/image/camion 3.jpg')";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "bottom";
  imagen.style.backgroundSize = "cover";

  header.style.background =
    "linear-gradient(0deg, rgba(70, 84, 95, 0.5), rgba(70, 84, 95, 0.5)), url('/image/camion 2.jpg')";
  header.style.backgroundPosition = "bottom";
  header.style.backgroundSize = "cover";
  header.style.backgroundRepeat = "no-repeat";
};

prueba.onclick = () => {
  prueba.classList.add("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML =
    "pruebas de infiltración in situ, para establecer la cantidad de fluidos que puede recibir un suelo y complementar proyectos agrícolas, hidrológicos, civiles y riesgo geológico, obtenidos mediante las especificaciones de las nom ASTM y USBR, que garantizan la fiabilidad de los resultados.";

  imagen.style.background = "url(/image/imagen2.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center";
  imagen.style.backgroundSize = "cover";

  header.style.background =
    "linear-gradient(0deg, rgba(70, 84, 95, 0.5), rgba(70, 84, 95, 0.5)), url('/image/geokodisa acrilico 3.jpg')";
  header.style.backgroundPosition = "center";
  header.style.backgroundSize = "cover";
  header.style.backgroundRepeat = "no-repeat";
};


function confirmSubmit() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  const form = document.getElementById('contact-form');

  if (!nombre || !correo || !telefono || !mensaje) {
    const failureModal = document.getElementById("failure-modal");
    failureModal.style.display = "block";
  }

  const failureBtn = document.getElementById("failure-btn");
    failureBtn.addEventListener("click", function () {
    document.getElementById("failure-modal").style.display = "none";
  });
  const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.addEventListener('click', function() {
    document.getElementById('confirm-modal').style.display = 'none';
  });
}

