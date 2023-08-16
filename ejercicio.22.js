/* 
    Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
    pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/


const minMaxArray = (list=[]) => {
    if (list.length === 0) return console.warn("Lista vacía, debe ingresar una lista númerica");
    if (!Array.isArray(list)) return console.error("Error, debe ingresar una lista");

    let min = 0,
        max = 0;

    for (let i=0; i<list.length; i++){
        if (min === 0 && max === 0){
            min = list[i];
            max = list[i];
        }
        
        if (list[i]>max) {
            max = list[i];
        } 

        if (list[i]<min) {
            min = list[i];
        }
    }


    return console.info(`[${max},${min}]`);
}


console.info("EJERCICIO 22");
minMaxArray();
minMaxArray('hola');
minMaxArray([100, 2, 5, -2]);