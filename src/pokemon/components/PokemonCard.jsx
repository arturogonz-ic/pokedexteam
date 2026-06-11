import { getSpriteUrl } from "../utils/spriteUtils";

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function PokemonCardContent({ id, name, sprite, types }) {
    return (
        <>
            <img src={sprite || "/fallback.png"} alt={name} className="PokemonCardSprite" />
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
export function PokemonCard({ id, pokemon, spriteType = "home", fallbackSprite = "pixel" }) {
    if (!pokemon) return <p>Cargando #{id}...</p>;
    const sprite = getSpriteUrl(pokemon.sprites, spriteType, fallbackSprite);
    return (
        <div className="PokemonCard">
            <PokemonCardContent id={id} name={pokemon.name} sprite={sprite} types={pokemon.types} />
        </div>
    );
}

export function PokemonCardExtended({ pokemon, isSelected, onToggle, spriteType = "home", fallbackSprite = "pixel" }) {
    const name   = capitalize(pokemon.name);
    const sprite = getSpriteUrl(pokemon.sprites, spriteType, fallbackSprite);
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
