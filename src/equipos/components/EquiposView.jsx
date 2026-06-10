import { PokemonCardMini } from "../../pokemon/components/PokemonCard";

// Componente "tonto" — solo renderiza equipos
export function EquiposView({ teams, pokemonCache, onDelete }) {
    if (teams.length === 0) return <p>No hay equipos creados aún.</p>;

    return (
        <div id="teamsList">
            {teams.map((team, index) => (
                <div key={index} className="teamCard">
                    <h2>{team.nombre}</h2>
                    <div className="teamData">
                        <p>
                            <strong>Creador: </strong>{team.creador}{" "}
                            <strong>Descripción: </strong>{team.descripcion || "Sin descripción"}
                        </p>
                    </div>
                    <div className="teamPokemonGrid">
                        {team.pokemons.map((id) => (
                            <PokemonCardMini key={id} id={id} pokemon={pokemonCache[id]} />
                        ))}
                    </div>
                    <button type="button" onClick={() => onDelete(index)} id="eliminar">
                        Eliminar equipo
                    </button>
                </div>
            ))}
        </div>
    );
}
