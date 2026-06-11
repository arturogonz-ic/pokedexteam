import Link from "next/link";
import { PokemonCard } from "../../pokemon/components/PokemonCard";
import { SPRITE_OPTIONS } from "../../pokemon/utils/spriteUtils";

// Componente "tonto" — solo renderiza equipos
export function EquiposView({ teams, pokemonCache, onDelete, spriteType, onSpriteTypeChange }) {
    return (
        <main>
            <header>
                <Link href="/" className="backButton">＜ Regresar</Link>
                <div id="topSection">
                    <h1 id="title">Equipos existentes</h1>
                    <select
                        id="spriteSelector"
                        value={spriteType}
                        onChange={(e) => onSpriteTypeChange(e.target.value)}
                    >
                        {SPRITE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </header>
            <div className="center">
                {teams.length === 0 ? (
                    <p>No hay equipos creados aún.</p>
                ) : (
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
                                        <PokemonCard key={id} id={id} pokemon={pokemonCache[id]} spriteType={spriteType} />
                                    ))}
                                </div>
                                <button type="button" onClick={() => onDelete(index)} id="eliminar">
                                    Eliminar equipo
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
