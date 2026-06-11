"use client";
import { usePokemon } from "../../pokemon/hooks/usePokemon";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { useNuevoEquipo } from "../hooks/useNuevoEquipo";
import { NuevoEquipoView } from "../components/NuevoEquipoView";

// Componente "inteligente" — conecta hooks con vista
export function NuevoEquipoContainer() {
    const { pokemonData, loading } = usePokemon();
    const { spriteType, setSpriteType } = useSpritePreference();
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
            spriteType={spriteType}
            onSpriteTypeChange={setSpriteType}
        />
    );
}
