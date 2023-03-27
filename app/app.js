//Consumir api por js mediante petición

const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character";

//Paso 1: Guardar llamada de API en variable
const llamadaAApi = fetch(API_CHARACTERS);

//Pasa 2: "esperar" la respuesta de la API y convertirla a JSON
llamadaAApi
  .then((data) => {
    return data.json();
  })
  //Pasa 3: En el último then, la data llega formateada lista para usar
  .then((data) => {
    const $container = document.getElementById("container");
    const characters = data.results;

    for (let i = 0; i < characters.length; i++) {
      $container.innerHTML += `
      <div class="item-grid">
        <img
          src=${characters[i].image}
          alt="imagen de personaje"
        />
        <h2>${characters[i].name}</h2>
        <p>Gender: ${characters[i].gender}</p>
        <p>Species: ${characters[i].species}</p>
        <p>Status: ${characters[i].status}</p>
        <p>Origin: ${characters[i].origin.name}</p>
      </div>
      `;
    }
  })
  //Pasa 4: En caso de que haya error aparece en el catch
  .catch((err) => {
    console.log(err);
  });