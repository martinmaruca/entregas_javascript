
// a)

// IF - ELSE

let entrada = prompt("DE QUE EQUIPO DE FUTBOL ERES HINCHA? 1-BOCA 2-RIVER");
if ((entrada.toLowerCase() === "river")) {
    alert("SE NOTA QUE SABES DE FUTBOL");
   } else {
    alert("LO SIENTO POR VOS!!!");
   } 

// IF -ELSE IF - ELSE

    
let hora = prompt("QUE HORA ES?");

if (hora >= 0 && hora <= 6) {
      alert("Déjame dormir");
    } else if (hora >= 6 && hora <= 11) {
      alert("Buenos días");
    } else if (hora >= 12 && hora <= 19) {
      alert("Buenas tardes");
    } else {
      alert("Buenas noches");
    }

// b)

//bucle while

let i = 1;

console.log("---BUCLE WHILE---");

while(i < 11) {
    console.log(i);
    i++
}  

// bucle do while

console.log("---BUCLE DO WHILE---");

let contador = 0;

do{
    console.log(contador);
    contador++
}while(contador < 11); 


// bucle for

console.log("---BUCLE FOR---");

for( let z = 0; z<11; z++) {
    console.log(z);
}   




