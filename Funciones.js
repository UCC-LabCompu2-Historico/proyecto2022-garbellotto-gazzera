/**
 * Descripción
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

function Dificultad(dificultad) {
    if (dificultad == undefined) {
        dificultad = "normal";
    }
    localStorage.setItem("dificultadLS", dificultad);s
}

/**
 * Descripción
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */
function CrearSudoku(i,num){
    var Dificultad;
    Dificultad = localStorage.getItem("dificultadLS");
    i --;

    var TableroFacil = [5,9,3,7,8,2,4,6,1,
                        1,8,7,6,4,9,5,2,3,
                        6,4,2,3,5,1,8,7,9,
                        9,1,8,5,6,7,2,3,4,
                        3,2,5,9,1,4,6,8,7,
                        4,7,6,8,2,3,1,9,5,
                        2,3,1,4,9,8,7,5,6,
                        8,6,9,1,7,5,3,4,2,
                        7,5,4,2,3,6,9,1,8];
    var TableroFacilVacio = [5,9,3,0,0,0,4,6,1,
                             1,0,7,6,4,0,5,0,3,
                             0,4,2,3,0,1,8,0,9,
                             9,0,8,0,6,0,2,3,4,
                             3,2,5,0,0,4,0,8,7,
                             4,0,6,8,2,3,1,0,0,
                             0,3,1,4,0,8,0,5,6,
                             8,6,9,1,0,5,3,0,0,
                             7,5,0,2,0,6,9,1,0];
    var TableroNormal = [5,1,3,2,4,7,8,9,6,
                         6,2,8,9,5,1,4,7,3,
                         7,9,4,3,6,8,2,5,1,
                         3,7,9,8,1,6,5,4,2,
                         2,4,5,7,9,3,1,6,8,
                         1,8,6,5,2,4,9,3,7,
                         8,6,1,4,7,5,3,2,9,
                         9,5,7,1,3,2,6,8,4,
                         4,3,2,6,8,9,7,1,5];
    var TableroNormalVacio = [0,1,0,0,4,0,0,9,6,
                              6,0,0,9,0,1,0,7,0,
                              0,0,4,0,0,8,2,0,1,
                              0,7,0,8,0,0,5,0,2,
                              2,0,5,7,0,0,0,0,8,
                              0,8,0,0,2,0,9,3,0,
                              0,6,0,4,0,5,0,2,0,
                              9,0,7,0,0,2,0,8,0,
                              0,3,0,6,0,9,0,0,5];
    var TableroDificil = [6,4,8,1,2,5,3,9,7,
                          7,5,3,8,9,6,1,4,2,
                          2,1,9,7,3,4,5,8,6,
                          9,7,2,3,1,8,4,6,5,
                          8,6,4,5,7,2,9,3,1,
                          5,3,1,6,4,9,2,7,8,
                          1,9,7,2,6,3,8,5,4,
                          3,8,6,4,5,1,7,2,9,
                          4,2,5,9,8,7,6,1,3];
    var TableroDificilVacio = [6,0,0,0,2,0,0,0,0,
                               0,0,3,0,0,6,0,0,0,
                               0,0,0,0,3,0,0,8,0,
                               9,0,0,0,0,0,0,0,5,
                               0,6,0,0,0,2,0,0,0,
                               0,0,1,0,0,9,0,0,0,
                               0,9,0,0,0,0,8,0,0,
                               0,8,0,0,0,1,0,0,0,
                               0,0,0,0,8,0,0,1,0];

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
    if (Dificultad == "facil") {
        TableroFacilVacio[i] = num;
        if (TableroFacil[i] != TableroFacilVacio[i]) {
            document.getElementsByClassName("celda")[i].value = "";
        }
        else {
            document.getElementsByTagName("input")[i].disabled = true;
        }
    }
    if (Dificultad == "normal") {
        TableroNormalVacio[i] == num;
        if (TableroNormal[i] != TableroNormalVacio[i]) {
            document.getElementsByClassName("celda")[i].value = "";
        }
        else {
            document.getElementsByTagName("input")[i].disabled = true;
        }
    }
    if (Dificultad == "dificil") {
        TableroDificilVacio[i] == num;
        if (TableroDificil[i] != TableroDificilVacio[i]) {
            document.getElementsByClassName("celda")[i].value = "";
        }
        else {
            document.getElementsByTagName("input")[i].disabled = true;
        }
    }
}

/**
 * Descripción
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

//function temporizador()