import { PokemonCardExtended } from "../../pokemon/components/PokemonCard";
import { FILTER_OPTIONS } from "../../pokemon/utils/filterUtils";

export function NuevoEquipoView({
    pokemonData, loading, selectedIds, pokemonsSelected,
    teamName, teamCreator, teamDescription,
    onTeamNameChange, onTeamCreatorChange, onTeamDescriptionChange,
    onToggle, onCrear,
    spriteType, fallbackSprite,
    filter, onFilterChange,
}) {
    return (
        <main>
            <header>
                <div className="header">
                    <div id="topSection">
                        <button type="button" className="createButton" onClick={onCrear}>
                            ! Crear !
                        </button>
                    </div>
                    <div id="team">
                        <input type="text" placeholder="Nombre del Equipo" required className="inputTeam"
                            value={teamName} onChange={(e) => onTeamNameChange(e.target.value)} />
                        <input type="text" placeholder="Creador del Equipo" required className="inputTeam"
                            value={teamCreator} onChange={(e) => onTeamCreatorChange(e.target.value)} />
                        <input type="text" placeholder="Descripción" required className="inputTeam"
                            value={teamDescription} onChange={(e) => onTeamDescriptionChange(e.target.value)} />
                    </div>
                    <div id="pokemonCountRow">
                        <p id="pokemonCount" className={pokemonsSelected === 0 || pokemonsSelected === 10 ? "limit" : ""}>
                            Pokémon seleccionados: {pokemonsSelected}/10
                        </p>
                        <select
                            id="filterSelector"
                            value={filter}
                            onChange={(e) => onFilterChange(e.target.value)}
                        >
                            {FILTER_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </header>

            <div id="pokemondiv">
                {pokemonData.length === 0 ? (
                    <p>Cargando Pokémon...</p>
                ) : (
                    <>
                        {pokemonData.map((pokemon) => (
                            <PokemonCardExtended
                                key={pokemon.id}
                                pokemon={pokemon}
                                isSelected={selectedIds.has(pokemon.id)}
                                onToggle={onToggle}
                                spriteType={spriteType}
                                fallbackSprite={fallbackSprite}
                            />
                        ))}
                        {loading && <p id="loadingMore">Cargando más Pokémon...</p>}
                    </>
                )}
            </div>
        </main>
    );
}
