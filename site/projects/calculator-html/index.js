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
