let roscoLetters = document.getElementsByClassName("letter");
let screen = document.getElementById("screen");
let screenText = document.getElementById("text");

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 2,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  {
    letter: "b",
    answer: "bingo",
    status: 2,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let lastLetter;

// la funcion selectedQuestions permite la expansion del set de preguntas y garantiza la aleatoriedad de estas en cada partida

function selectQuestions() {
  let selectedQuestions = [];
  for (const letter of letters) {
    let aux = questions.filter((question) => {
      return question.letter.toString() === letter;
    });
    selectedQuestions.push(aux[Math.floor(Math.random() * aux.length)]);
  }
  return selectedQuestions;
}

function logLetters() {
  for (const question of questions) {
    switch (question.status) {
      case 0:
        console.warn(question.letter);
        break;
      case 1:
        console.error(question.letter);
        break;
      default:
        for (const letter of roscoLetters) {
          console.log(question.letter.toUpperCase());
          if (
            letter.textContent.includes(question.letter.toUpperCase())
          ) {
            letter.style.cssText +=
              "border: 4px var(--letter-border-correct) solid;";
          }
        }
        break;
    }
  }
}

function selectLetter() {
  if (lastLetter === undefined) {
    lastLetter = "a";
  } else if (lastLetter === letters[letters.length - 1]) {
    lastLetter = "a";
  } else {
    lastLetter = letters[letters.indexOf(lastLetter) + 1];
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function askQuestion(question) {
  screenText.innerHTML = "";
  for (let i = 0; i < question.length; i++) {
    const element = question[i];
    await waitForMs(50);
    screenText.innerHTML += element;
  }
    

  
}

const leaderboard = [];

function printBoard() {
  console.table(leaderboard);
}

function highscoreConstuctor(name, score) {
  this.name = name;
  this.aciertos = score.aciertos;
  this.errores = score.errores;
}

function setScore(name, score) {
  leaderboard.push(new highscoreConstuctor(name, score));
  if (leaderboard.length > 1) {
    leaderboard.sort((a, b) => (a.aciertos < b.aciertos ? 1 : -1));
  }
}

function reset() {
  for (const question of questions) {
    question.status = 0;
  }
}

function showLetters() {
  for (const letter of roscoLetters) {
    letter.style.cssText += "display: block;";
  }
}

function hideLetters() {
  for (const letter of roscoLetters) {
    letter.style.cssText += "display: none;";
  }
}

async function setRosco() {
  showLetters();
  let degs = 360 / 27;
  screen.style.cssText += "transform: translate(15%,-50%);";
  await waitForMs(20);
  for (let i = 0; i < roscoLetters.length; i++) {
    roscoLetters[
      i
    ].style.cssText += `transition: transform 1s ease-in-out;transform: rotate(${
      degs * i
    }deg) translate(0,-300px) rotate(-${degs * i}deg) translate(-50%,-50%);`;
  }
}

function hideRosco() {
  hideLetters();
  screen.style.cssText += "transform: translate(-50%,-50%);";
  for (let i = 0; i < roscoLetters.length; i++) {
    roscoLetters[i].style.cssText = "transform: translate(0);";
  }
}

async function main() {
  let player;
  
  logLetters()
  

}

