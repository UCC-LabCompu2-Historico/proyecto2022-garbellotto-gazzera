/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function Dificultad() {
    var dificultad;
    dificultad = document.getElementById('radio_facil').value;
    localStorage.setItem("dificultad", Dificultad);
}

function CrearSudoku(){
    dificultad = localStorage.getItem("dificultad");
    alert(dificultad);

    /*var ComprobarNumero=0, 
    PosicionCelda=0,ComprobarColumna,ComprobarFila,
    Cuadrado=0, aux=0, Filas=10,
    Contador=0, MismaPosicion=0, Random, num1, num2=0, dificultad;
    var Celdas=80;
    var Tablero = [Celdas];
    dificultad = localStorage.getItem("Dificultad");
    do
    {
        if (MismaPosicion == PosicionCelda)
        {
            Contador += 1;
            if (Contador > 25)
            {
                for (let i = 0; i < Celdas; i++)
                {
                    Tablero[i] = 0;
                    PosicionCelda = 0;
                    Cuadrado = 0;
                    ComprobarNumero = 0;
                }
            }
        }
        else
        {
            Contador = 0;
        }

        MismaPosicion = PosicionCelda;

        Tablero[PosicionCelda] = Math.floor(Math.random () * 10) + 1;

        ComprobarNumero = Tablero[PosicionCelda];
        ComprobarColumna = PosicionCelda;
        ComprobarFila = PosicionCelda;
        Cuadrado = PosicionCelda;

        if (Cuadrado < 27) {
            while (Cuadrado > 8) {
                Cuadrado -= 9;
            }
            if (Cuadrado > 5) {
                Cuadrado = 6;
            }
            else if (Cuadrado > 2) {
                Cuadrado = 3;
            }
            else{
                Cuadrado = 0;
            }
        }
        else if (Cuadrado < 54) {
            while (Cuadrado > 35) {
                Cuadrado -= 9;
            }
            if (Cuadrado > 32) {
                Cuadrado = 33;
            }
            else if (Cuadrado > 29) {
                Cuadrado = 30;
            }
            else{
                Cuadrado = 27;
            }
        }
        else{
            while (Cuadrado > 62) {
                Cuadrado -= 9;
            }
            if (Cuadrado > 59) {
                Cuadrado = 60;
            }
            else if (Cuadrado > 56) {
                Cuadrado = 57;
            }
            else{
                Cuadrado = 54;
            }
        }
        aux = Cuadrado;

        for (let i = aux; i < Cuadrado + 3;)
        {   
            if (ComprobarNumero == Tablero[i])
            {
                if (PosicionCelda == i){}
                else
                {
                    i = (Cuadrado+3);
                    ComprobarNumero = 0;
                }
            }
            Contador ++;
            if (Contador == 3) {
                Contador = 0;
                Cuadrado += 7;
                i += 7;
            }
            if (Cuadrado == (aux+20)) {
                i = (Cuadrado+3);
            }
        }
        if (ComprobarNumero > 0)
        {
            while (ComprobarColumna > 8) {
                ComprobarColumna -= 9;
            }
            for (let i = ComprobarColumna; i < Celdas;)
            {
                if (ComprobarNumero == Tablero[i])
                {
                    if (PosicionCelda == i){}
                    else
                    { 
                        i = Celdas;
                        ComprobarNumero = 0;
                    }
                }
                i += 9;
            }
        }
        if (ComprobarNumero > 0)
        {
            while (ComprobarFila%9 != 0) {
                ComprobarFila --;
            }
            for (let i = ComprobarFila; i < ComprobarFila + 9; i++)
            {
                if (ComprobarNumero == Tablero[i])
                {
                    if (PosicionFila == i){}
                    else
                    {
                        i = Celdas;
                        ComprobarNumero = 0;
                    }
                }
            }
        }
        if (ComprobarNumero > 0)
        {
            PosicionCelda += 1;
        }
    } while (PosicionCelda < 80);


    
    if (dificultad == "Facil")
    {
        dificultad = 3;
    }
    else
    {
        if (dificultad == "Normal")
        {
            dificultad = 5;
        }
        else
        {
            dificultad = 7;
        }
    }
    
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < dificultad; j++)
        {
            Random = Math.floor(Math.random () * Filas) + (Filas-9);
            if (Tablero[Random] == 0)
            {
                j -= 1;
            }
            else
            {
               Tablero[Random] = 0; 
            }
        }
        Filas += 9;
    }

    for (let i = 0; i < Celdas; i++)
    {
        //document.getElementsByTagName("input")[i].value = Tablero[i];
        console.log(Tablero[i]);
    }*/
}

/*
        0  1  2    3  4  5    6  7  8
        9  10 11   12 13 14   15 16 17
        18 19 20   21 22 23   24 25 26

        27 28 29   30 31 32   33 34 35
        36 37 38   39 40 41   42 43 44
        45 46 47   48 49 50   51 52 53

        54 55 56   57 58 59   60 61 62
        63 64 65   66 67 68   69 70 71
        72 73 74   75 76 77   78 79 80
        */