function format(intro){
                
    try {
        vals = intro.split(' ');
        
        let j = vals.length;
        
        for (let i = 0; i< j; i++) {
            
            
            if (vals[i]==="") {
                vals.splice(i,1);
                j--;i--;
                
            }
            
            }
            if (vals.length!=0) {
                return vals;
            } else {
                return 'error'
            }
            
        } catch (TypeError) {
        return 'error';
    }
}
function isNum (vals){
    if (vals==='error') {
        return vals;
    }else{
        
        for (const val in vals) {
            
            if (!Number.isNaN(Number(vals[val]))) {
                vals[val]=Number(vals[val]);
                
            }else {
                vals = 'error';
                break;
            }
        }
        return vals;
        
    }
    
}
function suma (nums){
    let result = 0;
    for (const num in nums) {
        result += nums[num];
    }
    return result;
}
function resta (nums){
    let result = 2*nums[0];
    for (const num in nums) {
        result -= nums[num];
    }
    return result;

}
function mult (nums){
    let result =1;
    for (const num in nums) {
        result*=nums[num];
    }
    return result;
}
function div (nums){
    let result = nums[0]*nums[0];
    for (const num in nums) {
        result /= nums[num];
    }
    return result;
}
function sqrt (num){
    return Math.sqrt(num);
}
function formatFloats (num){
    if (Number.isInteger(num)) {
        return num;                    
    } else {
        return num.toFixed(3);
    }
}

function askNumbers (){
    let ask = prompt('Introduce numeros para calular');
    while (isNum(format(ask))==='error') {
        ask = prompt('Error\n Pruebe de nuevo')
    }          
    return isNum(format(ask));

}   

function calc(nums){
    console.log(`Se ha introducido : ${nums}`);
    if (nums.length===1) {
        console.log(`La raiz de ${nums[0]} es ${sqrt(nums[0])} `)
    } else {
        console.log(`El resultado de la suma es ${formatFloats(suma(nums))}`);
        console.log(`El resultado de la resta es ${formatFloats(resta(nums))}`);
        console.log(`El resultado de la multiplicacion es ${formatFloats(mult(nums))}`);
        console.log(`El resultado de la division es ${formatFloats(div(nums))}`);
    }
    console.log('----------------------');
}

function calculadora(){
    do {
        calc(askNumbers())
    } while (window.confirm("Quieres hacer otra operacion?"));
    alert("Bye!")
}
calculadora();