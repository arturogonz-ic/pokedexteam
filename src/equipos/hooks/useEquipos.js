import { useEffect, useState } from "react";
import { equiposService } from "../services/equiposService";

// S: solo maneja estado y lógica de equipos
export function useEquipos() {
    const [teams, setTeams] = useState([]);

    // Carga inicial: ahora getAll() es asíncrono (va a la red), así que
    // usamos async dentro del efecto y guardamos el resultado al resolver.
    useEffect(() => {
        equiposService
            .getAll()
            .then(setTeams)
            .catch((err) => console.error("Error cargando equipos:", err));
    }, []);

    async function eliminar(id) {
        const restantes = await equiposService.deleteById(id);
        setTeams(restantes);
    }

    const allPokemonIds = [...new Set(teams.flatMap((t) => t.pokemons))];

    return { teams, eliminar, allPokemonIds };
}
