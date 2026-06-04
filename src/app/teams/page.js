"use client";
import { useState, useEffect } from "react";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [pokemonCache, setPokemonCache] = useState({});

  useEffect(() => {
    const equiposGuardados = JSON.parse(localStorage.getItem("teams")) || [];
    setTeams(equiposGuardados);

    // Obtener todos los IDs únicos de todos los equipos
    const allIds = [...new Set(equiposGuardados.flatMap((t) => t.pokemons))];

    // Fetch de cada Pokémon
    Promise.all(
      allIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => ({ id, data }))
      )
    ).then((results) => {
      const cache = {};
      results.forEach(({ id, data }) => {
        cache[id] = {
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          sprite: data.sprites.other.home?.front_default || data.sprites.front_default,
          types: data.types.map((t) => t.type.name),
        };
      });
      setPokemonCache(cache);
    });
  }, []);

  function handleDelete(index) {
    const updated = teams.filter((_, i) => i !== index);
    localStorage.setItem("teams", JSON.stringify(updated));
    setTeams(updated);
  }

  return (
    <main>
      <header>
        <button className="backButton"><a href="/">＜ Regresar</a></button>
        <div id="topSection">
        <h1 id="title">Equipos existentes</h1>
        </div>
      </header>
      <div className="center">
      <div id="teamsList">
        {teams.length === 0 ? (
          <p>No hay equipos creados aún.</p>
        ) : (
          teams.map((team, index) => (
            <div key={index} className="teamCard">
              <h2>{team.nombre}</h2>
              <div className="teamData">
              <p><strong>Creador: </strong> {team.creador} <strong>Descripción: </strong> {team.descripcion || "Sin descripción"}</p>
              </div>
              <div className="teamPokemonGrid">
                {team.pokemons.map((id) => {
                  const poke = pokemonCache[id];
                  return (
                    <div key={id} className="PokemonCard">
                      {poke ? (
                        <>
                          <img src={poke.sprite} alt={poke.name} className="PokemonCardSprite" />
                          <p className="PokemonCardData" title={`#${id} ${poke.name}`}>#{id} {poke.name}</p>
                          <div>
                            {poke.types.map((type) => (
                              <span key={type} id={`t-${type}`} className="PokemonCardTypes">
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <p>Cargando #{id}...</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <button type="button" onClick={() => handleDelete(index)} id="eliminar">
                Eliminar equipo
              </button>
            </div>
          ))
        )}
      </div>
      </div>
    </main>
  );
}
