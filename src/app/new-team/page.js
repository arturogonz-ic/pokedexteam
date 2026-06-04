"use client";
import { useState, useEffect } from "react";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());

  const [teamName, setTeamName] = useState("");
  const [teamCreator, setTeamCreator] = useState("");
  const [teamDescription, setTeamDescription] = useState("");

  const pokemonsSelected = selectedIds.size;

  useEffect(() => {
    let mounted = true;
    const ids = Array.from({ length: 150 }, (_, i) => i + 1);
    Promise.all(
      ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
      )
    ).then((results) => {
      if (mounted) setPokemonData(results);
    });
    return () => { mounted = false; };
  }, []);

  function handleCreate() {
    if (!teamName || !teamCreator) {
      alert("Por favor llena el nombre y creador del equipo");
      return;
    }
    if (selectedIds.size === 0) {
      alert("Selecciona al menos un Pokémon");
      return;
    }

    const nuevoEquipo = {
      nombre: teamName,
      creador: teamCreator,
      descripcion: teamDescription,
      pokemons: [...selectedIds],
    };

    const equiposGuardados = JSON.parse(localStorage.getItem("teams")) || [];
    equiposGuardados.push(nuevoEquipo);
    localStorage.setItem("teams", JSON.stringify(equiposGuardados));

    alert("¡Equipo creado exitosamente!");
    window.location.href = "/teams";
  }

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
        <button className="backButton"><a href="/">＜ Regresar</a></button>
        <div className="header">
          <div id="topSection">
          <h1 id="title">Crear nuevo equipo</h1>
          <div id="teamCreationButton">
          <button type="button" className="createButton" onClick={handleCreate}>
           ! Crear !
          </button>
          </div>
          </div>
          <div id="team">
            <input type="text" placeholder="Nombre del Equipo" required className="inputTeam" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            <input type="text" placeholder="Creador del Equipo" required className="inputTeam" value={teamCreator} onChange={(e) => setTeamCreator(e.target.value)} />
            <input type="text" placeholder="Descripción" required className="inputTeam" value={teamDescription} onChange={(e) => setTeamDescription(e.target.value)} />
          </div>
          <p id="pokemonCount" className={pokemonsSelected === 0 || pokemonsSelected === 10 ? 'limit' : ''}>Pokémon seleccionados: {pokemonsSelected}/10</p>
        </div>
      </header>

      <div id="pokemondiv">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className={`PokemonCard ${selectedIds.has(pokemon.id) ? "PokemonCardSelected" : ""}`}>
            <img
              src={pokemon.sprites.other.home?.front_default || "/fallback.png"}
              alt={pokemon.name}
              className="PokemonCardSprite"
            />
            <p className="PokemonCardData" title={`#${pokemon.id} ${capitalize(pokemon.name)}`}>
              #{pokemon.id} {capitalize(pokemon.name)}
            </p>
            <div>
              {pokemon.types.map((type) => (
                <span key={type.type.name} id={`t-${type.type.name}`} className="PokemonCardTypes">
                  {capitalize(type.type.name)}
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