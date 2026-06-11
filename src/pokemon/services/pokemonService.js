// S: solo sabe hablar con PokeAPI
// D: los componentes dependen de esta abstracción, no de fetch directamente

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const pokemonService = {
    getById: async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) throw new Error(`Pokemon #${id} no encontrado`);
        return res.json();
    },

    getRange: async (from = 1, to = 151) => {
        const ids = Array.from({ length: to - from + 1 }, (_, i) => i + from);
        return Promise.all(ids.map((id) => pokemonService.getById(id)));
    },
};
