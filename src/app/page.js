export default function Home() {
  return (
    <>
    <header>
      <button>
        Regresar
      </button>
      <div>
        <h2 id="title">
          Crear Nuevo Equipo
        </h2>
        <div id="team">
        <form>
          <table border={1}>
          <th><input type='text' placeholder="Nombre del Equipo" required></input></th>
          <th><input type='text' placeholder="Creador del Equipo" required></input></th>
          <th><input type='text' placeholder="Descripcion" required></input></th>
          <th><button type="submit">Crear</button></th>
        </table>
        </form>
        </div>
      </div>
    </header>
    <main id="container">
    <template id="pokemondiv">
      <div id="pokemondiv">
        <label id="idPokemon"></label>
        <label id="namePokemon"></label>
        <button id="anadirPokemon"></button>
      </div>
    </template> 
    </main>
    </>
  );
}

const frag = document.createDocumentFragment();
const main = document.querySelector("main");
const template = document.createElement("template");
main.innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {
    getPokemonApi();
});

const getPokemonApi = async () =>{
  for(let id=1;id<=1;id++){
    const respuesta = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await respuesta.json;
    console.log(data)
    if (data){
      paintPokemon(data);
    }
  }
}
const paintPokemon = (data) =>{
  template.innerHTML(`
    <img src=${data.sprites.front_default} alt="pokemonImg" class="pokemonSprite"></img>
        <form method="POST">
          <label class="pokemonId">
            ${data.id}
          </label>
          <label class="pokemonName">
            ${data.name}
          </label>
          <button type="submit" class="buttonAnadir">Anadir</button>
        </form>
    `)
  }