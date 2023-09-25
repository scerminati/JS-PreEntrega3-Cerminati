let nombre = "";
let sexo;
let terminacion;
let bandera = 0;
let logrosTotales = 0;
let puntaje = 0;
let logros = [`\n- *`, `\n- *`, `\n- *`, `\n- *`, `\n- *`, `\n- *`];
let logrosID = [false, false, false, false, false, false];
let cordialidad = [
  { titulo: "Lord", sexo: "m" },
  { titulo: "Sir", sexo: "m" },
  { titulo: "Lady", sexo: "f" },
  { titulo: "Dame", sexo: "f" },
  { titulo: "Sin título", sexo: "m" },
];
let personajes = [
  {
    raza: "Humano",
    nombre: "Caballero",
    vida: 13,
    iniciativa: 0,
    combate: 2,
    defensa: 5,
  },
  {
    raza: "Humano",
    nombre: "Rogue",
    vida: 10,
    iniciativa: 4,
    combate: 3,
    defensa: 3,
  },
  {
    raza: "Humano",
    nombre: "Cazador",
    vida: 7,
    iniciativa: 5,
    combate: 6,
    defensa: 2,
  },
  {
    raza: "Elfo",
    nombre: "Bardo",
    vida: 8,
    iniciativa: 5,
    combate: 2,
    defensa: 5,
  },
  {
    raza: "Elfo",
    nombre: "Guerrero",
    vida: 10,
    iniciativa: 2,
    combate: 7,
    defensa: 1,
  },
  {
    raza: "Elfo",
    nombre: "Profeta",
    vida: 9,
    iniciativa: 3,
    combate: 5,
    defensa: 3,
  },
  {
    raza: "Elfo",
    nombre: "Monje",
    vida: 12,
    iniciativa: 2,
    combate: 2,
    defensa: 4,
  },
  {
    raza: "Elfo",
    nombre: "Asesino",
    vida: 11,
    iniciativa: 6,
    combate: 3,
    defensa: 0,
  },
  {
    raza: "Orco",
    nombre: "Arquero",
    vida: 12,
    iniciativa: 0,
    combate: 5,
    defensa: 3,
  },
  {
    raza: "Orco",
    nombre: "Herrero",
    vida: 9,
    iniciativa: 4,
    combate: 6,
    defensa: 1,
  },
  {
    raza: "Orco",
    nombre: "Asaltador",
    vida: 7,
    iniciativa: 6,
    combate: 4,
    defensa: 3,
  },
  {
    raza: "Orco",
    nombre: "Destructor",
    vida: 9,
    iniciativa: 2,
    combate: 7,
    defensa: 2,
  },
  {
    raza: "Enano",
    nombre: "Artesano",
    vida: 11,
    iniciativa: 1,
    combate: 2,
    defensa: 6,
  },
  {
    raza: "Enano",
    nombre: "Carroñero",
    vida: 8,
    iniciativa: 4,
    combate: 3,
    defensa: 5,
  },
  {
    raza: "Mago",
    nombre: "Profeta",
    vida: 13,
    iniciativa: 3,
    combate: 4,
    defensa: 0,
  },
  {
    raza: "Mago",
    nombre: "Nigromante",
    vida: 10,
    iniciativa: 1,
    combate: 5,
    defensa: 4,
  },
];

let texto = document.getElementById("texto");
let botonera = document.getElementById("botonera");
let titulo = document.getElementById("titulo");
let input = document.getElementById("input");

titulo.innerText = `Introducción`;
texto.innerText = `¡Una cordial bienvenida!\n\nQuisiera saber como puedo dirigirme a ti, ¿puedo llamarte Sir? ¿O debo llamarte Lady? Quizás simplemente debería pedirte el nombre, pero aquí en este reino tenemos esto tan cordial... tu dime.`;

for (let index = 0; index < cordialidad.length; index++) {
  crearBoton(cordialidad[index].titulo, () => setNombre(index));
}

function setNombre(id) {
  nombre = cordialidad[id].titulo;
  sexo = cordialidad[id].sexo;
  if (id == 4) {
    nombre = "";
    texto.innerText = `De acuerdo, no utilizaré ningún título para dirigirme a ti.`;
  } else {
    if (sexo == "m") {
      terminacion = "o";
    } else {
      terminacion = "a";
    }
    nombre += " ";
    texto.innerText = `¡Ahora sí! Bienvenid${terminacion}, ${nombre}.`;
  }

  texto.innerText += `\n\nIntroduce tu nombre aquí debajo. ¡No te preocupes! No estarás firmando ningún contrato...\n\nPor ahora.`;
  input.classList.toggle("oculto");
  botonera.innerHTML = ``;
  crearBoton("Borrar", borrarInput);
  crearBoton("Enviar", enviarInput);
}

function borrarInput() {
  input.value = "";
}

function enviarInput() {
  bandera++;
  if (input.value == "" && bandera < 3) {
    texto.innerText = `¡No quieras escaparte! Necesito tu nombre, prometo que no es para realizar un hechizo.\n\nPor favor, introduce tu nombre.`;
  } else if (input.value != "") {
    let nombreMayus = input.value.toLowerCase();
    nombreMayus = nombreMayus.replace(
      nombreMayus[0],
      nombreMayus[0].toUpperCase()
    );
    nombre += nombreMayus;
    texto.innerText = `¡${nombre}! ¡Muchas gracias por confiarme tu nombre! Ya el pueblo comienza a nombrarte, parece que en tus tierras eres famos${terminacion}.`;
  } else if (bandera == 3) {
    nombre += `Anónim${terminacion}`;
    registroLogro("Nombre");
    texto.innerText = `Parece que no confias en mi, no empezamos bien entonces. Te llamaré de ahora en más, ${nombre}.`;
  }
  input.classList.toggle("oculto");
  botonera.innerHTML = "";
  texto.innerText += `\n\nPor último, deberás escoger una raza. Dime, ¿con qué raza crees que te identificas más?`;
  let categoriaRazas = [];
  personajes.forEach((personaje) => {
    if (!categoriaRazas.includes(personaje.raza)) {
      categoriaRazas.push(personaje.raza);
    }
  });

  for (let index = 0; index < categoriaRazas.length; index++) {
    crearBoton(categoriaRazas[index], () =>
      seleccionarRaza(categoriaRazas[index])
    );
  }
}



function crearBoton(parametro, funcionPasada) {
  window["boton" + parametro] = document.createElement("button");
  window["boton" + parametro].innerText = parametro;
  window["boton" + parametro].id = parametro.toLowerCase();
  botonera.appendChild(window["boton" + parametro]);
  window["boton" + parametro].addEventListener("click", funcionPasada);
}

function registroLogro(id) {
  switch (id) {
    case "Nombre":
      indice = 0;
      textoLogro = `No diste tu nombre al comienzo de la aventura.`;
      puntajeLogro = -5;
      break;
    case "Voces":
      indice = 1;
      textoLogro = `Has seguido las voces del bosque.`;
      puntajeLogro = 5;
      break;
    case "Bruja":
      indice = 2;
      textoLogro = `Has derrotado a la bruja de la cabaña.`;
      puntajeLogro = 20;
      break;
    case "Espada":
      indice = 3;
      textoLogro = `Encontraste la espada secreta en el fondo del lago.`;
      puntajeLogro = 20;
      break;
    case "Puente":
      indice = 4;
      textoLogro = `Lograste cruzar el puente sin recibir daño.`;
      puntajeLogro = 10;
      break;
    case "Dragón":
      indice = 5;
      textoLogro = `Derrotaste exitósamente al dragón.`;
      puntajeLogro = 35;
      break;
  }
  if (!logrosID[indice]) {
    logros[indice] = logros[indice].replace(`*`, textoLogro);
    logrosTotales++;
    puntaje += puntajeLogro;
    logrosID[indice] = true;
  }
}
