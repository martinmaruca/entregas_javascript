function calcularcuota(){
    let monto = +(prompt("INGRSE EL MONTO A FINANCIAR"));
    let cuotas = +(prompt("INGRESE EL NUMERO DE CUOTAS"));
    let interes = +(prompt("INGRESE EL INTERES ANUAL"));
    
      if(monto > 0 && cuotas > 0 && interes > 0){
        let capital = monto / cuotas;  
        let interes_mensual = monto * interes / 100 / cuotas; 
        let cuota = capital + interes_mensual;
        alert("EL MONTO DE LA CUOTA ES:" + cuota);
     }else{        
        alert("Falta ingresar un Número");
    } 

}

calcularcuota(); 

