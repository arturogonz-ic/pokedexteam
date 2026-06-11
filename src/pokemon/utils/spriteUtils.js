export const SPRITE_OPTIONS = [
    // HD / Arte
    { value: "home",                    label: "3D Home" },
    { value: "home-shiny",              label: "3D Home Shiny" },
    { value: "official-artwork",        label: "Arte Oficial" },
    { value: "official-artwork-shiny",  label: "Arte Oficial Shiny" },
    { value: "dream_world",             label: "Dream World" },
    // GIFs
    { value: "showdown",                label: "Showdown" },
    { value: "showdown-shiny",          label: "Showdown Shiny" },
    { value: "black-white",             label: "B&W Animado" },
    { value: "black-white-shiny",       label: "B&W Animado Shiny" },
    // Pixel por generación
    { value: "gen-i-rb",                label: "Gen I - Rojo/Azul" },
    { value: "gen-i-yellow",            label: "Gen I - Amarillo" },
    { value: "gen-ii-gold",             label: "Gen II - Oro" },
    { value: "gen-ii-silver",           label: "Gen II - Plata" },
    { value: "gen-ii-crystal",          label: "Gen II - Cristal" },
    { value: "gen-iii-rs",              label: "Gen III - Rubí/Zafiro" },
    { value: "gen-iii-frlg",            label: "Gen III - RJ/HV" },
    { value: "gen-iii-emerald",         label: "Gen III - Esmeralda" },
    { value: "gen-iv-dp",               label: "Gen IV - Diamante/Perla" },
    { value: "gen-iv-platinum",         label: "Gen IV - Platino" },
    { value: "gen-iv-hgss",             label: "Gen IV - Oro/Plata HG" },
    { value: "gen-v-bw",                label: "Gen V - B&N Estático" },
    { value: "pixel",                   label: "Pixel Clásico" },
    { value: "shiny",                   label: "Shiny Pixel" },
    // 3D moderno
    { value: "gen-vi-xy",               label: "Gen VI - X/Y" },
    { value: "gen-vi-oras",             label: "Gen VI - OR/AS" },
    { value: "gen-vii-usum",            label: "Gen VII - US/UM" },
    { value: "gen-viii-bdsp",           label: "Gen VIII - BD/SP" },
    { value: "gen-ix-sv",               label: "Gen IX - Escarlata/Púrpura" },
];

function resolve(sprites, type) {
    const v = sprites?.versions;
    const o = sprites?.other;
    switch (type) {
        // HD / Arte
        case "home-shiny":             return o?.home?.front_shiny;
        case "official-artwork":       return o?.["official-artwork"]?.front_default;
        case "official-artwork-shiny": return o?.["official-artwork"]?.front_shiny;
        case "dream_world":            return o?.dream_world?.front_default;
        // GIFs
        case "showdown":               return o?.showdown?.front_default;
        case "showdown-shiny":         return o?.showdown?.front_shiny;
        case "black-white":            return v?.["generation-v"]?.["black-white"]?.animated?.front_default;
        case "black-white-shiny":      return v?.["generation-v"]?.["black-white"]?.animated?.front_shiny;
        // Gen I
        case "gen-i-rb":               return v?.["generation-i"]?.["red-blue"]?.front_default;
        case "gen-i-yellow":           return v?.["generation-i"]?.["yellow"]?.front_default;
        // Gen II
        case "gen-ii-gold":            return v?.["generation-ii"]?.["gold"]?.front_default;
        case "gen-ii-silver":          return v?.["generation-ii"]?.["silver"]?.front_default;
        case "gen-ii-crystal":         return v?.["generation-ii"]?.["crystal"]?.front_default;
        // Gen III
        case "gen-iii-rs":             return v?.["generation-iii"]?.["ruby-sapphire"]?.front_default;
        case "gen-iii-frlg":           return v?.["generation-iii"]?.["firered-leafgreen"]?.front_default;
        case "gen-iii-emerald":        return v?.["generation-iii"]?.["emerald"]?.front_default;
        // Gen IV
        case "gen-iv-dp":              return v?.["generation-iv"]?.["diamond-pearl"]?.front_default;
        case "gen-iv-platinum":        return v?.["generation-iv"]?.["platinum"]?.front_default;
        case "gen-iv-hgss":            return v?.["generation-iv"]?.["heartgold-soulsilver"]?.front_default;
        // Gen V
        case "gen-v-bw":               return v?.["generation-v"]?.["black-white"]?.front_default;
        case "pixel":                  return sprites?.front_default;
        case "shiny":                  return sprites?.front_shiny;
        // Gen VI+
        case "gen-vi-xy":              return v?.["generation-vi"]?.["x-y"]?.front_default;
        case "gen-vi-oras":            return v?.["generation-vi"]?.["omegaruby-alphasapphire"]?.front_default;
        case "gen-vii-usum":           return v?.["generation-vii"]?.["ultra-sun-ultra-moon"]?.front_default;
        case "gen-viii-bdsp":          return v?.["generation-viii"]?.["brilliant-diamond-shining-pearl"]?.front_default;
        case "gen-ix-sv":              return v?.["generation-ix"]?.["scarlet-violet"]?.front_default;
        case "home":
        default:                       return o?.home?.front_default;
    }
}

export function getSpriteUrl(sprites, type) {
    return (
        resolve(sprites, type) ||
        sprites?.other?.home?.front_default ||
        sprites?.front_default ||
        null
    );
}
