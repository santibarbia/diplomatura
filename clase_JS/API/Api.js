

const get = (url = "https://rickandmortyapi.com/api/character") =>{
    fetch(url)
    .then(response=>
        response.json()
    )
    .then(data =>
        console.log(data)
    )
    .catch(err =>
        console.log(err)
    )
    
}
const getAsync = async (url = "https://rickandmortyapi.com/api/character") =>{
    try {
        const response= await fetch(url)
        const {results:personajes} = await response.json()
        console.log(personajes)
        return personajes
        

    } catch (error) {
        console.log(error)
    }       
    
}

const buscador = async ()=>{
    const {value:nombre} = document.getElementById('input');
    const personajes = await getAsync();
    const personaje = personajes.find(personaje => personaje.name == nombre);
    document.getElementById("row").insertAdjacentHTML('beforeend',)
    const card =`<div class="card mt-4" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre : ${personaje.name}</h5>
          <p class="card-text">Especia : ${personaje.species}</p>
          <a href="${personaje.url}" class="btn btn-primary">Go page</a>
        </div>
      </div>`;
      document.getElementById("row").insertAdjacentHTML('beforeend',card);

}

const start = async() =>{
    const personajes = await getAsync();
    personajes.map((personajes)=>{
        const card =`<div class="card mt-4" style="width: 18rem;">
        <img src="${personajes.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre : ${personajes.name}</h5>
          <p class="card-text">Especia : ${personajes.species}</p>
          <a href="${personajes.url}" class="btn btn-primary">Go page</a>
        </div>
      </div>`;
      document.getElementById("row").insertAdjacentHTML('beforeend',card)
    })
}

const buscarVivosHumans = async(url = "https://rickandmortyapi.com/api/character/?species=Human&status=alive") =>{
    try {
        const response = await fetch(url);
        const {results:personajes}= await response.json();
        console.log(personajes)
        
        
    } catch (error) {
        console.log(error)
    }
}

window.onload = buscarVivosHumans();