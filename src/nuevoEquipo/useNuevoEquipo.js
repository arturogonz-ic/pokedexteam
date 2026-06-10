import { useState } from "react";
import { equiposService } from "../equipos/equiposService";

const MAX_POKEMON = 10;

// S: solo maneja lógica de creación de equipo
export function useNuevoEquipo() {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [teamName, setTeamName] = useState("");
    const [teamCreator, setTeamCreator] = useState("");
    const [teamDescription, setTeamDescription] = useState("");

    function toggleSelect(id) {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                if (prev.size >= MAX_POKEMON) {
                    alert(`No puedes seleccionar más de ${MAX_POKEMON} Pokémon`);
                    return prev;
                }
                next.add(id);
            }
            return next;
        });
    }

    function crearEquipo() {
        if (!teamName || !teamCreator || !teamDescription) {
            alert("Por favor llena el nombre, creador y descripcion del equipo");
            return;
        }
        if (selectedIds.size === 0) {
            alert("Selecciona al menos un Pokémon");
            return;
        }
        equiposService.save({
            nombre: teamName,
            creador: teamCreator,
            descripcion: teamDescription,
            pokemons: [...selectedIds],
        });
        alert("¡Equipo creado exitosamente!");
        window.location.href = "/teams";
    }

    return {
        selectedIds,
        teamName, setTeamName,
        teamCreator, setTeamCreator,
        teamDescription, setTeamDescription,
        toggleSelect,
        crearEquipo,
        pokemonsSelected: selectedIds.size,
    };
}
