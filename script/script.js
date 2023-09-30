//Declaración variables globales
let nombre,
  sexo,
  terminacion,
  espada,
  comienzo,
  final,
  salir,
  muerte,
  victoria,
  turnoContador,
  turno,
  turnoHuida,
  logBruja,
  logDragon,
  bandera,
  logrosTotales,
  puntaje,
  logros,
  logrosID,
  inventario,
  healthBase,
  caminos,
  index,
  id,
  idActual,
  chequeoInput,
  bruja,
  dragon;
//Declaración variables globales fijas
let cordialidad = [
    { titulo: "Lord", sexo: "m" },
    { titulo: "Sir", sexo: "m" },
    { titulo: "Lady", sexo: "f" },
    { titulo: "Dame", sexo: "f" },
    { titulo: "Sin título", sexo: "m" },
  ],
  personajes = [
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
      raza: "Mago",
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
      raza: "Elfo",
      clase: "Artesano",
      vida: 11,
      iniciativa: 1,
      combate: 2,
      defensa: 6,
    },
    {
      raza: "Orco",
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

//Se añaden las imágenes para cada personaje.
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
//Levantar todos los elementos de DOM
let texto = document.getElementById("texto");
let botonera = document.getElementById("botonera");
let titulo = document.getElementById("titulo");
let input = document.getElementById("input");
let personajesHTML = document.getElementById("personajesHTML");
let usuario = document.getElementById("usuario");
let oponente = document.getElementById("oponente");
let inventarioHTML = document.getElementById("inventario");
let pergamino = document.getElementById("pergamino");

inicio();

// Inicialización de variables globales disponibles para reset.
function inicio() {
  resetBotonera();
  usuario.classList.add("oculto");
  oponente.classList.add("oculto");
  personajesHTML.classList.add("oculto");
  bandera = 0;
  nombre = "";
  terminacion = localStorage.getItem("terminacion") || "";
  espada = Number(localStorage.getItem("espada")) || 0;
  salir = false;
  muerte = false;
  victoria = false;
  turno = "";
  turnoContador = Number(localStorage.getItem("turnoContador")) || 0;
  logBruja = JSON.parse(localStorage.getItem("logBruja")) || [];
  bruja = JSON.parse(localStorage.getItem("bruja")) || {
    nombre: "Bruja",
    vida: 8,
    iniciativa: 10,
    combate: 2,
    defensa: 2,
    ruta: `<img src="./images/bruja.png" />`,
  };
  turnoHuida = Number(localStorage.getItem("turnoHuida")) || 0;
  logDragon = JSON.parse(localStorage.getItem("logDragon")) || [];
  dragon = JSON.parse(localStorage.getItem("dragon")) || {
    nombre: "Dragón",
    vida: 15,
    iniciativa: 3,
    combate: 4,
    defensa: 4,
    ruta: `<img src="./images/dragon.png" />`,
  };
  logrosTotales = Number(localStorage.getItem("logrosTotales")) || 0;
  puntaje = Number(localStorage.getItem("puntaje")) || 0;
  logros = JSON.parse(localStorage.getItem("logros")) || [
    `<br>- *`,
    `<br>- *`,
    `<br>- *`,
    `<br>- *`,
    `<br>- *`,
    `<br>- *`,
  ];
  logrosID = JSON.parse(localStorage.getItem("logrosID")) || [
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  index = Number(localStorage.getItem("index")) || 0;
  id = JSON.parse(localStorage.getItem("id")) || -1;
  idActual = localStorage.getItem("idActual", idActual) || 0;
  comienzo = Date.parse(localStorage.getItem("comienzo")) || new Date();
  console.log(comienzo);

  //Inicio de selección de personaje
  if (id == -1) {
    titulo.innerText = `Selección de Personaje`;
    texto.innerHTML = `¡Una cordial bienvenida!<br><br>Quisiera saber como puedo dirigirme a ti, ¿puedo llamarte Sir? ¿O debo llamarte Lady? Quizás simplemente debería pedirte el nombre, pero aquí en este reino tenemos esto tan cordial... tu dime.<br><br>Selecciona la opción que más te guste.`;
    for (let index = 0; index < cordialidad.length; index++) {
      crearBoton(cordialidad[index].titulo, () => setNombre(index));
    }
  } else {
    caminos = JSON.parse(localStorage.getItem("caminos"));
    console.log(caminos[33]);
    inventario = JSON.parse(localStorage.getItem("inventario"));
    healthBase = Number(localStorage.getItem("healthBase"));
    usuario.classList.toggle("oculto");
    usuario.innerHTML = localStorage.getItem("usuarioImagen");
    personajesHTML.classList.toggle("oculto");
    usuario.addEventListener("click", mostrarInventario);
    inputChecker(caminos);
  }
}

function setNombre(id) {
  nombre = cordialidad[id].titulo;
  sexo = cordialidad[id].sexo;
  terminacion = "o";
  if (id == 4) {
    nombre = "";
    texto.innerHTML = `De acuerdo, no utilizaré ningún título para dirigirme a ti.`;
  } else {
    if (sexo == "f") {
      terminacion = "a";
    }
    console.log(terminacion);
    localStorage.setItem("terminacion", terminacion);
    nombre += " ";
    texto.innerHTML = `¡Este es un buen comienzo! Bienvenid${terminacion}, ${nombre}.`;
  }

  texto.innerHTML += `<br><br>Introduce tu nombre aquí debajo. ¡No te preocupes! No estarás firmando ningún contrato...<br><br>Por ahora.`;
  input.classList.toggle("oculto");
  resetBotonera();
  crearBoton("Borrar", borrarInput);
  crearBoton("Enviar", enviarInput);
  input.addEventListener("keyup", (e) => {
    console.log(e.key);
    e.key === "Enter" && enviarInput();
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
    texto.innerHTML = `¡${nombre}! ¡Muchas gracias por confiarme tu nombre! Ya el pueblo comienza a nombrarte, parece que en tus tierras eres famos${terminacion}.`;
  } else {
    texto.innerHTML = `¡No quieras escaparte de mi! Necesito tu nombre, prometo que no es para realizar un hechizo.<br><br>Por favor, introduce tu nombre.`;
  }

  if (bandera == 3) {
    nombre += `Anónim${terminacion}`;
    registroLogro("Nombre");
    texto.innerHTML = `Parece que no confias en mi, no estamos empezando bien entonces. Te llamaré de ahora en más ${nombre}. Tu nombre no es tan conocido en el reino, y a medida que se esparce la voz, generas desconfianza entre la gente.`;
  }
  if (input.value != "" || bandera == 3) {
    input.classList.toggle("oculto");
    resetBotonera();
    input.value = "";
    texto.innerHTML += `<br><br>Por último, deberás escoger una raza. Dime, ¿con cuál de las siguientes razas crees que te identificas más?`;
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
  texto.innerHTML = `Haz escogido la raza ${razaPersonaje[0].raza}. A continuación las clases más comunes de esta raza. Debes escoger uno para continuar.`;
  //AÑADIR COMENTARIO DE CADA UNA DE LAS HABILIDADES
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
    personajesAElegir += `<br>`;
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

//Luego de Realizar Inventario, se realiza caminos, por lo tanto, si tengo el juego "guardado" en otra instancia, debo evitar esta inicialización.
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
  id = 0;
  declaracionDeCaminos();
  console.log(caminos);

  //Seteo de los Local Storages
  localStorage.setItem("comienzo", comienzo);
  localStorage.setItem("healthBase", healthBase);
  localStorage.setItem("usuarioImagen", imagenPersonaje.ruta);
  localStorage.setItem("caminos", JSON.stringify(caminos));
  //Seteo de variables que se inicializan de determinada forma, y que en el resto del código se van a ir cambiando.
  setStorage();

  //UNA VEZ DECLARADO CAMINOS, TENGO QUE VOLVER A REALIZAR LAS FUNCIONES QUE TENGO EN EL SCRIPT ORIGINAL
  console.log(terminacion);
  inputChecker(caminos);
}

function setStorage() {
  localStorage.setItem("puntaje", puntaje);
  localStorage.setItem("logrosTotales", logrosTotales);
  localStorage.setItem("logros", JSON.stringify(logros));
  localStorage.setItem("logrosID", JSON.stringify(logrosID));
  localStorage.setItem("inventario", JSON.stringify(inventario));
  localStorage.setItem("caminos", JSON.stringify(caminos));
}

function crearBoton(parametro, funcionPasada) {
  window["boton" + parametro] = document.createElement("button");
  window["boton" + parametro].innerText = parametro;
  window["boton" + parametro].id = parametro.toLowerCase();
  botonera.appendChild(window["boton" + parametro]);
  window["boton" + parametro].addEventListener("click", funcionPasada);
  if (parametro == "Siguiente") {
    window["boton" + parametro].focus();
  }
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
  titulosAMostrar += `<br></div>`;

  let propiedadesAMonstrar = `<div class="right">`;
  for (const propiedad in inventario) {
    propiedadesAMonstrar += `${inventario[propiedad]}</br>`;
  }
  propiedadesAMonstrar += `<br></div>`;

  inventarioAMostrar += titulosAMostrar + propiedadesAMonstrar + `<br></div>`;
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

//ACÁ SE CAMBIA
function inputChecker(arrayInput) {
  console.log(terminacion);
  resetBotonera();
  localStorage.setItem("id", JSON.stringify(id));
  localStorage.setItem("index", index);
  localStorage.setItem("idActual", idActual);
  titulo.innerText = arrayInput[index].categoria;
  idACambiar = -1;
  chequeoInput = false;
  eliminar = false;
  antesDeLogica = false;
  textoAdicional = "";
  descripcionEspecial = "";
  console.log(id);
  if (
    (idActual == 1.3 ||
      idActual == 1.31 ||
      idActual == 1.32 ||
      idActual == 1.33) &&
    bruja.vida > 0
  ) {
    oponente.classList.remove("oculto");
    oponente.innerHTML = bruja.ruta;
  } else if (
    idActual == 2.4 ||
    idActual == 2.5 ||
    idActual == 2.6 ||
    idActual == 2.7 ||
    idActual == 2.72 ||
    idActual == 2.73 ||
    idActual == 2.8
  ) {
    oponente.classList.remove("oculto");
    oponente.innerHTML = dragon.ruta;
  } else {
    oponente.classList.add("oculto");
  }

  if (arrayInput[index].especial != undefined) {
    switch (arrayInput[index].especial) {
      case "Voces":
        inventario.vida = inventario.vida - 1;
        registroLogro("Voces");
        if (inventario.vida <= 0) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
        }
        break;
      case "Monedas":
        inventario.monedas += 10;
        descripcionEspecial = `Ya exploraste este lugar, te recomiendo que busques en otro lado.`;
        idACambiar = arrayInput[index].id;
        eliminar = true;

        break;
      case "Combate Bruja":
        adicional = combate(bruja);
        logBruja.push(turno);
        textoAdicional = `<br><br>La bruja tiene ${bruja.vida} puntos de vida. ${adicional}`;
        localStorage.setItem("logBruja", JSON.stringify(logBruja));
        localStorage.setItem("bruja", JSON.stringify(bruja));
        localStorage.setItem("turnoContador", turnoContador);
        if (muerte) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
        } else if (victoria) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[2];
          victoria = false;
          registroLogro("Bruja");
          eliminar = true;
          idACambiar = 1.3;
          descripcionEspecial = `Ya has derrotado a la bruja, no hay nada más que ver aquí`;
          modificarNextId(arrayInput, idACambiar, [1.21]);
          turno = "";
          turnoContador = 0;
          inventario.combate += 2;
          inventario.vida = healthBase + 5;
          healthBase = inventario.vida;
          localStorage.removeItem("logBruja");
          localStorage.removeItem("turno");
          localStorage.removeItem("bruja");
          localStorage.removeItem("turnoContador");
        }
        break;
      case "Log Bruja":
        if (turno != "") {
          antesDeLogica = true;
          descripcionEspecial = arrayInput[index].descripcion + `<br>` + turno;
          idACambiar = arrayInput[index].id;
          turno = "";
        }
        break;
      case "Vendedor":
        if (inventario.monedas == 10) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
          puntaje += 10;
          inventario.monedas -= 10;
          console.log(index);
        }
        break;
      case "Soga":
        idACambiar = 3.2;
        descripcionEspecial = `"Buenos días, ${inventario.nombre}, recuerde que ya no tengo nada para ofrecerle. Solo quería entablar una conversación con usted. ¿Qué va a hacer usted hoy en este maravilloso día?"`;
        eliminar = true;
        modificarNextId(arrayInput, idACambiar, [3.1]);
        inventario.herramientas = "Soga";
        console.log(index);
        break;
      case "Espada":
        espada++;
        localStorage.setItem("espada", espada);
        console.log(espada);
        if (espada == 2) {
          idACambiar = 3.5;
          respirar = 0;
          localStorage.setItem("respirar", respirar);
          localStorage.removeItem("espada");
          modificarNextId(arrayInput, idACambiar, [3.1, 3.7]);
        }
        break;
      case "Respiración":
        respirar = localStorage.getItem("respirar");
        texto.classList.add("center");
        for (let i = 0; i < respirar; i++) {
          textoAdicional += `<br><br>...`;
        }
        respirar++;
        localStorage.setItem("respirar", respirar);
        if (respirar == 3) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
          localStorage.removeItem("respirar");
        }
        break;
      case "Log Espada":
        texto.classList.remove("center");
        registroLogro("Espada");
        inventario.armas = "Espada";
        idACambiar = 3.6;
        descripcionEspecial = `El agua ya no esconde ningún secreto, aunque se encuentra extremadamente plácida. Te quedas observándola unos minutos, pero sabes que debes regresar.`;
        eliminar = true;
        modificarNextId(arrayInput, idACambiar, [3.1]);
        modificarNextId(arrayInput, 3.5, [3.1, 3.6]);
        inventario.combate += 5;
        break;
      case "Puente":
        if (inventario.herramientas == "Soga") {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
          registroLogro("Puente");
        } else {
          inventario.vida -= 3;
        }
        break;
      case "Combate Dragón":
        adicional = combate(dragon);
        logDragon.push(turno);
        textoAdicional = `<br><br>El dragón tiene ${dragon.vida} puntos de vida. ${adicional}`;
        localStorage.setItem("logDragon", JSON.stringify(logDragon));
        localStorage.setItem("dragon", JSON.stringify(dragon));
        localStorage.setItem("turnoContador", turnoContador);
        if (muerte) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
        } else if (victoria) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[2];
          registroLogro("Dragón");
          localStorage.removeItem("logDragon");
          localStorage.removeItem("dragon");
          localStorage.removeItem("turnoContador");
        }
        break;
      case "Log Dragón":
        if (turno != "") {
          antesDeLogica = true;
          descripcionEspecial = arrayInput[index].descripcion + `<br>` + turno;
          idACambiar = arrayInput[index].id;
        }
        break;
      case "Huida":
        turnoHuida++;
        localStorage.setItem("turnoHuida", turnoHuida);
        inventario.vida =
          inventario.vida -
          Math.floor((Math.random() * 20 + dragon.combate) / 5);

        if (inventario.vida <= 0 && turnoHuida <= 5) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[1];
          descripcionEspecial = `¡El dragón te ha derrotado! Te has quedado sin vida.<br><br>FIN DEL JUEGO.`;
          antesDeLogica = true;
          idACambiar = 2.8;
        } else if (inventario.vida > 0 && turnoHuida <= 5) {
          descripcionEspecial =
            arrayInput[index].descripcion +
            `<br> Turno ${turnoHuida}: Tienes ${inventario.vida} puntos de vida.`;
          antesDeLogica = true;
          idACambiar = 2.8;
        }
        if (turnoHuida == 5) {
          arrayInput[index].nextid[0] = arrayInput[index].nextid[2];
          puntaje += 10;
        }
        break;
      case "Fin":
        salir = true;
        chequeoInput = true;
        final = new Date();
        console.log(final);
        break;
    }
    setStorage();
  }
  if (antesDeLogica) {
    descripcionChecker(arrayInput, eliminar, idACambiar);
    console.log(caminos[33].descripcion);
    localStorage.setItem("caminos", JSON.stringify(caminos));
  }

  if (arrayInput[index].input) {
    texto.innerHTML = arrayInput[index].descripcion;
    for (let i = 0; i < arrayInput[index].cantidadOpciones; i++) {
      crearBoton(arrayInput[index].opciones[i], () => {
        if (!antesDeLogica) {
          descripcionChecker(arrayInput, eliminar, idACambiar);
          localStorage.setItem("caminos", JSON.stringify(caminos));
        }
        nextIndex(arrayInput, i);
        inputChecker(arrayInput);
      });
    }
  } else {
    texto.innerHTML = arrayInput[index].descripcion + textoAdicional;
    crearBoton("Siguiente", () => {
      if (!salir) {
        if (!antesDeLogica) {
          descripcionChecker(arrayInput, eliminar, idACambiar);
          localStorage.setItem("caminos", JSON.stringify(caminos));
        }
        nextIndex(arrayInput, 0);
        inputChecker(arrayInput);
      } else {
        resetBotonera();
        for (let index = 0; index < logros.length; index++) {
          logros[index] = logros[index].replace(`*`, `LOGRO BLOQUEADO.`);
        }

        let tiempoTotal = final - comienzo;
        tiempoTotal = Math.round(tiempoTotal / 1000);
        let unidad = `segundos`;
        console.log(tiempoTotal);
        if (tiempoTotal > 120) {
          tiempoTotal = Math.round(tiempoTotal / 60);
          unidad = `minutos`;
        }
        texto.innerHTML = `${inventario.nombre} del reino ${
          inventario.raza
        }, aquí tus estadísticas de juego.<br><br>Has conseguido un puntaje total de ${puntaje}/100.<br><br>Logros obtenidos durante la aventura:<br>${logros.join(
          " "
        )}<br><br>Obtuviste un total de ${logrosTotales} de ${
          logros.length
        } logros.<br><br>El tiempo total de aventura fue de ${tiempoTotal} ${unidad}.`;

        localStorage.clear();
        if (puntaje == 100) {
          crearBoton("Siguiente", () => {
            texto.innerHTML = `¡JUEGO PERFECTO EN PUNTAJE! Felicidades, ${inventario.nombre} del reino ${inventario.raza}, tu nombre será recordado, y haz sido nombrad${terminacion} el ${inventario.raza} más valiente de estos tiempos.`;
            resetBotonera();
            crearBoton("Siguiente", finDelJuego);
          });
        } else {
          crearBoton("Siguiente", finDelJuego);
        }
      }
    });
  }
}

function finDelJuego() {
  resetBotonera();
  texto.innerHTML = `¡Muchas gracias por jugar! Dado que aun no puedo guardar tus datos, tienes la opción de enviarme tus logros y estadísticas por correo para que figure próximamente en la base de datos del juego. Si lo deseas, puedes presionar el botón 'Correo' para hacerlo. Te recomiendo simplemente mandarlo como se genera. Obviamente puedes dejar algún comentario adicional si lo deseas.<br><br>Puedes reiniciar el juego o ver las distintas estadísticas de previos jugadores.`;
  crearBoton("Enviar Correo", () => {
    let mail = "sofiacermi@hotmail.com";
    let asunto = `Estadísticas de juego de ${inventario.nombre}`;
    let cuerpo = `¡Hola! Estas son mis estadísticas para que se incluyan en el juego.
    
    {
      nombre: "${inventario.nombre}",
      raza: "${inventario.raza}",
      clase: "${inventario.clase}",
      vida: ${healthBase},
      iniciativa: ${inventario.iniciativa},
      combate: ${inventario.combate},
      defensa: ${inventario.defensa},
      puntaje: ${puntaje},
      logros: ${logrosTotales},
      tiempo: ${Math.round((final - comienzo) / 1000)},
    }`;

    let mailtoLink = `mailto:${mail}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailtoLink;
  });
  crearBoton("Reiniciar", inicio);
  crearBoton("Estadísticas", () => {});

  //FALTAN ESTADÍSTICAS
}

function nextIndex(arrayInput, numeroID) {
  id = arrayInput[index].nextid;
  index = arrayInput.findIndex((camino) => {
    idActual = camino.id;
    return camino.id === id[numeroID];
  });
}

function descripcionChecker(arrayInput, eliminarEspecial, idACambiar) {
  i = arrayInput.findIndex((camino) => {
    return camino.id == idACambiar;
  });

  if (descripcionEspecial != "") {
    arrayInput[i].descripcion = descripcionEspecial;
    if (eliminarEspecial) {
      delete arrayInput[i].especial;
    }
  }
}

function modificarNextId(arrayInput, nextIDacambiar, nextID) {
  i = arrayInput.findIndex((camino) => {
    return camino.id == nextIDacambiar;
  });
  arrayInput[i].nextid = nextID;
}

function combate(oponente) {
  textoExtra = "";
  iniciativaPropia = Math.ceil(Math.random() * 10) + inventario.iniciativa;
  iniciativaOponente = Math.ceil(Math.random() * 10) + oponente.iniciativa;
  if (iniciativaPropia > iniciativaOponente) {
    primero = inventario;
    ini = true;
    segundo = oponente;
  } else {
    primero = oponente;
    ini = false;
    segundo = inventario;
  }
  ataque1 = Math.ceil(Math.random() * 20) + primero.combate;
  defensa1 = Math.ceil(Math.random() * 20) + segundo.defensa;

  if (defensa1 == 20 + segundo.defensa) {
    danoASegundo = 0;
    textoExtra += `<br><br>¡Defensa perfecta de ${segundo.nombre}!`;
  } else if (ataque1 == 20 + primero.combate) {
    danoASegundo = Math.floor(ataque1 / 4);
    textoExtra += `<br><br>¡Golpe crítico de ${primero.nombre}!`;
  } else {
    danoASegundo = Math.floor((ataque1 - defensa1) / 4);
    danoASegundo < 1 ? (danoASegundo = 1) : danoASegundo;
  }

  segundo.vida -= danoASegundo;

  if (segundo.vida <= 0) {
    segundo.vida = 0;
    ini ? (victoria = true) : (muerte = true);
  } else {
    ataque2 = Math.ceil(Math.random() * 20) + segundo.combate;
    defensa2 = Math.ceil(Math.random() * 20) + primero.defensa;

    if (defensa2 == 20 + primero.defensa) {
      danoAPrimero = 0;
      textoExtra += `<br><br>¡Defensa perfecta de ${primero.nombre}!`;
    } else if (ataque2 == 20 + segundo.combate) {
      danoAPrimero = Math.floor(ataque2 / 4);
      textoExtra += `<br><br>¡Golpe crítico de ${segundo.nombre}!`;
    } else {
      danoAPrimero = Math.floor((ataque2 - defensa2) / 4);
      danoAPrimero < 1 ? (danoAPrimero = 1) : danoAPrimero;
    }

    primero.vida -= danoAPrimero;
  }

  if (primero.vida <= 0) {
    primero.vida = 0;
    ini ? (muerte = true) : (victoria = true);
  }

  turnoContador++;
  ini
    ? (turno = `Turno ${turnoContador} - Iniciativa: ${primero.nombre}. Daño Hecho: ${danoASegundo}. Daño Recibido: ${danoAPrimero}. Vida de ${oponente.nombre}: ${oponente.vida}.`)
    : (turno = `Turno ${turnoContador} - Iniciativa: ${primero.nombre}. Daño Hecho: ${danoAPrimero}. Daño Recibido: ${danoASegundo}. Vida de ${oponente.nombre}: ${oponente.vida}.`);

  return textoExtra;
}

function declaracionDeCaminos() {
  caminos = [
    {
      id: 0,
      descripcion: `${inventario.nombre}, del reino ${inventario.raza}, ¡un gusto conocerte! Has llegado en el momento indicado, necesitamos tu ayuda.<br><br>Debes saber que en nuestro reino, Javascra, una terrible amenaza acecha en el temible castillo que tenemos delante.<br><br>Mira, sígueme, te mostraré.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.1],
    },
    {
      id: 0.1,
      descripcion: `Espera, antes que lo olvide. En cualquier momento puedes presionar la imagen de tu personaje para ver tus estadísticas actualizadas. ¡Recuerda que tus puntos de vida son primordiales!<br><br>Por otro lado, si en cualquier momento del juego, de ahora en adelante, necesitas salir, ¡no te preocupes! Aquí en Javascra tenemos muy buena memoria, por lo que no se borrarán tus datos. Simplemente volverás donde quedaste.<br><br>Ahora sí, continuemos.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.2],
    },
    {
      id: 0.2,
      descripcion: `Presta mucha atención a lo que te voy a contar. Acércate un poco más.<br><br>Verás, el castillo que ves en el camino de adelante, es custodiado por un enorme dragón que lo ha invadido, y ha sacado a todos con su temible fuego hace algunas lunas llenas atrás. El castillo contaba con un puente que cruza el río, pero el fuego del dragón lo ha deshecho. Si tomas ese camino, no podrás regresar. ¡Pero necesitamos que vayas a por él! No estamos apurados, debo confesarte, pero nos gustaria que nos puedas ayudar.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.3],
    },
    {
      id: 0.3,
      descripcion: `En el camino de la izquierda, tienes el bosque encantado. Puedes descubrir algún que otro secreto en él, podrías investigarlo, y siempre puedes regresar aquí... Si no mueres en el intento, claro está. En el bosque hay criaturas que pueden atentar contra ti, aunque creo que podrías conseguir algo de ayuda.<br><br>Por último, en este camino que tienes a la derecha, irás al muelle, donde se encuentra un pequeño poblado, ahí se han refugiado la mayoría de los sirvientes del castillo. El rey y la reina se encuentran seguros en un lugar que no puedo decirte... Porque lo desconozco.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.4],
    },
    {
      id: 0.4,
      descripcion: `En fin, ${inventario.nombre}, ¡necesitamos de tu ayuda! ¿Estás list${terminacion} para la aventura? Todos los caminos te conducirán a algún lugar, si tienes el alma aventurera, podrías conseguir la victoria eterna.`,
      categoria: "Introducción",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.5],
    },
    {
      id: 0.5,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>¡Recuerda! Si escoges ir al castillo, no podrás regresar.`,
      categoria: "Introducción",
      input: true,
      cantidadOpciones: 3,
      nextid: [1, 2, 3],
      opciones: ["Bosque", "Castillo", "Muelle"],
    },
    {
      id: 1,
      descripcion: `"El Bosque Encantado: Donde los árboles susurran secretos y la magia cobra vida."<br><br>Lo cierto es que nunca escuché a un árbol susurrar, pero igualmente, deberías tener cuidado.<br><br>${inventario.nombre}, encuentras a tu izquierda la continuación del bosque. Una dulce voz te llama la atención. A tu derecha, sin embargo, una lúgubre cabaña te invita a pasar.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.01],
    },
    {
      id: 1.01,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>El bosque es un lugar un poco peligroso, y sientes algo de escalofríos a la sombra de los árboles.`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 3,
      nextid: [0.5, 1.1, 1.2],
      opciones: ["Regresar", "Continuar", "Cabaña"],
    },
    {
      id: 1.1,
      descripcion: `Sigues la dulce voz, y a medida que te adentras en el bosque, te da un poco de sueño.<br><br>Te duermes sin darte cuenta. Algo te picotea en el brazo. Pierdes 1 de vida.<br><br>Al despertarte, te encuentras nuevamente frente a los tres caminos. ¿Raro? Sin duda. Quizás no debas volver a perderte en el bosque.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [0.5, 1.11],
      especial: "Voces",
    },
    {
      id: 1.11,
      descripcion: `¡Te has quedado sin puntos de vida! Los animales del bosque tendrán qué comer esta noche.<br><br><center>FIN DEL JUEGO.</center>`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 1.2,
      descripcion: `Entras a la cabaña ya sin pensarlo nuevamente. Sientes un frío importante, te tiembla el cuerpo. Sientes miedo, y tienes el presentimiento de que no te encuentras sol${terminacion}.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
    },
    {
      id: 1.21,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>Hay un olor extraño en el aire. Ves a la izquierda hay una trampilla abierta que parece tener escaleras que bajan a un sótano. A la derecha, un pasillo parece conducir a una cocina.`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 3,
      nextid: [1.01, 1.3, 1.4],
      opciones: ["Regresar", "Sótano", "Cocina"],
    },
    {
      id: 1.3,
      descripcion: `Bajas las escaleras con cuidado, el olor extraño viene de ahí abajo.<br><br>Una figura indescifrable te mira desde la esquina, sus ojos brillan en la oscuridad. Observas que sus manos está haciendo movimientos extraños. ¡Es una bruja! ¡Y está por lanzar un hechizo!`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.31],
    },
    {
      id: 1.31,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>La bruja te mira determinada a pelear y sacarte de su casa. Siempre está la opción de huir...<br>`,
      categoria: "Bosque",
      input: true,
      cantidadOpciones: 2,
      nextid: [1.21, 1.32],
      opciones: ["Huir", "Pelear"],
      especial: "Log Bruja",
    },
    {
      id: 1.32,
      descripcion: `¡Esto se torna personal! Le das batalla a la bruja.`, //Ramdomizer
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.31, 1.33, 1.34],
      especial: "Combate Bruja",
    },
    {
      id: 1.33,
      descripcion: `¡La bruja te ha derrotado! Te has quedado sin vida. La bruja quizás aproveche para hacer alguna poción con partes de tu cuerpo...<br><br><center>FIN DEL JUEGO.</center>`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 1.34,
      descripcion: `¡Has derrotado a la bruja!<br><br>Esto te da experiencia, ¡te sientes más fuerte!.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
    },
    {
      id: 1.4,
      descripcion: `Entras a la cocina sin dudarlo. Está lleno de calderos con sustancias muy extrañas a los cuales no te atreves a acercarte.<br><br>Decides revisar las alacenas. Encuentras, luego de varios minutos, un pequeño cofre detrás de algunos frascos de pociones vacías.<br><br>Lo abres... ¡Dentro hay 10 monedas! Las guardas antes que nadie te vea.<br><br>Tranquil${terminacion}, no voy a juzgarte.`,
      categoria: "Bosque",
      input: false,
      cantidadOpciones: 0,
      nextid: [1.21],
      especial: "Monedas",
    },
    {
      id: 2,
      descripcion: `¡Cuanta valentía estás demostrando, ${inventario.nombre}!<br><br>Recuerda, no hay vuelta atrás. A partir de este punto, o la victoria o la muerte están aseguradas, ¡pero a no desesperar! Confio plenamente en ti y en tus habilidades. Después de todo, haz estado explorando, ¿cierto?`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.1],
    },
    {
      id: 2.1,
      descripcion: `El castillo se encuentra a lo lejos, lo ves que está a unas leguas de distancia. El puente roto está frente a ti ahora, y debes cruzar el agua para llegar al otro lado.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.3, 2.2],
      especial: "Puente",
    },
    {
      id: 2.2,
      descripcion: `¡Fuiste lo suficientemente astuto como para traer la soga contigo! Atas la soga, te balanceas y llegas al otro lado sin problemas, demostrando tu destreza y, por sobretodo, tu valentía.<br><br>Llegas a las puertas del castillo, y entras ya sin dudarlo.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.4],
    },
    {
      id: 2.3,
      descripcion: `Bajas despacio hasta tocar el agua. Cruzar por el río provoca que te canses, y sientes que te lastimas en el proceso. Luego, vuelves a escalar hasta llegar a los pies del castillo.<br><br>Llegas a la puerta, y titubeas al entrar, aunque finalmente lo haces.`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.4],
    },
    {
      id: 2.4,
      descripcion: `Un gran salón se impone frente a ti. El enorme dragón se encuentra ahí, ansioso. Pareciera como si te hubiese estado esperando.<br><br>El ruido de la puerta le llama la atención, te ve llegar y abre la boca para escupir fuego. ¡Esto se está por poner muy feo!`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.5],
    },
    {
      id: 2.5,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>El dragón tiene un tamaño imponente, sus escamas de color rojo brillan con la luz del sol que se cuela por el vitral. ¿Estás list${terminacion} para esta batalla? Siempre está la opción de huir...`,
      categoria: "Castillo",
      input: true,
      cantidadOpciones: 2,
      nextid: [2.8, 2.6],
      opciones: ["Escapar", "Pelear"],
    },
    {
      id: 2.6,
      descripcion: `El dragón se ve feroz, se para frente a ti y su mirada se ve aterradora, ¡pero nada como la valentía de ${inventario.nombre} para enfrentarlo!<br><br>Te preparas para la gran batalla final. ¡Es tu oportunidad para salvar a Javascra! ¡Mucha suerte!`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.72],
    },
    {
      id: 2.7,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>El dragón no dará tregua, peleará hasta acabar contigo.<br>`,
      categoria: "Castillo",
      input: true,
      cantidadOpciones: 2,
      nextid: [2.8, 2.72],
      opciones: ["Huir", "Pelear"],
      especial: "Log Dragón",
    },
    {
      id: 2.72,
      descripcion: `¡Esto se torna personal! Le das batalla al dragón. ¡El fuego se vuelve insoportable!`, //Randomizer.
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.7, 2.73, 2.74],
      especial: "Combate Dragón",
    },
    {
      id: 2.73,
      descripcion: `¡El dragón te ha derrotado! Te has quedado sin vida. El dragón se entretendrá unas horas comiendo tu cuerpo sin vida.<br><br><center>FIN DEL JUEGO.</center>`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 2.74,
      descripcion: `¡Has derrotado al dragón! La gloria será por siempre tuya. ¡Felicidades! El reino de Javascra te debe tu vida. Vivirás el resto de tus días siendo honrad${terminacion}. ¡Hurra ${inventario.nombre} del reino ${inventario.raza}!<br><br>Se realizará una celebración por un ciclo de luna llena en tu nombre. ¡Eres y serás famos${terminacion} por muchas décadas!<br><br><center>FIN DEL JUEGO.</center>`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 2.8,
      descripcion: `¡Huye!<br>`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [2.8, 4, 2.81],
      especial: "Huida",
    },
    {
      id: 2.81,
      descripcion: `¡Has logrado huir! No pudiste con el dragón. Si bien no has salido con la gloria, has logrado conservar tu vida, no sin tener unas quemaduras importantes en tu cuerpo.<br><br>Vivirás el resto de tus días escondid${terminacion} y exiliad${terminacion}, y tu nombre terminará por olvidarse pronto. Alguien más vendrá después de ti a llevarse la victoria y salvar nuestro reino. No te preocupes, es preferible estar viv${terminacion}, yo no te juzgo.<br><br><center>FIN DEL JUEGO.</center>`,
      categoria: "Castillo",
      input: false,
      cantidadOpciones: 0,
      nextid: [4],
    },
    {
      id: 3,
      descripcion: `"Muelle Javascra: Visite a nuestro hermoso mercado."<br><br>${inventario.nombre}, te encuentras frente a una gran cantidad de tiendas que te llaman la atención. Las baratijas se ven bonitas y la comida más que deliciosa. En uno de los puestos de tu izquierda, un hombre te saluda efusivamente para que te acerques.<br><br>A tu derecha, está el puerto, con el agua cristalina reflejando la luz del sol.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
    },

    {
      id: 3.1,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>El vendedor sigue gritando tu nombre para que te acerques. Aun así, el agua del puerto te llama la atención.`,
      categoria: "Muelle",
      input: true,
      cantidadOpciones: 3,
      nextid: [0.5, 3.2, 3.5],
      opciones: ["Regresar", "Vendedor", "Puerto"],
    },
    {
      id: 3.2,
      descripcion: `"¡Buenos días! ¿Usted es ${inventario.nombre}? ¡Ya me parecía! He escuchado mucho de usted. ¡Hice bien en llamar su atención!"<br><br>
      "Tengo hoy en oferta esta hermosa soga que le permitirá atravesar hasta los más temibles obstáculos. ¡Solo 10 monedas! ¡Es una oferta de tiempo limitado! Entiéndame, estamos aquí para generar ganancias, ¿cierto? Después de todo, debo cenar esta noche, y mi familia también."`, //Cambiar intro.
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.3, 3.4],
      especial: "Vendedor",
    },
    {
      id: 3.3,
      descripcion: `"Me parece que usted no tiene monedas suficientes para esta maravillosa soga. Lamento decirle que no puedo rebajarle el precio. Además, 10 monedas no es mucho."`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
    },
    {
      id: 3.4,
      descripcion: `"¡Muchas gracias! ${inventario.nombre}, ¡usted ha hecho una fantástica compra! Vuelva pronto. Recuerde que no hago devoluciones de ningún tipo. Perdone, como le comenté, necesitamos comer esta noche."`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.1],
      especial: "Soga",
    },
    {
      id: 3.5,
      descripcion: `¡Debes escoger tu camino! En los botones de abajo tienes las opciones.<br><br>Puedes pasar el tiempo mirando el suave movimiento del agua o regresar donde se encuentran las tiendas.`,
      categoria: "Muelle",
      input: true,
      cantidadOpciones: 2,
      nextid: [3.1, 3.6],
      opciones: ["Regresar", "Mirar el agua"],
    },
    {
      id: 3.6,
      descripcion: `"El agua está muy tranquila, no parece haber nada más que peses.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.5],
      especial: "Espada",
    },
    {
      id: 3.7,
      descripcion: `¡Hay algo en el agua! Un brillo, un artefacto extraño. Te lanzas al agua sin pensarlo dos veces.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.71],
    },
    {
      id: 3.71,
      descripcion: `Te zambulles para alcanzar el artefacto. Aguantas la respiración.`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.72],
    },
    {
      id: 3.72,
      descripcion: `¡Estira la mano! ¡Ya casi!`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.73],
    },
    {
      id: 3.73,
      descripcion: `...`,
      categoria: "Muelle",
      input: false,
      cantidadOpciones: 0,
      nextid: [3.73, 3.8],
      especial: "Respiración",
    },
    {
      id: 3.8,
      descripcion: `¡Has conseguido salir del agua! ¡Y con una espada en la mano! Aumentan tu combate, estás list${terminacion} para pelear contra cualquier enemigo que se cruce en tu camino.`,
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
function declaracionDeJugadores() {
  let jugadores = [
    {
      nombre: "Lord List",
      raza: "Humano",
      clase: "Caballero",
      vida: 13,
      iniciativa: 0,
      combate: 2,
      defensa: 5,
      puntaje: 95,
      logros: 3,
      tiempo: 8,
    },
    {
      nombre: "Sir William",
      raza: "Humano",
      clase: "Rogue",
      vida: 10,
      iniciativa: 4,
      combate: 3,
      defensa: 3,
      puntaje: 1,
      logros: 2,
      tiempo: 1,
    },
    {
      nombre: "Lord Richard",
      raza: "Humano",
      clase: "Cazador",
      vida: 7,
      iniciativa: 5,
      combate: 6,
      defensa: 2,
      puntaje: 96,
      logros: 0,
      tiempo: 1,
    },
    {
      nombre: "Dame Elizabeth",
      raza: "Elfo",
      clase: "Bardo",
      vida: 8,
      iniciativa: 5,
      combate: 2,
      defensa: 5,
      puntaje: 4,
      logros: 2,
      tiempo: 14,
    },
    {
      nombre: "Sir Edward",
      raza: "Elfo",
      clase: "Guerrero",
      vida: 10,
      iniciativa: 2,
      combate: 7,
      defensa: 1,
      puntaje: 14,
      logros: 4,
      tiempo: 4,
    },
    {
      nombre: "Dame Eleanor",
      raza: "Elfo",
      clase: "Profeta",
      vida: 9,
      iniciativa: 3,
      combate: 5,
      defensa: 3,
      puntaje: 36,
      logros: 3,
      tiempo: 0,
    },
    {
      nombre: "Lady Isabella",
      raza: "Elfo",
      clase: "Monje",
      vida: 12,
      iniciativa: 2,
      combate: 2,
      defensa: 4,
      puntaje: 97,
      logros: 2,
      tiempo: 12,
    },
    {
      nombre: "Dame Margaret",
      raza: "Elfo",
      clase: "Asesino",
      vida: 11,
      iniciativa: 6,
      combate: 3,
      defensa: 0,
      puntaje: 93,
      logros: 2,
      tiempo: 13,
    },
    {
      nombre: "Sir Henry",
      raza: "Orco",
      clase: "Arquero",
      vida: 12,
      iniciativa: 0,
      combate: 5,
      defensa: 3,
      puntaje: 83,
      logros: 1,
      tiempo: 8,
    },
    {
      nombre: "Sir Thomas",
      raza: "Elfo",
      clase: "Herrero",
      vida: 9,
      iniciativa: 4,
      combate: 6,
      defensa: 1,
      puntaje: 32,
      logros: 0,
      tiempo: 3,
    },
    {
      nombre: "Sir Richard",
      raza: "Orco",
      clase: "Asaltador",
      vida: 7,
      iniciativa: 6,
      combate: 4,
      defensa: 3,
      puntaje: 53,
      logros: 4,
      tiempo: 14,
    },
    {
      nombre: "Lady Victoria",
      raza: "Orco",
      clase: "Destructor",
      vida: 9,
      iniciativa: 2,
      combate: 7,
      defensa: 2,
      puntaje: 96,
      logros: 3,
      tiempo: 1,
    },
    {
      nombre: "Sir John",
      raza: "Elfo",
      clase: "Artesano",
      vida: 11,
      iniciativa: 1,
      combate: 2,
      defensa: 6,
      puntaje: 3,
      logros: 0,
      tiempo: 1,
    },
    {
      nombre: "Sir Robert",
      raza: "Orco",
      clase: "Carroñero",
      vida: 8,
      iniciativa: 4,
      combate: 3,
      defensa: 5,
      puntaje: 65,
      logros: 4,
      tiempo: 3,
    },
    {
      nombre: "Lady Emily",
      raza: "Mago",
      clase: "Profeta",
      vida: 13,
      iniciativa: 3,
      combate: 4,
      defensa: 0,
      puntaje: 7,
      logros: 0,
      tiempo: 7,
    },
    {
      nombre: "Lord Charles",
      raza: "Mago",
      clase: "Nigromante",
      vida: 10,
      iniciativa: 1,
      combate: 5,
      defensa: 4,
      puntaje: 17,
      logros: 5,
      tiempo: 4,
    },
    {
      nombre: "Dame Catherine",
      raza: "Humano",
      clase: "Caballero",
      vida: 13,
      iniciativa: 0,
      combate: 2,
      defensa: 5,
      puntaje: -4,
      logros: 2,
      tiempo: 2,
    },
    {
      nombre: "Sir James",
      raza: "Humano",
      clase: "Rogue",
      vida: 10,
      iniciativa: 4,
      combate: 3,
      defensa: 3,
      puntaje: 84,
      logros: 2,
      tiempo: 15,
    },
    {
      nombre: "Sir Richard",
      raza: "Humano",
      clase: "Cazador",
      vida: 7,
      iniciativa: 5,
      combate: 6,
      defensa: 2,
      puntaje: 39,
      logros: 4,
      tiempo: 7,
    },
    {
      nombre: "Lord William",
      raza: "Elfo",
      clase: "Bardo",
      vida: 8,
      iniciativa: 5,
      combate: 2,
      defensa: 5,
      puntaje: 55,
      logros: 3,
      tiempo: 9,
    },
    {
      nombre: "Sir Thomas",
      raza: "Elfo",
      clase: "Guerrero",
      vida: 10,
      iniciativa: 2,
      combate: 7,
      defensa: 1,
      puntaje: 27,
      logros: 5,
      tiempo: 1,
    },
    {
      nombre: "Lord Edward",
      raza: "Elfo",
      clase: "Profeta",
      vida: 9,
      iniciativa: 3,
      combate: 5,
      defensa: 3,
      puntaje: 4,
      logros: 1,
      tiempo: 15,
    },
    {
      nombre: "Dame Isabella",
      raza: "Elfo",
      clase: "Monje",
      vida: 12,
      iniciativa: 2,
      combate: 2,
      defensa: 4,
      puntaje: 55,
      logros: 5,
      tiempo: 15,
    },
    {
      nombre: "Dame Margaret",
      raza: "Elfo",
      clase: "Asesino",
      vida: 11,
      iniciativa: 6,
      combate: 3,
      defensa: 0,
      puntaje: 31,
      logros: 4,
      tiempo: 3,
    },
    {
      nombre: "Dame Eleanor",
      raza: "Orco",
      clase: "Arquero",
      vida: 12,
      iniciativa: 0,
      combate: 5,
      defensa: 3,
      puntaje: 83,
      logros: 1,
      tiempo: 12,
    },
    {
      nombre: "Sir William",
      raza: "Orco",
      clase: "Herrero",
      vida: 9,
      iniciativa: 4,
      combate: 6,
      defensa: 1,
      puntaje: 39,
      logros: 6,
      tiempo: 4,
    },
    {
      nombre: "Lady Victoria",
      raza: "Orco",
      clase: "Asaltador",
      vida: 7,
      iniciativa: 6,
      combate: 4,
      defensa: 3,
      puntaje: 80,
      logros: 3,
      tiempo: 6,
    },
    {
      nombre: "Sir John",
      raza: "Orco",
      clase: "Destructor",
      vida: 9,
      iniciativa: 2,
      combate: 7,
      defensa: 2,
      puntaje: 30,
      logros: 6,
      tiempo: 13,
    },
    {
      nombre: "Lady Mary",
      raza: "Enano",
      clase: "Artesano",
      vida: 11,
      iniciativa: 1,
      combate: 2,
      defensa: 6,
      puntaje: 19,
      logros: 1,
      tiempo: 2,
    },
    {
      nombre: "Dame Catherine",
      raza: "Orco",
      clase: "Carroñero",
      vida: 8,
      iniciativa: 4,
      combate: 3,
      defensa: 5,
      puntaje: 39,
      logros: 0,
      tiempo: 10,
    },
    {
      nombre: "Sir Hellrider",
      raza: "Orco",
      clase: "Destructor",
      vida: 9,
      iniciativa: 2,
      combate: 14,
      defensa: 2,
      puntaje: 95,
      logros: 4,
      tiempo: 478,
    },
  ];
  console.log(jugadores);
}
