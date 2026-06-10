"use client";
import { usePokemon } from "../pokemon/usePokemon";
import { useNuevoEquipo } from "./useNuevoEquipo";
import { NuevoEquipoView } from "./NuevoEquipoView";

// Componente "inteligente" — conecta hooks con vista
export function NuevoEquipoContainer() {
    const { pokemonData, loading } = usePokemon();
    const {
        selectedIds, pokemonsSelected,
        teamName, setTeamName,
        teamCreator, setTeamCreator,
        teamDescription, setTeamDescription,
        toggleSelect, crearEquipo,
    } = useNuevoEquipo();

    return (
        <NuevoEquipoView
            pokemonData={pokemonData}
            loading={loading}
            selectedIds={selectedIds}
            pokemonsSelected={pokemonsSelected}
            teamName={teamName}
            teamCreator={teamCreator}
            teamDescription={teamDescription}
            onTeamNameChange={setTeamName}
            onTeamCreatorChange={setTeamCreator}
            onTeamDescriptionChange={setTeamDescription}
            onToggle={toggleSelect}
            onCrear={crearEquipo}
        />
    );
}
