import { useState } from "react";
import { useRouter } from "next/navigation";
import { equiposService } from "../../equipos/services/equiposService";

const MAX_POKEMON = 10;

export function useNuevoEquipo() {
    const router = useRouter();
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [teamName, setTeamName] = useState("");
    const [teamCreator, setTeamCreator] = useState("");
    const [teamDescription, setTeamDescription] = useState("");
    const [filter, setFilter] = useState("all");
    const [dialog, setDialog] = useState(null); // { title, message, onClose? }

    function closeDialog() { setDialog(null); }

    function toggleSelect(id) {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                if (prev.size >= MAX_POKEMON) {
                    setDialog({ title: "Límite alcanzado", message: `No puedes seleccionar más de ${MAX_POKEMON} Pokémon.` });
                    return prev;
                }
                next.add(id);
            }
            return next;
        });
    }

    function crearEquipo() {
        if (!teamName || !teamCreator || !teamDescription) {
            setDialog({ title: "Campos incompletos", message: "Por favor llena el nombre, creador y descripción del equipo." });
            return;
        }
        if (selectedIds.size === 0) {
            setDialog({ title: "Sin Pokémon", message: "Selecciona al menos un Pokémon." });
            return;
        }
        equiposService.save({
            nombre: teamName,
            creador: teamCreator,
            descripcion: teamDescription,
            pokemons: [...selectedIds],
        });
        setDialog({ title: "¡Éxito!", message: "Equipo creado exitosamente.", onClose: () => router.push("/teams") });
    }

    return {
        selectedIds,
        teamName, setTeamName,
        teamCreator, setTeamCreator,
        teamDescription, setTeamDescription,
        toggleSelect,
        crearEquipo,
        pokemonsSelected: selectedIds.size,
        filter, setFilter,
        dialog, closeDialog,
    };
}
