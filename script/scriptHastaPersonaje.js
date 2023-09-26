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
    clase: "Caballero",
    vida: 13,
    iniciativa: 0,
    combate: 2,
    defensa: 5,
  },
  {
    raza: "Humano",
    clase: "Rogue",
    vida: 10,
    iniciativa: 4,
    combate: 3,
    defensa: 3,
  },
  {
    raza: "Humano",
    clase: "Cazador",
    vida: 7,
    iniciativa: 5,
    combate: 6,
    defensa: 2,
  },
  {
    raza: "Elfo",
    clase: "Bardo",
    vida: 8,
    iniciativa: 5,
    combate: 2,
    defensa: 5,
  },
  {
    raza: "Elfo",
    clase: "Guerrero",
    vida: 10,
    iniciativa: 2,
    combate: 7,
    defensa: 1,
  },
  {
    raza: "Elfo",
    clase: "Profeta",
    vida: 9,
    iniciativa: 3,
    combate: 5,
    defensa: 3,
  },
  {
    raza: "Elfo",
    clase: "Monje",
    vida: 12,
    iniciativa: 2,
    combate: 2,
    defensa: 4,
  },
  {
    raza: "Elfo",
    clase: "Asesino",
    vida: 11,
    iniciativa: 6,
    combate: 3,
    defensa: 0,
  },
  {
    raza: "Orco",
    clase: "Arquero",
    vida: 12,
    iniciativa: 0,
    combate: 5,
    defensa: 3,
  },
  {
    raza: "Orco",
    clase: "Herrero",
    vida: 9,
    iniciativa: 4,
    combate: 6,
    defensa: 1,
  },
  {
    raza: "Orco",
    clase: "Asaltador",
    vida: 7,
    iniciativa: 6,
    combate: 4,
    defensa: 3,
  },
  {
    raza: "Orco",
    clase: "Destructor",
    vida: 9,
    iniciativa: 2,
    combate: 7,
    defensa: 2,
  },
  {
    raza: "Enano",
    clase: "Artesano",
    vida: 11,
    iniciativa: 1,
    combate: 2,
    defensa: 6,
  },
  {
    raza: "Enano",
    clase: "Carroñero",
    vida: 8,
    iniciativa: 4,
    combate: 3,
    defensa: 5,
  },
  {
    raza: "Mago",
    clase: "Profeta",
    vida: 13,
    iniciativa: 3,
    combate: 4,
    defensa: 0,
  },
  {
    raza: "Mago",
    clase: "Nigromante",
    vida: 10,
    iniciativa: 1,
    combate: 5,
    defensa: 4,
  },
];
let inventario = [];
let healthBase;
let bruja = {
  nombre: "Bruja",
  vida: 8,
  iniciativa: 10,
  combate: 2,
  defensa: 2,
};
let dragon = {
  nombre: "Dragón",
  vida: 15,
  iniciativa: 3,
  combate: 4,
  defensa: 4,
};
let caminos = [];
let index = 0;
let id = 0;
let chequeoInput;

personajes.forEach((personaje) => {
  let razaP = personaje.raza;
  razaP = razaP.toLowerCase();
  let sexoP = ["m", "f"];
  personaje.imagen = [];
  for (let index = 0; index < sexoP.length; index++) {
    personaje.imagen[index] = {
      sexo: sexoP[index],
      ruta: `<img src="./images/${razaP}${sexoP[index]}.png" />`,
    };
  }
});

console.log(personajes);

let texto = document.getElementById("texto");
let botonera = document.getElementById("botonera");
let titulo = document.getElementById("titulo");
let input = document.getElementById("input");
let personajesHTML = document.getElementById("personajesHTML");
let usuario = document.getElementById("usuario");
let inventarioHTML = document.getElementById("inventario");
let pergamino = document.getElementById("pergamino");

titulo.innerText = `Selección de Personaje`;
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
  resetBotonera();
  crearBoton("Borrar", borrarInput);
  crearBoton("Enviar", enviarInput);
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      enviarInput();
    }
  });
}

function borrarInput() {
  input.value = "";
}

function enviarInput() {
  bandera++;
  if (input.value != "") {
    let nombreMayus = input.value.toLowerCase();
    nombreMayus = nombreMayus.replace(
      nombreMayus[0],
      nombreMayus[0].toUpperCase()
    );
    nombre += nombreMayus;
    texto.innerText = `¡${nombre}! ¡Muchas gracias por confiarme tu nombre! Ya el pueblo comienza a nombrarte, parece que en tus tierras eres famos${terminacion}.`;
  } else {
    texto.innerText = `¡No quieras escaparte! Necesito tu nombre, prometo que no es para realizar un hechizo.\n\nPor favor, introduce tu nombre.`;
  }

  if (bandera == 3) {
    nombre += `Anónim${terminacion}`;
    registroLogro("Nombre");
    texto.innerText = `Parece que no confias en mi, no empezamos bien entonces. Te llamaré de ahora en más, ${nombre}.`;
  }
  if (input.value != "" || bandera == 3) {
    input.classList.toggle("oculto");
    resetBotonera();
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
}

function seleccionarRaza(razaSeleccionada) {
  let razaPersonaje = personajes.filter(
    (personaje) => personaje.raza == razaSeleccionada
  );
  resetBotonera();
  texto.innerText = `Haz escogido la raza ${razaPersonaje[0].raza}. Ahora, a continuación tienes las habilidades de los siguientes trabajos. Debes escoger uno para continuar.`;

  let personajesAElegir = "";
  personajesHTML.classList.toggle("oculto");
  personajesHTML.innerHTML = "";
  razaPersonaje.forEach((personaje) => {
    personajesAElegir = "";
    let personajeCaja = document.createElement("div");
    for (const propiedad in personaje) {
      if (propiedad != "raza" && propiedad != "imagen") {
        personajesAElegir += `<b>${propiedad.replace(
          propiedad[0],
          propiedad[0].toUpperCase()
        )}:</b> ${personaje[propiedad]}<br>`;
      }
    }
    personajesAElegir += `\n`;
    personajeCaja.innerHTML = personajesAElegir;
    personajesHTML.appendChild(personajeCaja);
  });
  razaPersonaje.forEach((personaje) => {
    crearBoton(personaje.clase, () =>
      realizarInventario(razaPersonaje, personaje.clase)
    );
  });
  console.log(razaPersonaje);
}

function realizarInventario(razaPersonaje, personajeEscogido) {
  console.log(personajeEscogido);
  console.log(razaPersonaje);
  let usuarioEscogido = razaPersonaje.find(
    (personaje) => personaje.clase === personajeEscogido
  );
  let imagenPersonaje = usuarioEscogido.imagen.find(
    (imagen) => imagen.sexo === sexo
  );
  console.log(imagenPersonaje);
  console.log(usuarioEscogido);
  inventario = {
    nombre,
    raza: usuarioEscogido.raza,
    clase: usuarioEscogido.clase,
    vida: usuarioEscogido.vida,
    iniciativa: usuarioEscogido.iniciativa,
    combate: usuarioEscogido.combate,
    defensa: usuarioEscogido.defensa,
    armas: "-",
    herramientas: "-",
    monedas: 0,
  };
  healthBase = inventario.vida;

  console.log(inventario);
  usuario.classList.toggle("oculto");
  usuario.innerHTML = imagenPersonaje.ruta;
  resetBotonera();
  personajesHTML.classList.toggle("oculto");
  usuario.addEventListener("click", mostrarInventario);
  declaracionDeCaminos();
  console.log(caminos);

  //UNA VEZ DECLARADO CAMINOS, TENGO QUE VOLVER A REALIZAR LAS FUNCIONES QUE TENGO EN EL SCRIPT ORIGINAL
}

function crearBoton(parametro, funcionPasada) {
  window["boton" + parametro] = document.createElement("button");
  window["boton" + parametro].innerText = parametro;
  window["boton" + parametro].id = parametro.toLowerCase();
  botonera.appendChild(window["boton" + parametro]);
  window["boton" + parametro].addEventListener("click", funcionPasada);
}

function mostrarInventario() {
  ocultarInventario();
  let inventarioAMostrar = `<h3>Inventario</h3><br><div class="flexInv">`;
  let titulosAMostrar = `<div >`;
  for (const propiedad in inventario) {
    titulosAMostrar += `<b>${propiedad.replace(
      propiedad[0],
      propiedad[0].toUpperCase()
    )}:</b></br>`;
  }
  titulosAMostrar += `\n</div>`;

  let propiedadesAMonstrar = `<div class="right">`;
  for (const propiedad in inventario) {
    propiedadesAMonstrar += `${inventario[propiedad]}</br>`;
  }
  propiedadesAMonstrar += `\n</div>`;

  inventarioAMostrar += titulosAMostrar + propiedadesAMonstrar + `\n</div>`;
  inventarioHTML.innerHTML = inventarioAMostrar;
  let botonInventario = document.createElement("button");
  botonInventario.innerText = "Volver";
  botonInventario.addEventListener("click", ocultarInventario);
  inventarioHTML.appendChild(botonInventario);
}

function ocultarInventario() {
  inventarioHTML.classList.toggle("oculto");
  pergamino.classList.toggle("blurPergamino");
  var nodes = botonera.getElementsByTagName("button");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].disabled = !nodes[i].disabled;
  }
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

function resetBotonera() {
  botonera.innerHTML = "";
}

function declaracionDeCaminos() {
  caminos = [
    {
      id: 0,
      descripcion: `${inventario.nombre}, del reino ${inventario.raza}, ¡un gusto conocerte! Has llegado en el momento indicado, necesitamos tu ayuda.\n\nDebes saber que en nuestro reino, Javascra, una terrible amenaza acecha en el temible castillo que tenemos delante.\n\nMira, te mostraré. Sígueme.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.1],
    },
    {
      id: 0.1,
      descripcion: `Espera, antes que lo olvide. En cualquier momento, al escribir la palabra "ficha" se mostrarán tus stats.\n\nEsto es muy importante, así que leeme bien. Si en cualquier momento deseas salir del juego, solo escribe '13'. Recuerda ese número mágico, ya que no lo mencionaré más adelante. Es un número que en el reino de Javascra ha traido mucha mala suerte, y creemos que el dragón está aquí por ese mismo número.\n\nEspero que no tengas que usarlo. ¡Confío en ti!`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.2],
    },
    {
      id: 0.2,
      descripcion: `Presta mucha atención.\n\nVerás, el castillo que ves en el camino de adelante, es custodiado por un enorme dragón que lo ha invadido, y ha sacado a todos con su temible fuego hace algunas lunas llenas atrás. El castillo contaba con un puente que cruza el río, pero el fuego del dragón lo ha deshecho. Si tomas ese camino, no podrás regresar. ¡Pero necesitamos que vayas a por él! No estamos apurados, debo confesarte, pero nos gustaria que nos puedas ayudar.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.3],
    },
    {
      id: 0.3,
      descripcion: `Por otro lado, en el camino de la izquierda, tienes el bosque encantado. Puedes descubrir algún que otro encanto en él, podrías investigarlo, y siempre puedes regresar aquí... Si no mueres en el intento, claro. En el bosque hay criaturas que pueden atentar contra ti.\n\nPor último, en este camino que tienes a la derecha, irás al muelle, donde se encuentra un pequeño poblado, ahí se han refugiado la mayoría de los sirvientes del castillo. El rey y la reina se encuentran seguros en un lugar que no puedo decirte...`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.4],
    },
    {
      id: 0.4,
      descripcion: `En fin, ${nombre}, ¡necesitamos de tu ayuda!`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.5],
    },
    {
      id: 0.5,
      descripcion: `¡Debes escoger tu camino! Ingresa debajo el número donde deseas dirigirte:\n\n1. Bosque.\n2. Castillo (¡Importante! No podrás regresar).\n3. Muelle`,
      categoria: "Introducción",
      input: true,
      cantidadOpciones: 4,
      nextid: [0.5, 1, 2, 3],
    },
    {
      id: 1,
      descripcion: `'El Bosque Encantado: Donde los árboles susurran secretos y la magia cobra vida.'\nLo cierto es que nunca escuché a un árbol susurrar, pero igualmente, deberías tener cuidado.\n\n${nombre}, encuentras a tu izquierda la continuación del bosque. Una dulce voz te llama la atención. A tu derecha, sin embargo, una lúgubre cabaña te invita a pasar.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.01],
    },
    {
      id: 1.01,
      descripcion: `Debes escoger tu camino. \n\n0. Regresar al comienzo\n1. Adentrarte más en el bosque.\n2. Entrar a la cabaña..`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 3,
      nextid: [0.5, 1.1, 1.2],
    },
    {
      id: 1.1,
      descripcion: `Sigues la dulce voz, y a medida que te adentras en el bosque, te da un poco de sueño.\n\nTe duermes sin darte cuenta. Algo te picotea en el brazo. Pierdes 1 de vida.\n\nAl despertarte, te encuentras nuevamente frente a los tres caminos.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.5, 1.11],
      especial: "Voces",
    },
    {
      id: 1.11,
      descripcion: `¡Te has quedado sin puntos de vida!\n\nFIN DEL JUEGO.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 1.2,
      descripcion: `Entras a la cabaña ya sin pensarlo nuevamente. Sientes un frío importante, te tiembla el cuerpo. Sientes miedo, y sabes que no eres la única persona ahí dentro.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
    },
    {
      id: 1.21,
      descripcion: `Debes escoger tu camino. \n\n0. Volver hacia atrás.\n1. Bajar al sótano.\n2. Explorar la cocina.`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 3,
      nextid: [1.01, 1.3, 1.4],
    },
    {
      id: 1.3,
      descripcion: `Una horrible figura te observa desde una esquina. Observa que sus manos está haciendo movimientos extraños. ¡Deberás derrotar a la bruja!`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.31],
    },
    {
      id: 1.31,
      descripcion: `Debes escoger tu acción. \n\n0. Huir \n1. Pelear`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 2,
      nextid: [1.21, 1.32],
      especial: "Log Bruja",
    },
    {
      id: 1.32,
      descripcion: `¡Esto se torna personal! Le das batalla a la bruja.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.31, 1.33, 1.34],
      especial: "Combate Bruja",
    },
    {
      id: 1.33,
      descripcion: `¡La bruja te ha derrotado! Te has quedado sin vida.\n\nFIN DEL JUEGO.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 1.34,
      descripcion: `¡Has derrotado a la bruja!\n\nSubes de nivel, tienes más combate.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
    },
    {
      id: 1.4,
      descripcion: `Exploras la cocina, encuentras, en una alacena, un pequeño cofre.\n\nLo abres... ¡Dentro hay 10 monedas! Las guardas antes que nadie te vea.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
      especial: "Monedas",
    },
    {
      id: 2,
      descripcion: `Ya estamos en la recta final de la aventura. Recuerda, no hay vuelta atrás. De aquí salimos con la victoria o con la muerte, ¡pero a no desesperar, ${nombre}! Confio plenamente en ti y en tus habilidades.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.1],
    },
    {
      id: 2.1,
      descripcion: `El castillo se encuentra a lo lejos, lo ves que está a unas leguas de distancia. El puente roto está frente a ti ahora, y debes cruzarlo.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.3, 2.2],
      especial: "Puente",
    },
    {
      id: 2.2,
      descripcion: `¡Fuiste lo suficientemente astuto como para traer la soga contigo! Cruzas con tu soga sin problema y pasas por las puertas del castillo.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.4],
    },
    {
      id: 2.3,
      descripcion: `Cruzar por el río provocó que te cansaras y que te hicieras algo de daño en el proceso. Aún así, llegas a las puertas del castillo y entras.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.4],
    },
    {
      id: 2.4,
      descripcion: `Un gran salón se impone frente a ti. El enorme dragón se encuentra ahí, te ve llegar y abre la boca para escupir fuego. ¡Debes hacer algo al respecto!`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.5],
    },
    {
      id: 2.5,
      descripcion: `Debes escoger tu camino.\n\n1. Escapar del dragón.\n2. Enfrentar al dragón.\n`,
      categoria: "Castillo",
      input: true,
      cantidadOpciones: 3,
      nextid: [2.5, 2.8, 2.6],
    },
    {
      id: 2.6,
      descripcion: `El dragón se ve feroz, ¡pero nada como la valentía de ${nombre} para enfrentarlo! Te preparas para la gran batalla final.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.7],
    },
    {
      id: 2.7,
      descripcion: `Debes escoger tu acción. \n\n0. Huir \n1. Pelear`,
      categoria: "Castillo",
      input: true,
      cantidadOpciones: 2,
      nextid: [2.8, 2.72],
      especial: "Log Dragón",
    },
    {
      id: 2.72,
      descripcion: `¡Esto se torna personal! Le das batalla al dragón. ¡El fuego se vuelve insoportable!`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.7, 2.73, 2.74],
      especial: "Combate Dragón",
    },
    {
      id: 2.73,
      descripcion: `¡El dragón te ha derrotado! Te has quedado sin vida.\n\nFIN DEL JUEGO.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 2.74,
      descripcion: `¡Has derrotado al dragón! La gloria será por siempre tuya. ¡Felicidades! El reino de Javastra te debe tu vida. Vivirás el resto de tus días siendo honrado y tienes un honorifico título. ¡Hurra ${nombre}!\n\nFIN DEL JUEGO.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 2.8,
      descripcion: `¡Huye!\n`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.8, 4, 2.81],
      especial: "Huida",
    },
    {
      id: 2.81,
      descripcion: `¡Has logrado huir! No pudiste con el dragón. Si bien no has salido con la gloria, has logrado conservar tu vida. Vivirás el resto de tus días escondido.\n\nFIN DEL JUEGO.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 3,
      descripcion: `'Muelle Javastra: Venga a nuestro hermoso mercado.'\n${nombre}, te encuentras frente a una gran cantidad de tiendas que te llaman la atención. \n\nEn uno de los puestos de tu izquierda, un hombre te saluda efusivamente para que te acerques. A tu derecha, tienes el muelle en todo su esplendor.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
    },

    {
      id: 3.1,
      descripcion: `Debes escoger tu camino. \n\n0. Volver hacia atrás.\n1. Ir con el vendendor.\n2. Ir al muelle.`,
      categoria: "Muelle",
      input: true,
      cantidadOpciones: 3,
      nextid: [0.5, 3.2, 3.5],
    },
    {
      id: 3.2,
      descripcion: `'¡Buenos días! Tengo hoy en oferta esta hermosa soga que le permitirá atravesar hasta los más temibles obstáculos. ¡Solo 10 monedas! ¡Es una oferta de tiempo limitado!`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.3, 3.4],
      especial: "Vendedor",
    },
    {
      id: 3.3,
      descripcion: `"Me parece que usted no tiene monedas suficientes para esta maravillosa soga. Lamento decirle que no puedo rebajarle el precio."`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
    },
    {
      id: 3.4,
      descripcion: `'¡Muchas gracias! ${nombre}, usted ha hecho una fantástica compra! Vuelva pronto.'`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
      especial: "Soga",
    },
    {
      id: 3.5,
      descripcion: `Un hermoso cuerpo de agua se encuentra frente a ti.\n\nDebes escoger tu acción.\n\n0. Volver hacia atrás.\n1. Seguir mirando el agua.`,
      categoria: "Muelle",
      input: true,
      cantidadOpciones: 2,
      nextid: [3.1, 3.6],
    },
    {
      id: 3.6,
      descripcion: `"El agua está muy tranquila, no parece suceder nada.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.5],
      especial: "Espada",
    },
    {
      id: 3.7,
      descripcion: `¡Has conseguido salir del agua! ¡Y con una espada en la mano! Aumentan tu combate, ahora eres todo un guerrero.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
      especial: "Log Espada",
    },

    {
      id: 4,
      descripcion: `¡El juego ha terminado! A continuación verás tu puntaje final y tus logros, veamos...`,
      categoria: "Fin",
      input: false,
      cantidadOpciones: 0,
      nextid: [],
      especial: "Fin",
    },
  ];
}

