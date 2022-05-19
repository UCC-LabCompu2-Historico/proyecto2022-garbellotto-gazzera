/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function Dificultad(Dificultad) {
    alert(Dificultad);
    /*var dificultad, n;
    dificultad = document.getElementById("radio_facil").value;
    localStorage.setItem("Dificultad", dificultad);
    n = localStorage.getItem("Dificultad");
    alert(n);*/
}

function CrearSudoku(){
    var ComprobarNumero=0, 
    PosicionFila=0, PosicionColumna=0, 
    CuadranteFila=0, CuadranteColumna=0, 
    Contador=0, MismaPosicion=0, Random, num1, num2=0, dificultad;
    var Filas=9,Columnas=9;
    var Tablero = new Array();
    dificultad = localStorage.getItem("dificultad");
    alert(dificultad);

    do
    {
        if (MismaPosicion == PosicionFila + PosicionColumna)
        {
            Contador += 1;
            if (Contador > 25)
            {
                for (var i = 0; i < Filas; i++)
                {
                    for (var j = 0; j < Columnas; j++)
                    {
                        Tablero[i][j] = 0;
                        PosicionFila = 0;
                        PosicionColumna = 0;
                        CuadranteFila = 0;
                        CuadranteColumna = 0;
                        ComprobarNumero = 0;
                    }
                }
            }
        }
        else
        {
            Contador = 0;
        }

        MismaPosicion = PosicionFila + PosicionColumna;
        
        Tablero[PosicionFila][PosicionColumna] = 1 + rand()%(9);

        ComprobarNumero = Tablero[PosicionFila][PosicionColumna];

        for (var i = CuadranteFila; i < CuadranteFila + 3; i++)
        {
            for (var j = CuadranteColumna; j < CuadranteColumna + 3; j++)
            {   
                if (ComprobarNumero == Tablero[i][j])
                {
                    if (PosicionFila == i && PosicionColumna == j){}
                    else
                    {
                        j = CuadranteColumna + 3; 
                        i = CuadranteFila + 3;
                        ComprobarNumero = 0;
                    }
                }
            } 
        }
        if (ComprobarNumero > 0)
        {
            for (var i = 0; i < Columnas; i++)
            {
                if (ComprobarNumero == Tablero[PosicionFila][i])
                {
                    if (PosicionColumna == i){}
                    else
                    { 
                        i = Columnas;
                        ComprobarNumero = 0;
                    }
                }
            }
        }
        if (ComprobarNumero > 0)
        {
            for (var i = 0; i < Filas; i++)
            {
                if (ComprobarNumero == Tablero[i][PosicionColumna])
                {
                    if (PosicionFila == i){}
                    else
                    {
                        i = Filas;
                        ComprobarNumero = 0;
                    }
                }
            }
        }
        if (ComprobarNumero > 0)
        {
            PosicionColumna += 1;
            if (PosicionColumna == 9)
            {
                PosicionFila += 1;
                PosicionColumna = 0;
                CuadranteColumna = 0;
                if (PosicionFila == 3 || PosicionFila == 6)
                {
                    CuadranteFila += 3;
                }
            }
            if (PosicionColumna == 3 || PosicionColumna == 6)
            {
                CuadranteColumna += 3;
            }
        }
    } while (PosicionFila < 9);


    
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
    
    for (var i = 0; i < Filas; i++)
    {
        for (var j = 0; j < dificultad; j++)
        {
            Random = 1 + rand() % (9);
            if (Tablero[i][Random] == 0)
            {
                j -= 1;
            }
            else
            {
               Tablero[i][Random] = 0; 
            }
        }
    }

    for (var i = 0; i < Filas; i++)
    {
        for (var j = 0; j < Columnas; j++)
        {
            if (num2 < i) {
                num2 = i;
                num1 = 8 + i + j;
            }
            else{
                num1 = i + j;
            }
            if (Tablero[i][j] == 0) {
                
            }
            document.getElementsByTagName("input")[num1].value = Tablero[i][j];
        }
    }
}