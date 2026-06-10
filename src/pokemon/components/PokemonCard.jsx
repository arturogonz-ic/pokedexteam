function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Contenido compartido entre ambas cards — evita duplicación y divs anidados
function PokemonCardContent({ id, name, sprite, types }) {
    return (
        <>
            <img src={sprite} alt={name} className="PokemonCardSprite" />
            <p className="PokemonCardData" title={`#${id} ${name}`}>#{id} {name}</p>
            <div>
                {types.map((type) => (
                    <span key={type} id={`t-${type}`} className="PokemonCardTypes">
                        {capitalize(type)}
                    </span>
                ))}
            </div>
        </>
    );
}

// Base — muestra info del pokemon, sin interacción
export function PokemonCard({ id, pokemon }) {
    if (!pokemon) return <p>Cargando #{id}...</p>;
    return (
        <div className="PokemonCard">
            <PokemonCardContent
                id={id}
                name={pokemon.name}
                sprite={pokemon.sprite}
                types={pokemon.types}
            />
        </div>
    );
}

// Extended — extiende PokemonCard con estado de selección y botón
export function PokemonCardExtended({ pokemon, isSelected, onToggle }) {
    const name   = capitalize(pokemon.name);
    const sprite = pokemon.sprites.other.home?.front_default || "/fallback.png";
    const types  = pokemon.types.map((t) => t.type.name);

    return (
        <div className={`PokemonCard ${isSelected ? "PokemonCardSelected" : ""}`}>
            <PokemonCardContent id={pokemon.id} name={name} sprite={sprite} types={types} />
            <hr />
            <button type="button" className="addButton" onClick={() => onToggle(pokemon.id)}>
                {isSelected ? <span id="eliminar">Eliminar</span> : <span id="agregar">Agregar</span>}
            </button>
        </div>
    );
}
