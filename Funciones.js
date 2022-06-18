//Tableros
var tablero = [];
var tableroVacio = [];
//Otras variables
var Resultado;
var timeRemaining;
var vidas;
vidas = localStorage.getItem("vidasLS");
var timer;
timer = localStorage.getItem("timerLS");

/**
 * La función establece que si la Dificultad no está establecida se defina como normal
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

    for (let i = 0; i < 81; i++) {
        tablero[i] = 0;
    }

    var Dif, ComprobarNumero=0, PosicionCelda=0, Cuadrante=0, Contador=0, MismaPosicion=0, Fila, Columna, Random, contador=0, contador2=0, contador3=0;
    do
    {
        if (MismaPosicion == PosicionCelda)
        {
            contador ++;
            if (contador > 25)
            {
                for (let i = 0; i < 81; i++)
                {
                    tablero[i] = 0;
                }
                PosicionCelda = 0;
                Cuadrante = 0;
                ComprobarNumero = 0;
            }
        }
        else
        {
            contador = 0;
        }

        MismaPosicion = PosicionCelda;

        tablero[PosicionCelda] = Math.floor(Math.random() * (10 - 1)) + 1;

        ComprobarNumero = tablero[PosicionCelda];

        Cuadrante = PosicionCelda;

        /*
        1  2  3    4  5  6    7  8  9
        10 11 12   13 14 15   16 17 18
        19 20 21   22 23 24   25 26 27

        28 29 30   31 32 33   34 35 36
        37 38 39   40 41 42   43 44 45
        46 47 48   49 50 51   52 53 54

        55 56 57   58 59 60   61 62 63
        64 65 66   67 68 69   70 71 72
        73 74 75   76 77 78   79 80 81
        */

        if (Cuadrante < 27) {
            while (Cuadrante > 8) {
                Cuadrante -= 9;
            }
            while (Cuadrante != 0 && Cuadrante != 3 && Cuadrante != 6) {
                Cuadrante --;
            }
        }
        else if (Cuadrante < 54) {
            while (Cuadrante > 35) {
                Cuadrante -= 9;
            }
            while (Cuadrante != 27 && Cuadrante != 30 && Cuadrante != 33) {
                Cuadrante --;
            }
        }
        else {
            while (Cuadrante > 62) {
                Cuadrante -= 9;
            }
            while (Cuadrante != 54 && Cuadrante != 57 && Cuadrante != 60) {
                Cuadrante --;
            }
        }

        Fila = PosicionCelda;
        while (Fila % 9 != 0) {
            Fila --;
        }

        Columna = PosicionCelda;
        while (Columna > 8) {
            Columna -= 9;
        }

        contador2 = 0;

        for (let i = Cuadrante; i < Cuadrante + 21; i++) {
            if (contador2 == 3) {
                contador2 = 0;
                i += 6;
            }
            if (ComprobarNumero == tablero[i] && PosicionCelda != i) {
                ComprobarNumero = 0;
                i = Cuadrante + 21;
            }
            contador2 ++;
        }

        if (ComprobarNumero != 0)
        {
            for (let i = Fila; i < Fila + 9; i++)
            {
                if (ComprobarNumero == tablero[i] && PosicionCelda != i)
                {
                    ComprobarNumero = 0;
                    i = Fila + 9;
                }
            }
        }

        if (ComprobarNumero != 0)
        {
            for (let i = Columna; i < Columna + 72; i += 9)
            {
                if (ComprobarNumero == tablero[i] && PosicionCelda != i)
                {
                    ComprobarNumero = 0;
                    i = Columna + 72;
                }
            }
        }
        
        if (ComprobarNumero != 0)
        {
            PosicionCelda += 1;
        }
        else
        {
            tablero[PosicionCelda] = 0;
        }
    } while (PosicionCelda < 81);

    for (let i = 0; i < 81; i++) {
        tableroVacio[i] = tablero[i];
    }
    
    if (Dificultad == "facil") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Facil";
        Dif = 3;
    }
    if (Dificultad == "normal") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Normal";
        Dif = 5;
    }
    if (Dificultad == "dificil") {
        document.getElementById("Mostrar_Dificultad").innerHTML = "Dificultad | Dificil";
        Dif = 7;
    }

    document.getElementById("Mostrar_Vidas").innerHTML = "Vidas | " + vidas;

    for (let i = 0; i < 81; i += 9) {
        contador3 = 0;
        do {
            Random = Math.floor(Math.random() * ((i + 9) - i)) + i;

            if (tableroVacio[Random] == 0) {
                contador3 --;
            }
            else {
                tableroVacio[Random] = 0;
            }

            contador3 ++;
        } while (contador3 < Dif);
    }

    for (let i = 0; i < 81; i++) {
        if (tableroVacio[i] != 0) {
            document.getElementsByClassName("celda")[i].value = tablero[i];
            document.getElementsByTagName("input")[i].disabled = true;
        }
    }
}

/**
 * Esta funcion se encarga de verificar los numeros ingresados al tablero e indicar si el numero ingresado fue correcto o incorrecto, en caso de ser incorrecto vacia la celda y se encarga de restar las vidas 
 * @method Tablero
 * @param {number} i - Este parametro toma el id de la celda seleccionada para luego ingresar un numero en su posicion
 * @param {number} num - Este parametro toma el valor de la celda seleccionada para luego ingresar un numero cambiando su valor
 * @return Devuelve el numero ingresado en caso de ser acertado, en caso contrario vacia la celda
 */
function Tablero(i, num) {
    var Terminar = 0;
    var Dificultad;
    Dificultad = localStorage.getItem("dificultadLS");

    i--;

    tableroVacio[i] = num;
    if (tableroVacio[i] == tablero[i]) {
        for (let j = 0; j < 81; j++) {
            document.getElementsByTagName("input")[j].disabled = true;
        }
        document.getElementsByClassName("celda")[i].classList.add("Correcto");
        setTimeout(function () {
            document.getElementsByClassName("celda")[i].classList.remove("Correcto");
            for (let j = 0; j < 81; j++) {
                if (tableroVacio[j] != tablero[j]) {
                    document.getElementsByTagName("input")[j].disabled = false;
                }
            }
        }, 1000);
    } else {
        for (let j = 0; j < 81; j++) {
            document.getElementsByTagName("input")[j].disabled = true;
        }
        document.getElementsByClassName("celda")[i].classList.add("Incorrecto");
        setTimeout(function () {
            document.getElementsByClassName("celda")[i].classList.remove("Incorrecto");
            document.getElementsByClassName("celda")[i].value = "";
            for (let j = 0; j < 81; j++) {
                if (tableroVacio[j] != tablero[j]) {
                    document.getElementsByTagName("input")[j].disabled = false;
                }
            }
        }, 1000);
        if (vidas != "ilimitado") {
            vidas--;
        }
    }

    if (vidas != "ilimitado") {
        document.getElementById("Mostrar_Vidas").innerHTML = "Vidas | " + vidas;
    }

    if (vidas == 0) {
        Terminar = 1;
        Resultado = "Perdio";
    } else {
        for (let j = 0; j < 81; j++) {
            if (tableroVacio[j] == tablero[j]) {
                Terminar = 1;
                Resultado = "Gano";
            } else {
                Terminar = 0;
                j = 81;
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

    setInterval(() => {
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
        window.open("jugar-2.html");
    }
}


function valideKey(evt) {

    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 13){ //Enter
        return true;
    } else if(code>=48 && code<=57) { // numero
        return true;
    } else{ // otra tecla
        alert("Solo puede ingresar numeros");
        return false;
    }
}