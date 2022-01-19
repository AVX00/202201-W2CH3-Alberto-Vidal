let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }

];

function userType() {
    let userType;
    do {
        try {
            userType = prompt('Bienvenido, Introduce el tipo de usuario:\nUSER/ADMIN').toUpperCase();
        } catch (typeError) {
            alert('Bye!');
            return 'bye';
        }
        

    } while (userType != 'USER' && userType != 'ADMIN');
    
    return userType;
}

function greeting(userType) {
    let user;

    if (userType === 'USER') {
        user = prompt('Hola!\nIntoduce tu nombre de usuario:');
        return user;
    } else if (userType === 'bye') {
        return 'bye';
    }else{
        do { } while (prompt('Contraseña:', '1234') != '1234');
        return userType;
    } 

}

function generateId() {
    return flights[flights.length - 1].id + 1;
}

function mkFlight() {
    if (flights.length < 15) {
        let from;
        let to;
        let cost;
        let scale;
        let newFlight;
        do {
            from = prompt('Introduce origen:');
            to = prompt('Introduce destino:');
            do {
                cost = Number(prompt('Introduce precio:')) ;
            } while (!Number(cost));
            
            scale = confirm('Tiene escala(s)?\nOK = si\nCancel = no');
            newFlight = { id: generateId(), to: to, from: from, cost: cost, scale: scale };
        } while (!confirm(`Son correctos los datos\nfrom: ${newFlight.from} | to: ${newFlight.to} | cost: ${newFlight.cost} | scale: ${newFlight.scale}`));
        flights.push(newFlight);

    } else {
        console.log('Se ha alcanzado el maximo numero de vuelos por dia (15)');
        separador();
    };
}

function rmFlight() {
    ShowFlights(flights);
    separador();
    let ids = [];
    for (const flight of flights) {
        ids.push(flight.id);
    }
    let rmId;
    do {
        rmId = Number(prompt(`Introduce el id del vuelo a eliminar:\n${ids}\n(-1 para cancelar)`));
    } while (!ids.includes(rmId) && rmId != -1);

    if (rmId === -1) {
        return
    } else {
        flights.splice(ids.indexOf(rmId), 1)
    }

} 
 


function buy() {
    let maxCost, id;
    let selectedFlights = [];
    let ids=[];
    do {
        maxCost = prompt('Introduce el precio max');
        for (const elem in maxCost) {
            if (maxCost[elem] === '') {
                maxCost.splice(elem, 1);
            }
        }
    } while (!Number(maxCost));
    for (const flight of flights) {
        if (flight.cost <= maxCost) {
            selectedFlights.push(flight);
        }
    }

    if ( selectedFlights.length ) {
        ShowFlights(selectedFlights);
    } else {
        console.log('No hay vuelos con un precio inferior o igual al introducido')
        separador();
        return;
    }
    ids = selectedFlights.map(flight => flight.id)
    
    do {
        id = prompt('Introduce el id del vuelo que quieres comprar:');
        console.log(Number(id));
        
    } while (id!='0'&&(!Number(id))||ids.indexOf(Number(id))<0 || id === '');
    
    if (confirm(`Es este el vuelo que quieres comprar?:\nid:${selectedFlights[ids.indexOf(Number(id))].id.toLocaleString('es-ES', { minimumIntegerDigits: 2 })} | Vuelo con origen: ${selectedFlights[ids.indexOf(Number(id))].from}, y destino: ${selectedFlights[ids.indexOf(Number(id))].to} tiene un coste de ${selectedFlights[ids.indexOf(Number(id))].cost} y ${scale(selectedFlights[ids.indexOf(Number(id))].scale)}`)
    ) {
        return confirm('Gracias por su compra!\nDesea hacer alguna operacion mas?')

    } else return true
    

}


function scale(scale) {
    if (scale) {
        return 'realiza escala(s)'
    } else {
        return 'no realiza escala(s)'
    }
}



function costeMedio(flights) {
    let aux = 0;
    for (const flight of flights) {
        aux += flight.cost;
    }
    
    aux = (aux / flights.length).toFixed(2);
    console.log(`El coste medio de los vuelos es: ${aux}€`);
    separador();
}

function ShowFlights(flights) {
    if (flights.length) {
        for (const flight of flights) {
        console.log(`id:${flight.id.toLocaleString('es-ES', { minimumIntegerDigits: 2 })} | Vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost} y ${scale(flight.scale)}`)
    };
    separador();
    costeMedio(flights);
    } else {
        console.log(`id:${flights.id.toLocaleString('es-ES', { minimumIntegerDigits: 2 })} | Vuelo con origen: ${flights.from}, y destino: ${flights.to} tiene un coste de ${flights.cost} y ${scale(flights.scale)}`)
    separador();
    }
    
    

}

function hasScale() {
    console.log('Los vuelos que realizan escalas son:');
    for (const flight in flights) {
        if (flights[flight].scale) {
            console.log(`Vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}`);
        };
    };
    separador();
}

function last5() {
    console.log('Los ultimos vuelos del dia son: ');
    for (const flight in flights) {
        if (flights.length - flights[flight].id <= 5) {
            console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost} y ${scale(flights[flight].scale)}`)
        };
    };
    separador();
}

function separador() {
    console.log('______________________________________')
}

function menu(user) {
    let select;
    

    if (user === 'ADMIN') {
        select = prompt(`User: ${user}\nQue quieres hacer:\n1: Nuevo vuelo\n2: Eliminar Vuelo\n3: Log out\n`).slice(' ');    
    } else {
        select = prompt(`User: ${user}\nQue quieres hacer:\n1: Ver vuelos disponibles\n2: Ver los vuelos con escala\n3: Ver los ultimos vuelos del dia\n4: Comprar\n5: Log out\n`).slice(' ');
    }
    


    for (const elem in select) {
        if (select[elem] === '') {
            select.splice(elem, 1);
        }
    }
    if (select.length > 1) {
        return 'error';
    } else {
        return select;
    }

}

function airlines() {
    let user, select, running = true;
    
    

    do {
        user = greeting(userType());
        
        if (user === 'ADMIN') {
        do {
        try {
            select = menu(user);
        } catch (TypeError) {
            alert('Bye!')
            return
        }
            switch (Number(select)) {
                case 1:
                    mkFlight();
                    break;
                case 2:
                    rmFlight();
                    break;
                case 3:
                    running = false;
                    break;
                
                default:
                    console.log('Selecciona una opcion valida');
                    break;
            }
        } while (running);
    } else if (user ==='bye') {
        return
    } else {
        do {
        try {
            select = menu(user);
        } catch (TypeError) {
            alert('Bye!')
            return
        }
            switch (Number(select)) {
                case 1:
                    ShowFlights(flights);
                    break;
                case 2:
                    hasScale();
                    break;
                case 3:
                    last5();
                    break;
                case 4:
                    if (!buy()) {
                        return
                    }
                    break;
                case 5:
                    running = false;
                    break;
                
                default:
                    console.log('Selecciona una opcion valida');
                    break;
            }
        } while (running);
    }
    running=true;
    } while (true);
    
    


    



}



airlines()