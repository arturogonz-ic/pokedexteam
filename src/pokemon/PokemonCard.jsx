// L: cumple el contrato de mostrar un pokemon sin importar el contexto
// Componente "tonto" — solo renderiza, no sabe de fetch ni lógica

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function PokemonCard({ pokemon, isSelected, onToggle }) {
    return (
        <div className={`PokemonCard ${isSelected ? "PokemonCardSelected" : ""}`}>
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
            <button type="button" className="addButton" onClick={() => onToggle(pokemon.id)}>
                {isSelected ? <span id="eliminar">Eliminar</span> : <span id="agregar">Agregar</span>}
            </button>
        </div>
    );
}

export function PokemonCardMini({ id, pokemon }) {
    if (!pokemon) return <p>Cargando #{id}...</p>;
    return (
        <div className="PokemonCard">
            <img src={pokemon.sprite} alt={pokemon.name} className="PokemonCardSprite" />
            <p className="PokemonCardData" title={`#${id} ${pokemon.name}`}>#{id} {pokemon.name}</p>
            <div>
                {pokemon.types.map((type) => (
                    <span key={type} id={`t-${type}`} className="PokemonCardTypes">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                ))}
            </div>
        </div>
    );
}
