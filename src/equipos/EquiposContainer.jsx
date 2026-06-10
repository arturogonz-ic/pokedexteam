import { useEquipos } from "./useEquipos";
import { usePokemonCache } from "../pokemon/usePokemon";
import { EquiposView } from "./EquiposView";

// Componente "inteligente" — conecta hooks con vista
export function EquiposContainer() {
    const { teams, eliminar, allPokemonIds } = useEquipos();
    const pokemonCache = usePokemonCache(allPokemonIds);

    return <EquiposView teams={teams} pokemonCache={pokemonCache} onDelete={eliminar} />;
}
