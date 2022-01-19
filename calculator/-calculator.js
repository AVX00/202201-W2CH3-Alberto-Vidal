const calculadora = () =>{
    var pop, intro =[];
    var firsTime =true;
    var num;

    do{
        num = true;
        firsTime !=false? pop = window.prompt("Calculadora: Introduce uno o dos numeros"):  pop = window.prompt("ERROR: introduce uno o dos numeros");
        intro = pop.split(" ");
        firsTime=false;
        for(elem in intro){
            if(isNaN(intro[elem])){num=false;}
        }
    }while(intro.length>2 || intro[0]==="" || num === false)
    
    switch (intro.length){
        case 1:
            let result =Math.sqrt(intro[0]) ;
            if(Number.isInteger(result)){
                alert(`La raiz cuadrada de ${intro[0]} es ${result}`);
            }else{
                alert(`La raiz cuadrada de ${intro[0]} es ${result.toFixed(3)}`);
            }
            
            break
        case 2:
            let results = [Number(intro[0])+Number(intro[1]),intro[0]-intro[1],intro[0]*intro[1],intro[0]/intro[1]];
            let out ='';
            for(let result in results){
                if(!Number.isInteger(results[result])){
                    
                    results[result] = results[result].toFixed(3)
                }
            }
            alert(`El resultado de ${intro[0]} + ${intro[1]} es: ${results[0]}
El resultado de ${intro[0]} - ${intro[1]} es: ${results[1]}
El resultado de ${intro[0]} * ${intro[1]} es: ${results[2]}
El resultado de ${intro[0]} / ${intro[1]} es: ${results[3]}`);

    }
    
}
calculadora();