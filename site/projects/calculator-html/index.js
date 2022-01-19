const mem = [];
const visor = document.getElementById("screen");

function clearScreen() {
  visor.innerHTML = "";
}

function clearMem() {
  while (mem.length) {
    mem.shift();
  }
}

function writeNum(num) {
  if (num === "." && visor.innerHTML.toString().includes(".")) {
    return;
  }
  if (visor.innerHTML === "0") {
    visor.innerHTML = num;
  } else {
    visor.innerHTML += num;
  }
}

function writeSym(symbol) {
  if (visor.innerHTML.length) {
    mem.push(Number(visor.innerHTML));
    mem.push(symbol);
    clearScreen();
  }
}

function writeRes(res) {
  clearMem();
  clearScreen();
  writeNum(res);
}

function increment(num) {
  if (typeof num !== "number") {
    throw Error("not a number");
  }
  return num + 1;
}

function calc() {
  let r = 0;
  let aux = 0;
  if (visor.innerHTML.length) {
    mem.push(Number(visor.innerHTML));
    clearScreen();
    do {
      if (r === 0) {
        switch (mem[1]) {
          case "+":
            r += mem[0] + mem[2];

            break;
          case "-":
            r += mem[0] - mem[2];

            break;
          case "*":
            r += mem[0] * mem[2];

            break;

          default:
            r += mem[0] / mem[2];
            break;
        }
      } else {
        switch (mem[1 + aux * 2]) {
          case "+":
            r += mem[2 + aux * 2];

            break;
          case "-":
            r -= mem[2 + aux * 2];

            break;
          case "*":
            r *= mem[2 + aux * 2];

            break;

          default:
            r /= mem[2 + aux * 2];
            break;
        }
      }
      aux = increment(aux);
    } while (aux < mem.length / 3);

    writeRes(r);
    clearMem();
  }
}

const ac = document.getElementById("ac");
ac.onclick(() => {
  clearMem();
  clearScreen();
});

const c = document.getElementById("c");
c.onclick(() => {
  clearScreen();
});

const fraction = document.getElementById("fraction");
fraction.onclick(() => {
  writeSym("/");
});

const product = document.getElementById("product");
product.onclick(() => {
  writeSym("*");
});

const add = document.getElementById("add");
add.onclick(() => {
  writeSym("+");
});

const minus = document.getElementById("minus");
minus.onclick(() => {
  writeSym("-");
});

const one = document.getElementById("one");
one.onclick(() => {
  writeNum(1);
});

const two = document.getElementById("two");
two.onclick(() => {
  writeNum(2);
});

const three = document.getElementById("three");
three.onclick(() => {
  writeNum(3);
});

const four = document.getElementById("four");
four.onclick(() => {
  writeNum(4);
});

const five = document.getElementById("five");
five.onclick(() => {
  writeNum(5);
});

const six = document.getElementById("six");
six.onclick(() => {
  writeNum(6);
});

const seven = document.getElementById("seven");
seven.onclick(() => {
  writeNum(7);
});

const eight = document.getElementById("eight");
eight.onclick(() => {
  writeNum(8);
});

const nine = document.getElementById("nine");
nine.onclick(() => {
  writeNum(9);
});

const cero = document.getElementById("cero");
cero.onclick(() => {
  writeNum(0);
});

const period = document.getElementById("period");
period.onclick(() => {
  writeNum(".");
});

const equal = document.getElementById("equal");
equal.onclick(() => {
  calc();
});
