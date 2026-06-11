const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const BATCH_SIZE = 50;

export const pokemonService = {
    getById: async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) throw new Error(`Pokemon #${id} no encontrado`);
        return res.json();
    },

    // Obtiene todos los IDs de pokemon principales (sin formas alternativas)
    getAllIds: async () => {
        const res = await fetch(`${BASE_URL}?limit=2000`);
        const { results } = await res.json();
        return results
            .map((p) => parseInt(p.url.split("/").filter(Boolean).pop()))
            .filter((id) => id <= 1025);
    },

    // Carga todos los pokemon en batches, llamando onBatch con cada lote
    getAll: async (onBatch) => {
        const ids = await pokemonService.getAllIds();
        const all = [];
        for (let i = 0; i < ids.length; i += BATCH_SIZE) {
            const batch = await Promise.all(
                ids.slice(i, i + BATCH_SIZE).map((id) => pokemonService.getById(id))
            );
            all.push(...batch);
            onBatch?.([...all]);
        }
        return all;
    },
};
