const add = (a:number,b:number):number => {
    return a + b;
}
const value = add(1, 2);
console.log(value);

const myName: string | number = "Majo"; // La variable myName puede ser un string o un número

const myArray: number[] = [2, 2, 3] // forma de tipar un arreglo

enum Colors{ // definir valores o constantes, propio de typescript/ PLantilla

    'Red'='Rojo',
    'Green'='Verde',
    'Blue'='Azul',
} 

let color: Colors = Colors.Blue;
console.log(color);

