// S: solo maneja persistencia de equipos en localStorage
// O: abierto para extender (ej. API backend) sin tocar los hooks

const STORAGE_KEY = "teams";

export const equiposService = {
    getAll: () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],

    save: (equipo) => {
        const equipos = equiposService.getAll();
        equipos.push(equipo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(equipos));
    },

    deleteByIndex: (index) => {
        const equipos = equiposService.getAll().filter((_, i) => i !== index);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(equipos));
        return equipos;
    },
};
