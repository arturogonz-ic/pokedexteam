"use client";
import { usePokemon } from "../../pokemon/hooks/usePokemon";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { useNuevoEquipo } from "../hooks/useNuevoEquipo";
import { filterPokemon } from "../../pokemon/utils/filterUtils";
import { NuevoEquipoView } from "../components/NuevoEquipoView";

// Componente "inteligente" — conecta hooks con vista
export function NuevoEquipoContainer() {
    const { pokemonData, loading } = usePokemon();
    const { spriteType, fallbackSprite } = useSpritePreference();
    const {
        selectedIds, pokemonsSelected,
        teamName, setTeamName,
        teamCreator, setTeamCreator,
        teamDescription, setTeamDescription,
        toggleSelect, crearEquipo,
        filter, setFilter,
        dialog, closeDialog,
    } = useNuevoEquipo();

    const filteredPokemon = filterPokemon(pokemonData, filter);

    return (
        <NuevoEquipoView
            pokemonData={filteredPokemon}
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
            fallbackSprite={fallbackSprite}
            filter={filter}
            onFilterChange={setFilter}
            dialog={dialog}
            onCloseDialog={closeDialog}
        />
    );
}
