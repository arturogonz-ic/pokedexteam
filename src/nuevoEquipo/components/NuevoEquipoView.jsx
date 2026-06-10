import { PokemonCard } from "../../pokemon/components/PokemonCard";

// Componente "tonto" — solo renderiza el formulario y la lista
export function NuevoEquipoView({
    pokemonData, loading, selectedIds, pokemonsSelected,
    teamName, teamCreator, teamDescription,
    onTeamNameChange, onTeamCreatorChange, onTeamDescriptionChange,
    onToggle, onCrear,
}) {
    return (
        <main>
            <header>
                <button className="backButton"><a href="/">＜ Regresar</a></button>
                <div className="header">
                    <div id="topSection">
                        <h1 id="title">Crear nuevo equipo</h1>
                        <div id="teamCreationButton">
                            <button type="button" className="createButton" onClick={onCrear}>
                                ! Crear !
                            </button>
                        </div>
                    </div>
                    <div id="team">
                        <input type="text" placeholder="Nombre del Equipo" required className="inputTeam"
                            value={teamName} onChange={(e) => onTeamNameChange(e.target.value)} />
                        <input type="text" placeholder="Creador del Equipo" required className="inputTeam"
                            value={teamCreator} onChange={(e) => onTeamCreatorChange(e.target.value)} />
                        <input type="text" placeholder="Descripción" required className="inputTeam"
                            value={teamDescription} onChange={(e) => onTeamDescriptionChange(e.target.value)} />
                    </div>
                    <p id="pokemonCount" className={pokemonsSelected === 0 || pokemonsSelected === 10 ? "limit" : ""}>
                        Pokémon seleccionados: {pokemonsSelected}/10
                    </p>
                </div>
            </header>

            <div id="pokemondiv">
                {loading ? (
                    <p>Cargando Pokémon...</p>
                ) : (
                    pokemonData.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            isSelected={selectedIds.has(pokemon.id)}
                            onToggle={onToggle}
                        />
                    ))
                )}
            </div>
        </main>
    );
}
