const texto = document.querySelector(".textoServicios");
const imagen = document.querySelector(".imagenServicios");
const muestras = document.querySelector(".muestras");
const obtencion = document.querySelector(".obtencion");
const prueba = document.querySelector(".prueba");
const mecanica = document.querySelector(".mecanica-servicios");

mecanica.onclick = () =>{
  prueba.classList.remove("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.add("active-servicios");

  texto.innerHTML= "Estudios enfocados al análisis de la resistencia a la deformación, en materiales naturales o antropomorfos, así como su respuesta ante la realización de proyectos civiles a corto y largo plazo, dichos estudios son realizados bajo las normativas internacionales competentes, lo cual garantiza el mejor diseño de cimentación.";

  imagen.style.background = "url(/image/camion.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center"
  imagen.style.backgroundSize = "cover";
}

obtencion.onclick = () =>{
  prueba.classList.remove("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.add("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML= "pruebas de infiltración in situ, para establecer la cantidad de fluidos que puede recibir un suelo y complementar proyectos agrícolas, hidrológicos, civiles y riesgo geológico, obtenidos mediante las especificaciones de las nom ASTM y USBR, que garantizan la fiabilidad de los resultados.";

  imagen.style.background = "url(/image/camion.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center"
  imagen.style.backgroundSize = "cover";
}

muestras.onclick = () =>{
  prueba.classList.remove("active-servicios");
  muestras.classList.add("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML= "muestreo de aguas subterráneas someras y análisis de aguas contaminadas con hidrocarburos, compuestos volátiles, regidos bajo las normas de CONAGUA y semanario para evaluación de materiales disueltos.";

  imagen.style.background = "url(/image/camion.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center"
  imagen.style.backgroundSize = "cover";
}

prueba.onclick = () =>{
  prueba.classList.add("active-servicios");
  muestras.classList.remove("active-servicios");
  obtencion.classList.remove("active-servicios");
  mecanica.classList.remove("active-servicios");

  texto.innerHTML= "muestreo para la identificación de contaminantes por hidrocarburos totales, solidos, gases o líquidos que garanticen proyectos ambientales bajo los mayores estándares ya que estamos acreditados por la EMA y regidos bajo la NOM-138-SEMARNAT-SSA1-2012, BAJO LOS MAYORES ESTANDARES.";

  imagen.style.background = "url(/image/camion.jpg)";
  imagen.style.height = "350px";
  imagen.style.backgroundPosition = "center"
  imagen.style.backgroundSize = "cover";
}

