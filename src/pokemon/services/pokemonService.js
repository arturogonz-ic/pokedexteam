const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const BATCH_SIZE = 100;
const CACHE_KEY = "pokedex_v1";

function readCache() {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function writeCache(data) {
    try {
        // Solo guarda los campos que necesitamos (sprites son pesados pero necesarios)
        const slim = data.map(({ id, name, sprites, types }) => ({ id, name, sprites, types }));
        localStorage.setItem(CACHE_KEY, JSON.stringify(slim));
    } catch { /* quota exceeded, skip */ }
}

export const pokemonService = {
    getById: async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) throw new Error(`Pokemon #${id} no encontrado`);
        return res.json();
    },

    getAllIds: async () => {
        const res = await fetch(`${BASE_URL}?limit=2000`);
        const { results } = await res.json();
        return results
            .map((p) => parseInt(p.url.split("/").filter(Boolean).pop()))
            .filter((id) => id <= 1025);
    },

    getAll: async (onBatch) => {
        // Si hay caché, devuelve instantáneamente
        const cached = readCache();
        if (cached) {
            onBatch?.(cached);
            return cached;
        }

        // Primera carga: fetch en batches de 100
        const ids = await pokemonService.getAllIds();
        const all = [];
        for (let i = 0; i < ids.length; i += BATCH_SIZE) {
            const batch = await Promise.all(
                ids.slice(i, i + BATCH_SIZE).map((id) => pokemonService.getById(id))
            );
            all.push(...batch);
            onBatch?.([...all]);
        }

        writeCache(all);
        return all;
    },
};
