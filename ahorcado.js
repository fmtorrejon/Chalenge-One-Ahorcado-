

var baseDePalabras = ["MURCIELAGO", "RELAMPAGO", "ORUGA", "VAMPIRO","ELEVADOR","ALMENDRA","DINOSAURIO","MOLINO","ESCUADRA","HIPOTENUSA","AEROPUERTO","INUNDACION","EXCLUSIVO","SINONIMO","ANTAGONICO","PERCHERO","ARMARIO","ELEFANTE","JIRAFA","TRINEO","CLAUSTRO"];
var palabra = "";
var finDeJuego=false;
const filtro = /[^A-Z !Ñ !!]+/

//Captura de la palabra ingresada por el usuario.
var palabraIngresada = document.querySelector("input#input-nueva-palabra");

//Captura de boton AGREGAR PALABRA.
var boton = document.querySelector("button#nueva-palabra");

var letrasIncorrectas = [];
var letrasIngresadas = [];
var letraEncontrada = false;
var palabraAleatoriaArray=[""];
var palabraSecreta = [palabraAleatoriaArray.length];
var letrasEncontradas = 0;
var error = 0;
var letrasEncontradas = 0;

var botonIniciar = document.querySelector("button#iniciar-juego");

//Agregar palabra a la base de palabras
function agregarPalabra(palabraIngresada) {
    if (palabraIngresada.match(filtro)) { 
        alert("¡No ingresar letras minúsculas, con acentos, caractéres especiales o números!") 
    
       
    } 
    else { console.log("Good job!!")
        baseDePalabras.push(palabraIngresada.toUpperCase())
        alert("Palabra agregada!");}

}


//Boton que ejecuta la acción de agregar la palabra
boton.addEventListener('click', function () {
    agregarPalabra(palabraIngresada.value);
    
});

//Escoger palabra aleatoria
function sortearPalabraAleatoria(){
    
    var palabraAleatoria = baseDePalabras[Math.floor(Math.random() * baseDePalabras.length)];
           
    return palabraAleatoria;
        
}

palabraAleatoria = sortearPalabraAleatoria();
console.log(palabraAleatoria);


//Ejecuta la acción del boton INICIAR JUEGO
botonIniciar.addEventListener('click', function(){
    sortearPalabraAleatoria();
    palabraAleatoria = sortearPalabraAleatoria();
    dibujarHorca();
    palabraAleatoriaArray = palabraAleatoria.split([""]);
        
    for(i=0; i< palabraAleatoriaArray.length;i++){
        imprimirGuiones();  
    }
    //Reemplaza todas las posiciones del Array por un Guion.
    for (i = 0; i < palabraAleatoriaArray.length; i++) {
        palabraSecreta[i] = "_";
    }
    console.log(palabraSecreta);

});

// Entrada del usuario en el input solo permite letras del alfabeto

function permitirSoloLetrasAlfabeto(event) {
    if (finDeJuego) {location.reload();}
    else{
        var charCode = event.keyCode;
        var letra = String.fromCharCode(charCode);
        if ((charCode > 64 && charCode < 91)){
            compararLetraIngresada(event);
            return true;
        
        }
        else { return false;}
    }
}



function dibujarAhorcado(){
    error++;
    if (error == 1) {
        dibujarCabeza();}
    if(error==2){dibujarTronco();}
    if(error==3){dibujarBrazoIzquierdo();}
    if(error==4){dibujarBrazoDerecho();}
    if(error==5){dibujarPiernaIzquierda();}
    if(error==6){dibujarPiernaDerecha();
                dibujarCaraTriste();
                imprimirPerdiste();
                alert("GAME OVER!! Clickee en <INICIAR JUEGO> para reiniciar");
                finDeJuego=true;
                //location.reload();
    }
 
}

//Buscar en el array 
function contarLetrasEncontradas() {
    letrasEncontradas++;
    if (letrasEncontradas == palabraAleatoriaArray.length) {
        dibujarCabeza();
        dibujarCaraFeliz();
        imprimirGanaste();
        for(i=0;i<palabraAleatoriaArray.length;i++){
            imprimirLetraCorrecta(palabraSecreta[i])
        }
        alert("YOU WIN!! Clickee en <INICIAR JUEGO> para reiniciar");
        finDeJuego=true;
        //location.reload();

    }
}

function compararLetraIngresada(event){
    console.log("Comparando...");
    var letra = event.keyCode;
    letra = String.fromCharCode(letra).toUpperCase();
    letraEncontrada = palabraAleatoriaArray.includes(letra);
    
    if(letraEncontrada==false){
        if (letrasIncorrectas.includes(letra)) {alert("Ya ingresó esa letra")}
        else{
            letrasIncorrectas.push(letra);
            console.log("letras incorrectas: " + letrasIncorrectas);
            imprimirLetraIncorrecta(letra);
            dibujarAhorcado();}
        


    }
   
    if(letraEncontrada){
        if (palabraSecreta.includes(letra)) { alert("Ya ingresó esa letra") } 
        else{
    //Buscar letra en el array
            for(posicion=0; posicion < palabraAleatoriaArray.length; posicion++){
                if (palabraAleatoriaArray[posicion] == letra){
                    palabraSecreta[posicion]=letra;
                    contarLetrasEncontradas();
                } 
            
                        
            }
        }

    }

document.getElementById("palabraSecreta").innerHTML = palabraSecreta.join(" ");

contarLetrasEncontradas;
          
    
}







