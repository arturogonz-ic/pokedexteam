"use client";
import { useEquipos } from "../hooks/useEquipos";
import { usePokemonCache } from "../../pokemon/hooks/usePokemon";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { EquiposView } from "../components/EquiposView";

// Componente "inteligente" — conecta hooks con vista
export function EquiposContainer() {
    const { teams, eliminar, allPokemonIds } = useEquipos();
    const pokemonCache = usePokemonCache(allPokemonIds);
    const { spriteType, setSpriteType } = useSpritePreference();

    return (
        <EquiposView
            teams={teams}
            pokemonCache={pokemonCache}
            onDelete={eliminar}
            spriteType={spriteType}
            onSpriteTypeChange={setSpriteType}
        />
    );
}
