  window.onload = function (){ // Cada vez que se recarge la pagina va a llamar a la funcion
    let who = ['The dog','My grandma','His turtle','My bird']; 
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let whoR = Math.floor(Math.random() * who.length); //Se establece un numero al azar para ingresar a una posicion del arreglo
    let actionR = Math.floor(Math.random() * action.length); //Se establece un numero al azar para ingresar a una posicion del arreglo
    let whatR = Math.floor(Math.random() * what.length); //Se establece un numero al azar para ingresar a una posicion del arreglo
    let whenR = Math.floor(Math.random() * when.length); //Se establece un numero al azar para ingresar a una posicion del arreglo

    document.querySelector("the-excute").innerHTML = who[whoR]+" "+action[actionR]+" "+what[whatR]+" "+when[whenR];
};