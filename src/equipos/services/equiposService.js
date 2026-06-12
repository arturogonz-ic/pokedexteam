// S: solo maneja la comunicación con el backend de equipos
// O: si mañana cambia la API, solo se toca este archivo (los hooks no se enteran)

// URL del backend Express. Configurable por variable de entorno para
// poder apuntar a producción sin tocar el código.
const API_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/equipos`;

// Esperas crecientes (ms) entre reintentos. Suman ~29s, suficiente para
// cubrir el "cold start" de Render (la instancia free tarda en despertar).
const ESPERAS = [2000, 4000, 8000, 15000];

const pausa = (ms) => new Promise((r) => setTimeout(r, ms));

// Envoltorio de fetch con reintentos SOLO ante fallo de red.
// Cuando el backend está dormido no devuelve headers CORS, así que fetch()
// LANZA ("Failed to fetch"): ahí reintentamos. Si el server responde (aunque
// sea 404 legítimo), fetch resuelve y devolvemos sin reintentar.
async function fetchConReintento(url, options) {
    for (let intento = 0; ; intento++) {
        try {
            return await fetch(url, options);
        } catch (err) {
            if (intento >= ESPERAS.length) throw err; // agotados los reintentos
            await pausa(ESPERAS[intento]);
        }
    }
}

export const equiposService = {
    getAll: async () => {
        const res = await fetchConReintento(API_URL);
        if (!res.ok) throw new Error("No se pudieron cargar los equipos");
        return res.json();
    },

    getById: async (id) => {
        const res = await fetchConReintento(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("No se pudo cargar el equipo");
        return res.json();
    },

    save: async (equipo) => {
        const res = await fetchConReintento(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(equipo),
        });
        if (!res.ok) throw new Error("No se pudo guardar el equipo");
        return res.json();
    },

    // PATCH: actualización parcial de un equipo existente
    update: async (id, cambios) => {
        const res = await fetchConReintento(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cambios),
        });
        if (!res.ok) throw new Error("No se pudo actualizar el equipo");
        return res.json();
    },

    deleteById: async (id) => {
        const res = await fetchConReintento(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("No se pudo eliminar el equipo");
        return res.json(); // la API devuelve la lista ya actualizada
    },
};
