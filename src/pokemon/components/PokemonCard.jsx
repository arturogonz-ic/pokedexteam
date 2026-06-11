import { getSpriteUrl } from "../utils/spriteUtils";

const TYPE_COLORS = {
    normal:   "#a8a878", fire:     "#f08030", water:    "#6890f0",
    electric: "#f8d030", grass:    "#78c850", ice:      "#99d8f8",
    fighting: "#c03028", poison:   "#a040a0", ground:   "#e0c068",
    flying:   "#a890f0", psychic:  "#f85888", bug:      "#8bdc2a",
    rock:     "#b8a038", ghost:    "#705898", dragon:   "#7038f8",
    dark:     "#705848", steel:    "#b8b8d0", fairy:    "#f0b6e0",
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function TypeBadge({ type }) {
    return (
        <span
            className="rounded-xl px-[17px] py-[5px] mx-0.5 text-[15px] font-bold text-white"
            style={{ backgroundColor: TYPE_COLORS[type] ?? "#888" }}
        >
            {capitalize(type)}
        </span>
    );
}

function PokemonCardContent({ id, name, sprite, types }) {
    return (
        <>
            <img src={sprite} alt={name} className="w-auto h-40 object-contain" />
            <p className="text-center whitespace-nowrap overflow-hidden text-ellipsis w-full" title={`#${id} ${name}`}>
                #{id} {name}
            </p>
            <div>
                {types.map((type) => <TypeBadge key={type} type={type} />)}
            </div>
        </>
    );
}

export function PokemonCard({ id, pokemon, spriteType = "home", fallbackSprite = "pixel" }) {
    if (!pokemon) return <p>Cargando #{id}...</p>;
    const sprite = getSpriteUrl(pokemon.sprites, spriteType, fallbackSprite);
    const types  = Array.isArray(pokemon.types) && typeof pokemon.types[0] === "object"
        ? pokemon.types.map((t) => t.type.name)
        : pokemon.types;
    return (
        <div className="shadow-[0px_2px_3px_2px_rgba(0,0,0,0.3)] text-xl rounded-xl font-semibold w-full grid place-items-center transition-all duration-300 p-[30px_25px] border-2 border-transparent hover:scale-[1.04]">
            <PokemonCardContent id={id} name={pokemon.name} sprite={sprite} types={types} />
        </div>
    );
}

export function PokemonCardExtended({ pokemon, isSelected, onToggle, spriteType = "home", fallbackSprite = "pixel" }) {
    const name  = capitalize(pokemon.name);
    const sprite = getSpriteUrl(pokemon.sprites, spriteType, fallbackSprite);
    const types  = pokemon.types.map((t) => t.type.name);

    return (
        <div className={`text-xl rounded-xl font-semibold w-full grid place-items-center transition-all duration-300 p-[30px_25px] border-2 border-transparent hover:scale-[1.04] ${
            isSelected
                ? "shadow-[0px_2px_3px_2px_rgba(34,131,49,0.735)]"
                : "shadow-[0px_2px_3px_2px_rgba(0,0,0,0.3)]"
        }`}>
            <PokemonCardContent id={pokemon.id} name={name} sprite={sprite} types={types} />
            <hr className="border-[#515151] w-[98%] my-[5px]" />
            <button type="button" onClick={() => onToggle(pokemon.id)}>
                {isSelected
                    ? <span className="font-bold cursor-grab transition-all duration-300 ease-in-out rounded-xl px-[15px] py-2 text-[rgb(255,67,67)] hover:scale-110 hover:text-white hover:bg-[rgb(225,67,67)] active:bg-[rgb(200,67,67)] active:cursor-grabbing">Eliminar</span>
                    : <span className="font-bold cursor-grab transition-all duration-300 ease-in-out rounded-xl px-[15px] py-2 text-[rgb(47,146,47)] hover:scale-110 hover:text-white hover:bg-[rgb(47,139,47)] active:bg-[rgb(47,120,47)] active:cursor-grabbing">Agregar</span>
                }
            </button>
        </div>
    );
}
