// S: solo maneja la comunicación con el backend de equipos
// O: si mañana cambia la API, solo se toca este archivo (los hooks no se enteran)

// URL del backend Express. Configurable por variable de entorno para
// poder apuntar a producción sin tocar el código.
const API_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/equipos`;

export const equiposService = {
    getAll: async () => {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("No se pudieron cargar los equipos");
        return res.json();
    },

    getById: async (id) => {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("No se pudo cargar el equipo");
        return res.json();
    },

    save: async (equipo) => {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(equipo),
        });
        if (!res.ok) throw new Error("No se pudo guardar el equipo");
        return res.json();
    },

    // PATCH: actualización parcial de un equipo existente
    update: async (id, cambios) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cambios),
        });
        if (!res.ok) throw new Error("No se pudo actualizar el equipo");
        return res.json();
    },

    deleteById: async (id) => {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("No se pudo eliminar el equipo");
        return res.json(); // la API devuelve la lista ya actualizada
    },
};
