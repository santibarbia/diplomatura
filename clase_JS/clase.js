//Extension ESLint
document.write('Hola Mundo!! :)')

console.log("Hola consola");

const edad = 20;

if(edad >= 18){
    document.write("Es mayor de edad");
}else{
    document.write("Es menor de edad")
}

let array =[1,30,35,40,45,12,35]
const longitudInicial = array.length
for (let i = 0; i < longitudInicial; i++) {

    if(array[i]>30){
        array.push(100);
    }
    console.log(array)
}