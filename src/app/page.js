"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [pokemonsSelected, setPokemonsSelected] = useState(0);

  useEffect(() => {
    setPokemonsSelected(selectedIds.size);
  }, [selectedIds]);

  useEffect(() => {
    console.log("Pokémon seleccionados:", selectedIds.size);
  }, [selectedIds]);

  useEffect(() => {
    let mounted = true;
    async function loadPokemon() {
      const list = [];
      for (let i = 1; i <= 150; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await res.json();
        list.push(pokemon);
      }
      if (mounted) setPokemonData(list);
    }
    loadPokemon();
    return () => {
      mounted = false;
    };
  }, []);

  function toggleSelect(id) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        // deselect
        next.delete(id);
      } else {
        // select (but enforce max 10)
        if (prev.size >= 10) {
          alert("No puedes seleccionar más de 10 Pokémon");
          return prev;
        }
        next.add(id);
      }
      return next;
    });
  }

  return (
    <main>
      <header>
        <a href="another-page.js">＜Regresar</a>
        <div>
          <div id="topSection">
          <h1 id="title">Crear nuevo equipo</h1>
          <div id="teamCreationButton">
          <button type="submit" className="createButton">
           ! Crear !
          </button>
          </div>
          </div>
          <div id="team">
                      <input
                        type="text"
                        placeholder="Nombre del Equipo"
                        required
                        className="inputTeam"
                        id="inputTeamName"
                      />
                      <input
                        type="text"
                        placeholder="Creador del Equipo"
                        required
                        className="inputTeam"
                        id="inputTeamCreator"
                      />
                      <input
                        type="text"
                        placeholder="Descripcion"
                        required
                        className="inputTeam"
                        id="inputTeamDescription"
                      />
          </div>
        </div>
        <div>
            <p id="pokemonCount" className={pokemonsSelected === 0 || pokemonsSelected === 10 ? 'limit' : ''}>Pokémon seleccionados: {pokemonsSelected}/10</p>
        </div>
      </header>

      <div id="pokemondiv">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="pokemonID">
            <img
              src={pokemon.sprites.other.home?.front_default || "/fallback.png"}
              alt={pokemon.name}
              className="pokemonSprite"
            />
            <p className="pokemonName">
              #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>
            <div>
              {pokemon.types.map((type) => (
                <span key={type.type.name} id={`t-${type.type.name}`} className="types">
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </span>
              ))}
            </div>
            <hr />
            <label>
              <button
                type="button"
                className="addButton"
                onClick={() => toggleSelect(pokemon.id)}
              >
                {selectedIds.has(pokemon.id) ? <span id="eliminar">Eliminar</span> : <span id="agregar">Agregar</span>}
              </button>
            </label>
          </div>
        ))}
      </div>
    </main>
  );
}