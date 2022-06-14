//Tableros
var TableroFacil = [5, 9, 3, 7, 8, 2, 4, 6, 1, 1, 8, 7, 6, 4, 9, 5, 2, 3, 6, 4, 2, 3, 5, 1, 8, 7, 9, 9, 1, 8, 5, 6, 7, 2, 3, 4, 3, 2, 5, 9, 1, 4, 6, 8, 7, 4, 7, 6, 8, 2, 3, 1, 9, 5, 2, 3, 1, 4, 9, 8, 7, 5, 6, 8, 6, 9, 1, 7, 5, 3, 4, 2, 7, 5, 4, 2, 3, 6, 9, 1, 8];
var TableroFacilVacio = [5, 9, 3, 0, 0, 0, 4, 6, 1, 1, 0, 7, 6, 4, 0, 5, 0, 3, 0, 4, 2, 3, 0, 1, 8, 0, 9, 9, 0, 8, 0, 6, 0, 2, 3, 4, 3, 2, 5, 0, 0, 4, 0, 8, 7, 4, 0, 6, 8, 2, 3, 1, 0, 0, 0, 3, 1, 4, 0, 8, 0, 5, 6, 8, 6, 9, 1, 0, 5, 3, 0, 0, 7, 5, 0, 2, 0, 6, 9, 1, 0];
var TableroNormal = [5, 1, 3, 2, 4, 7, 8, 9, 6, 6, 2, 8, 9, 5, 1, 4, 7, 3, 7, 9, 4, 3, 6, 8, 2, 5, 1, 3, 7, 9, 8, 1, 6, 5, 4, 2, 2, 4, 5, 7, 9, 3, 1, 6, 8, 1, 8, 6, 5, 2, 4, 9, 3, 7, 8, 6, 1, 4, 7, 5, 3, 2, 9, 9, 5, 7, 1, 3, 2, 6, 8, 4, 4, 3, 2, 6, 8, 9, 7, 1, 5];
var TableroNormalVacio = [0, 1, 0, 0, 4, 0, 0, 9, 6, 6, 0, 0, 9, 0, 1, 0, 7, 0, 0, 0, 4, 0, 0, 8, 2, 0, 1, 0, 7, 0, 8, 0, 0, 5, 0, 2, 2, 0, 5, 7, 0, 0, 0, 0, 8, 0, 8, 0, 0, 2, 0, 9, 3, 0, 0, 6, 0, 4, 0, 5, 0, 2, 0, 9, 0, 7, 0, 0, 2, 0, 8, 0, 0, 3, 0, 6, 0, 9, 0, 0, 5];
var TableroDificil = [6, 4, 8, 1, 2, 5, 3, 9, 7, 7, 5, 3, 8, 9, 6, 1, 4, 2, 2, 1, 9, 7, 3, 4, 5, 8, 6, 9, 7, 2, 3, 1, 8, 4, 6, 5, 8, 6, 4, 5, 7, 2, 9, 3, 1, 5, 3, 1, 6, 4, 9, 2, 7, 8, 1, 9, 7, 2, 6, 3, 8, 5, 4, 3, 8, 6, 4, 5, 1, 7, 2, 9, 4, 2, 5, 9, 8, 7, 6, 1, 3];
var TableroDificilVacio = [6, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 8, 0, 9, 0, 0, 0, 0, 0, 0, 0, 5, 0, 6, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 1, 0];
//Otras variables
var Resultado;
var timeRemaining;
var vidas;
vidas = localStorage.getItem("vidasLS");
var timer;
timer = localStorage.getItem("timerLS");

/**
 * La funcion establece que si la Dificultad no esta establecida se defina como normal
 * @method Dificultad
 * @param {string} dificultad - Almacena el valor de la dificultad que puede ser: facil, normal o dificil
 * @return retorna un {string} en este caso "normal" el cual se iguala a dificultad y hace que tome ese valor. Tambien le da el valor de dificultad a "dificultadLS" para luego usarla.
 */
function Dificultad(dificultad) {
    if (dificultad == undefined) {
        dificultad = "normal";
    }
    localStorage.setItem("dificultadLS", dificultad);
}

/**
 * La funcion establece que si las vidas no estan establecidas se definan con el valor 10
 * @method Vidas
 * @param {string} vidas - Almacena el valor de las vidas que puede ser: ilimitado, 5 , 10 , 15
 * @return retorna un {string} el cual le da un valor de 10 a las vidas
 */
function Vidas(vidas) {
    if (vidas == undefined) {
        vidas = 10;
    }
    localStorage.setItem("vidasLS", vidas);
}

/**
 * Esta funcion muestra el tablero indicado segun la dificultad. Tambien permite que se muestre en los casilleros la dificultad y las vidas elegidas por el usuario.
 * @method CrearSudoku
 * @param (var) Dificultad - (llamada dentro de la funcion) este parametro toma el valor de dificultadLS que fue anteriormente establecido en la funcion Dificultad()
 * @param (var) vidas - El id de vidas toma el valor establecido en la funcion Vidas()
 * @return Devuelve los valores de las vidas y dificultad para asi mostrar el tablero indicado segun la dificultad y tambien indicar la cantidad de vidas que el jugador posee.
 */
function CrearSudoku() {
    var Dificultad;
    Dificultad = localStorage.getItem("dificultadLS");

    if (Dificultad == "facil") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Facil";
    }
    if (Dificultad == "normal") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Normal";
    }
    if (Dificultad == "dificil") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Dificil";
    }

    document.getElementById("Mostrar_Vidas").innerHTML = "Vidas | " + vidas;

    for (let i = 0; i < 81; i++) {
        if (Dificultad == "facil") {
            if (TableroFacilVacio[i] != 0) {
                document.getElementsByClassName("celda")[i].value = TableroFacilVacio[i];
                document.getElementsByTagName("input")[i].disabled = true;
            }
        }
        if (Dificultad == "normal") {
            if (TableroNormalVacio[i] != 0) {
                document.getElementsByClassName("celda")[i].value = TableroNormalVacio[i];
                document.getElementsByTagName("input")[i].disabled = true;
            }
        }
        if (Dificultad == "dificil") {
            if (TableroDificilVacio[i] != 0) {
                document.getElementsByClassName("celda")[i].value = TableroDificilVacio[i];
                document.getElementsByTagName("input")[i].disabled = true;
            }
        }
    }
}

/**
 * Descripción de que hace la función
 * @method Tablero
 * @param {number} i - Explicación de que valor almacena ParámetroA
 * @param {number} num - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */
function Tablero(i, num) {
    var Terminar = 0;
    var Dificultad;
    Dificultad = localStorage.getItem("dificultadLS");

    i--;

    if (Dificultad == "facil") {
        TableroFacilVacio[i] = num;
        if (TableroFacil[i] != TableroFacilVacio[i]) {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Incorrecto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Incorrecto");
                document.getElementsByClassName("celda")[i].value = "";
                for (let j = 0; j < 81; j++) {
                    if (TableroFacilVacio[j] != TableroFacil[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
            vidas--;
        } else {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Correcto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Correcto");
                for (let j = 0; j < 81; j++) {
                    if (TableroFacilVacio[j] != TableroFacil[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
        }
    }
    if (Dificultad == "normal") {
        TableroNormalVacio[i] = num;
        if (TableroNormal[i] != TableroNormalVacio[i]) {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Incorrecto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Incorrecto");
                document.getElementsByClassName("celda")[i].value = "";
                for (let j = 0; j < 81; j++) {
                    if (TableroNormalVacio[j] != TableroNormal[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
            vidas--;
        } else {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Correcto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Correcto");
                for (let j = 0; j < 81; j++) {
                    if (TableroNormalVacio[j] != TableroNormal[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
        }
    }
    if (Dificultad == "dificil") {
        TableroDificilVacio[i] = num;
        if (TableroDificil[i] != TableroDificilVacio[i]) {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Incorrecto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Incorrecto");
                document.getElementsByClassName("celda")[i].value = "";
                for (let j = 0; j < 81; j++) {
                    if (TableroDificilVacio[j] != TableroDificil[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
            vidas--;
        } else {
            for (let j = 0; j < 81; j++) {
                document.getElementsByTagName("input")[j].disabled = true;
            }
            document.getElementsByClassName("celda")[i].classList.add("Correcto");
            setTimeout(function () {
                document.getElementsByClassName("celda")[i].classList.remove("Correcto");
                for (let j = 0; j < 81; j++) {
                    if (TableroDificilVacio[j] != TableroDificil[j]) {
                        document.getElementsByTagName("input")[j].disabled = false;
                    }
                }
            }, 1000);
        }
    }

    document.getElementById("Mostrar_Vidas").innerHTML = "Vidas | " + vidas;

    if (vidas == 0) {
        Terminar = 1;
        Resultado = "Perdio";
    } else {
        for (let j = 0; j < 81; j++) {
            if (Dificultad == "facil") {
                if (TableroFacilVacio[j] == TableroFacil[j]) {
                    Terminar = 1;
                    Resultado = "Gano";
                } else {
                    Terminar = 0;
                    j = 81;
                }
            }
            if (Dificultad == "normal") {
                if (TableroNormalVacio[j] == TableroNormal[j]) {
                    Terminar = 1;
                    Resultado = "Gano";
                } else {
                    Terminar = 0;
                    j = 81;
                }
            }
            if (Dificultad == "dificil") {
                if (TableroDificilVacio[j] == TableroDificil[j]) {
                    Terminar = 1;
                    Resultado = "Gano";
                } else {
                    Terminar = 0;
                    j = 81;
                }
            }
        }
    }

    if (Terminar == 1) {
        endgame();
    }
}

/**
 * La funcion establece que si el tiempo no esta establecido se defina como 15_min
 * @method Tiempo
 * @param {string} tiempo - almacena los valores que se eligen para el tiempo que puede ser: ilimitado, 10_min, 15_min, 20_min, 25_min
 * @return retorna un {string} en este caso "15_min" el cual se iguala a tiempo y hace que tome ese valor. Tambien le da el valor de dificultad a "timerLS" para luego usarla.
 */
function Tiempo(tiempo) {
    if (tiempo == undefined) {
        tiempo = "15_min";
    }
    localStorage.setItem("timerLS", tiempo);
}

/**
 * Esta funcion es un temporizador en segundos. Esta muestra el tiempo restante en un recuadro por encima del tablero.
 * @method starTimer
 * @param (var) timer - Utiliza el var timer que tiene los valores de "timerLS" para establecer los segundos del temporizador
 * @return retorna un valor en segundos para usarlo en el timeRemaining. Si timeRemaining = 0 aqui la funcion hace Resultado = "Perdio" y llama a la funcion endgame().
 */
function starTimer() {
    if (timer == "10_min") {
        timeRemaining = 600;
    } else if (timer == "15_min") {
        timeRemaining = 900;
    } else if (timer == "20_min") {
        timeRemaining = 1200;
    } else if (timer == "25_min") {
        timeRemaining = 1500;
    } else {
        timeRemaining = "ilimitado";
    }
    if (timeRemaining != "ilimitado") {
        //Empieza el temporizador
        document.getElementById("timer").innerHTML = timeConversion(timeRemaining);
        //Actualizar el temporizador cada 1 segundo
        timer = setInterval(function () {
            if (timeRemaining == 0) {
                Resultado = "Perdio"
                endgame();
                document.getElementById("timer").innerHTML = timeConversion(timeRemaining);
            } else {
                timeRemaining--;
                document.getElementById("timer").innerHTML = timeConversion(timeRemaining);
            }
        }, 1000)
    } else {
        document.getElementById("timer").innerHTML = "Tiempo | Ilimitado";
    }
}

/**
 * Transforma los segundos de la funcion starTimer() a minutos:segundos
 * @method timeConversion
 * @param {number} time - Almacena los valores del timeRemaining que es quien almacena los segundos en la funcion starTimer()
 * @return Retorna al Id "Timer" el tiempo pasado a minutos:segundos.
 */
function timeConversion(time) {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return document.getElementById("timer").innerHTML = "Tiempo | " + minutes + ":" + seconds;
}

/**
 * Elimina el tablero y crea el canvas mostrando una animacion diciendo "GANASTE" o "PERDISTE". Tambien pone el tiempo en 00:00.
 * @method endgame
 * @return retorna el canvas con una animacion para el texto.
 */
function endgame() {
    //Creamos el canvas
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    var contador = 20;
    var contador2 = 180;

    canvas.width = 1000;
    canvas.height = 300;

    var animacion = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgb(255, 145, 105)";
        ctx.strokeStyle = "rgb(255, 76, 41)";

        if (Resultado == "Gano") {
            ctx.fillText("GANASTE", canvas.width / 2, canvas.height / 2);
            ctx.strokeText("GANASTE", canvas.width / 2, canvas.height / 2);
            ctx.shadowColor = "rgb(88, 88, 88, 0.6)";
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowBlur = 3;
        } else {
            ctx.fillText("PERDISTE", canvas.width / 2, canvas.height / 2);
            ctx.strokeText("PERDISTE", canvas.width / 2, canvas.height / 2);
            ctx.shadowColor = "rgb(88, 88, 88, 0.6)";
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowBlur = 3;
        }

        if (contador <= 180) {
            ctx.font = contador + "px Arial";
            contador += 0.5;
        } else {
            if (contador2 >= 20) {
                ctx.font = contador2 + "px Arial";
                contador2 -= 0.5;
            }
        }

        if (contador2 < 20) {
            contador2 = 180;
            contador = 20;
        }

    }, 5);

    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Tiempo | 00:00";
    for (let i = 0; i < 81; i++) {
        document.getElementsByTagName("input")[i].disabled = true;
    }

    document.getElementsByClassName("tablero")[0].classList.add("Terminar");
    document.getElementsByClassName("canvas")[0].classList.add("mostrarCanvas");
}

/**
 * Esta funcion bloquea el ingreso de numeros, espacios y otras teclas que no sean de letras en el input del nombre. De esta manera solo deja ingresar las letras.
 * @method txNombres
 * @return Si se toca una tecla que no es de una letra retorna un alert diciendo que solo se pueden ingresar letras
 */
function txNombres() {
    //Lee en que tecla se hace click
    if ((event.keyCode = 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)) {
        alert("Solo puede ingresar letras");
    }
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)) {
        event.returnValue = false;
    }
}

/**
 * Esta funcion hace que cuando se quiera seguir a la pagina "jugar-2.html" pero el campo de "nombre" esta vacio de una alerta de que falta completar este campo.
 * @method BotonJugar
 * @param (string) id - (llamado dentro de la funcion) El id del nombre para ver si valor esta vacio.
 * @return retorna un alert diciendo que debe ingresar un nombre.
 */
function BotonJugar() {
    if (document.getElementById("nombre").value == "") {
        alert("Tiene que ingresar un nombre");
    } else {
        url = "jugar-2.html";
        window.open(url);
    }
}