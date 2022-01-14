
let numero = parseInt(prompt("Ingrese un número del 1 al 10"))
let valorIngresado = numero
let numero2 = 0

if (numero <= 10){
for(numero = numero; numero <= 10; numero++){
    alert(numero)
}
    alert("Bienvenide")

    let nombre = prompt("Diga su nombre")
    while(nombre){
        alert("Hola " + nombre + ", llegaste al 10 en " + (10 - valorIngresado) + " clicks")
    }

} else{ 
    alert("dato inválido, ingrese un número del 1 al 10");
    
    let numero2 = parseInt(prompt("Ingrese un numero del 1 al 10"));
    nuevoValor = numero2

    for(numero2 = numero2; numero2 <= 10; numero2++){

    alert(numero2)
    
    }
    alert("Bienvenide")

    let nombre = prompt("Diga su nombre")
    while(nombre){
        alert("Hola " + nombre + ", te confundiste, pero igual llegaste al 10 en " + (10 - nuevoValor) + " clicks")
}

}


