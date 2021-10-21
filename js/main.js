const Km = parseFloat(prompt('Quanti km devi percorrere?') );

const age = parseInt(prompt('Quanti anni hai?') );


    let ticket = Km * 0.21;

    let finalPrice = ticket * Km;

    if (age < 18){
        ticket -= (ticket * 20) / 100;
    }
    
    else if (age > 65){
        ticket -= (ticket * 40) / 100;
    }


   ticket = ticket.toFixed(2);
