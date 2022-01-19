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
    console.log("ya hay un punto");
  } else {
      if (visor.innerHTML==='0') {
        visor.innerHTML = num;
        }else{
            visor.innerHTML += num;
        }
    
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

function calc() {
  let r=0,aux=0;
  if (visor.innerHTML.length) {
    mem.push(Number(visor.innerHTML));
    clearScreen();
do {
    if (r===0) {
        switch (mem[1]) {
        case "+":
          r += mem[0] + mem[2 ];

          break;
        case "-":
          r += mem[0 ] - mem[2 ];

          break;
        case "*":
          r += mem[0 ] * mem[2];

          break;
       
        default:
            r += mem[0] / mem[2];
          break;
      }
    } else {
        console.log(mem);
        switch (mem[1+aux*2]) {
            case "+":
              r += mem[2+aux*2];
    
              break;
            case "-":
              r -=  mem[2 +aux*2];
    
              break;
            case "*":
              r *= mem[2+aux*2];
    
              break;
           
    
            default:
                r /=  mem[2+aux*2];
              break;
          }
    }
    aux++
} while (aux<mem.length/3);

    
      
    
    writeRes(r);
    clearMem()
    
  }
}
