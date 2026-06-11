export const SPRITE_OPTIONS = [
    { value: "home",             label: "3D Home" },
    { value: "official-artwork", label: "Arte Oficial" },
    { value: "dream_world",      label: "Dream World" },
    { value: "showdown",         label: "Showdown (GIF)" },
    { value: "black-white",      label: "Black & White (GIF)" },
    { value: "pixel",            label: "Pixel Clásico" },
    { value: "shiny",            label: "Shiny"},
];

export function getSpriteUrl(sprites, type) {
    switch (type) {
        case "official-artwork": return sprites.other?.["official-artwork"]?.front_default;
        case "dream_world":      return sprites.other?.dream_world?.front_default;
        case "showdown":         return sprites.other?.showdown?.front_default;
        case "black-white":      return sprites.versions?.["generation-v"]?.["black-white"]?.animated?.front_default;
        case "pixel":            return sprites.front_default;
        case "shiny":            return sprites.front_shiny;
        case "home":
        default:                 return sprites.other?.home?.front_default;
    }
}
