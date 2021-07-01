let persona = {
    nombre:"Santiago",
    apellido:"Ibarbia",
    edad:26,
    hobbies:[{
        deporte:"crossfit",
        tiempo:3
    },{
        deporte:"futbol",
        tiempo:15
    }]
}


function numeros(){
    const n1= document.getElementById("n1").value;
    const n2= document.getElementById("n2").value;
    
    calculo = parseInt(n1) + parseInt(n2);
    console.log(n1,n2)
    alert(calculo)
}
function restar(){
    const n1= document.getElementById("n1").value;
    const n2= document.getElementById("n2").value;
    
    calculo =  parseInt(n1) - parseInt(n2);
    console.log(n1,n2)
    alert(calculo)
}
function multiplicar(){
    const n1= document.getElementById("n1").value;
    const n2= document.getElementById("n2").value;
    
    calculo =  parseInt(n1) * parseInt(n2);
    console.log(n1,n2)
    alert(calculo)
}
function dividir(){
    const n1= document.getElementById("n1").value;
    const n2= document.getElementById("n2").value;
    
    calculo =  parseInt(n1) / parseInt(n2);
    console.log(n1,n2)
    alert(calculo)
}