import { useEffect, useState } from "react";
import { equiposService } from "../services/equiposService";

// S: solo maneja estado y lógica de equipos
export function useEquipos() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        setTeams(equiposService.getAll());
    }, []);

    function eliminar(index) {
        setTeams(equiposService.deleteByIndex(index));
    }

    const allPokemonIds = [...new Set(teams.flatMap((t) => t.pokemons))];

    return { teams, eliminar, allPokemonIds };
}
