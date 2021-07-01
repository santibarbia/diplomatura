var usuarios = [{
    username:"Leo",
    password:"1234"
},
{
    username:"santi",
    password:"123456"
},
{
    username:"juan",
    password:"abcdef12"
}]

function login(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    
   const userValid = usuarios.find((usuarios)=>usuarios.username == user && usuarios.password == pass);
    if (userValid) {
        window.location.href= "paginaFinal.html";
    } else {
        alert("No se pudo iniciar sesion, verifique sus datos")
    }
}
function cargar(){
    var user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    var noValido = / /;
    
    const userValid = usuarios.find((usuarios)=>usuarios.username == user);
    if (!userValid) {

        
            if(noValido.test(user) || noValido.test(pass)){
                alert("Verifique su usuario o contraseña, no se puede usar espacios en blanco.");
                
            }
            else{

                usuarios.push({username:user,
                    password:pass})
                alert("Se cargo correctamente el usuario");
                document.getElementById("usuario").value = "";
                document.getElementById("password").value = "";
                console.log(usuarios)
            }
            


    }else{
        alert("El usuario ya existe")
    }
}