export const FILTER_OPTIONS = [
    { value: "all",       label: "Todos" },
    { value: "normal",    label: "Normal" },
    { value: "fire",      label: "Fire" },
    { value: "water",     label: "Water" },
    { value: "electric",  label: "Electric" },
    { value: "grass",     label: "Grass" },
    { value: "ice",       label: "Ice" },
    { value: "fighting",  label: "Fighting" },
    { value: "poison",    label: "Poison" },
    { value: "ground",    label: "Ground" },
    { value: "flying",    label: "Flying" },
    { value: "psychic",   label: "Psychic" },
    { value: "bug",       label: "Bug" },
    { value: "rock",      label: "Rock" },
    { value: "ghost",     label: "Ghost" },
    { value: "dragon",    label: "Dragon" },
];

export function filterPokemon(pokemonList, type) {
    if (type === "all") return pokemonList;
    return pokemonList.filter((p) =>
        p.types.some((t) => t.type.name === type)
    );
}
