let contador;
const NUMBER=[];

function getNumber( numeroIngresado){
    for (contador=0;contador<3; contador++){
        NUMBER.push(prompt("Ingrese un número"));
    } 
    console.log(NUMBER);
    }

    function comprobacion(){
        if(NUMBER[0]===NUMBER[1]&& NUMBER[0]===NUMBER[2]&&NUMBER[1]===NUMBER[2]){
            document.write(`Los números ${NUMBER} : son iguales`);
        }else{
            document.write(`Orden asendente de los números: ${Number.sort((a,b)=>a-b)}`);
            document.write(`Orden desendente de los números: ${Number.sort((a,b)=>a-b)}`);
        }
       
    }

    getNumber();
    comprobacion();
