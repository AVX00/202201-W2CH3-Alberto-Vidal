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

function greeting() {
    let user = prompt('Hola!\nIntoduce tu nombre de usuario:');
    return user;
}

function scale(scale) {
    if (scale) {
        return 'realiza escala(s)'
    } else {
        return 'no realiza escala(s)'
    }
}


function costeMedio() {
    let aux = 0;
    for (const flight in flights) {
        aux += flights[flight].cost;
    }
    return (aux / flights.length).toFixed(2);
}

function ShowFlights() {
    for (const flight in flights) {
        console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost} y ${scale(flights[flight].scale)}`)
    };
    console.log(`El coste medio de los vuelos es: ${costeMedio()}€`)
}

function hasScale() {
    console.log('Los vuelos que realizan escalas son:');
    for (const flight in flights) {
        if (flights[flight].scale) {
            console.log(`Vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost}`);
        }
    }
}

function last5() {
    console.log('Los ultimos vuelos del dia son: ');
    for (const flight in flights) {
        if (flights.length - flights[flight].id <= 5) {
            console.log(`El vuelo con origen: ${flights[flight].from}, y destino: ${flights[flight].to} tiene un coste de ${flights[flight].cost} y ${scale(flights[flight].scale)}`)
        }
    }
}

function menu(user) {
    let select
    
        select = prompt(`User: ${user}\nQue quieres hacer:\n1: Ver vuelos disponibles\n2: Ver los vuelos con escala\n3:Ver los ultimos vuelos del dia\n`).slice(' ');
    
    
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
    let user = greeting();
    
    let select;
    do {
        select = menu(user);
        
        if (4 > select > 0 && Number.isInteger(Number(select))) {
            
            switch (Number(select)) {
                case 1:
                    ShowFlights();
                    break;
                case 2:
                    hasScale();
                    break;
                case 3:
                    last5();
                    break;
                
                default:
                    break;
            }
        }
        

    } while (true);



}


airlines()


