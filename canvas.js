var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


//Fondo Tablero
pincel.fillStyle ="lightgray";
pincel.fillRect(0, 0, pantalla.width, pantalla.height);
pincel.lineWidth = "10";
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(0,0);
pincel.lineTo(1200,0);
pincel.lineTo(1200,800);
pincel.lineTo(0,800);
pincel.lineTo(0,0);
pincel.stroke();


//---Horca---
function dibujarHorca(){
//barra ahorcado
pincel.fillStyle = "black"; //propiedad
pincel.fillRect(200,70,10,600); //función

pincel.fillStyle = "black"; //propiedad
pincel.fillRect(200, 70, 400, 10); //función

pincel.fillStyle = "black"; //propiedad
pincel.fillRect(600, 70, 10, 85); //función

//Base Triangular
pincel.beginPath();
pincel.lineWidth = "10";
pincel.strokeStyle = "black";
pincel.moveTo(205, 665);
pincel.lineTo(100, 700);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(205, 665);
pincel.lineTo(300, 700);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(100, 700);
pincel.lineTo(300, 700);
pincel.stroke();
}

//Texto al perder
function imprimirPerdiste() {
    var texto = "Fin del Juego!";
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 40px courier";
    pincel.fillText(texto, 840, 300);

};

//Texto al ganar
function imprimirGanaste() {
    var texto = "Ganaste, ";
    pincel.beginPath();
    pincel.fillStyle = "green";
    pincel.font = "bold 40px courier";
    pincel.fillText(texto, 840, 300);
    texto = "Felicidades!";
    pincel.fillText(texto, 820, 340);
    dibujarCaraFeliz();

};

function dibujarCaraFeliz() {
    //Cara feliz
    //sonrisa
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(605, 215, 25, 0, 1 * 3.14);
    pincel.stroke();
    //ojo izquierdo
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(590, 190, 10, 0, 2 * 3.14);
    pincel.fill();
    //ojo derecho
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(625, 190, 10, 0, 2 * 3.14);
    pincel.fill();
};

function dibujarCaraTriste() {

    //ojo izquierdo

    var texto = "X";
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 40px courier";
    pincel.fillText(texto, 575, 195);

    //ojo derecho
    var texto = "X";
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 40px courier";
    pincel.fillText(texto, 610, 195);

    //boca
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(605, 230, 15, 0, 2 * Math.PI);
    pincel.fill();
};


//---Personaje Ahorcado---

//1ro) Cabeza
function dibujarCabeza() {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(605, 210, 60, 0, 2 * 3.14);
    pincel.stroke();
};

//2do) Tronco
function dibujarTronco() {
    pincel.beginPath();
    pincel.lineWidth = "10";
    pincel.strokeStyle = "black";
    pincel.moveTo(605, 265);
    pincel.lineTo(605, 480);
    pincel.stroke();
}

//3ro) Brazo Izquierdo
function dibujarBrazoIzquierdo() {
    pincel.moveTo(605, 350);
    pincel.lineTo(490, 280);
    pincel.stroke();
}

//4to) Brazo Derecho
function dibujarBrazoDerecho() {
    pincel.moveTo(605, 350);
    pincel.lineTo(720, 280);
    pincel.stroke();
};

//5to) Pierna Izquierda
function dibujarPiernaIzquierda() {
    pincel.moveTo(605, 480);
    pincel.lineTo(490, 570);
    pincel.stroke();
};

//6to) Pierna Derecha
function dibujarPiernaDerecha() {
    pincel.moveTo(605, 480);
    pincel.lineTo(720, 570);
    pincel.stroke();
    imprimirPerdiste();
};



//---Letras---

//Imprimir letra incorrecta
var posicionXi = 0;
function imprimirLetraIncorrecta(letraIncorrecta) {
    texto = letraIncorrecta;
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 50px courier";
    pincel.fillText(texto, 840 + posicionXi, 400);
    posicionXi += 50;
}

//Imprimir Letra correcta
var posicionXc = 0;
function imprimirLetraCorrecta(letra) {
    texto = letra;
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.font = "bold 50px courier";
    pincel.fillText(texto, 400 + posicionXc, 700);
    posicionXc += 50;
}
//Imprimir guion

var posicionXg = 0;
function imprimirGuiones() {
    texto = "_";
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.font = "bold 50px courier";
    pincel.fillText(texto, 400 + posicionXg, 700);
    posicionXg += 50;
};


