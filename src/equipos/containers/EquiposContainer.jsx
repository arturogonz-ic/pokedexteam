import { useEquipos } from "../hooks/useEquipos";
import { usePokemonCache } from "../../pokemon/hooks/usePokemon";
import { EquiposView } from "../components/EquiposView";

// Componente "inteligente" — conecta hooks con vista
export function EquiposContainer() {
    const { teams, eliminar, allPokemonIds } = useEquipos();
    const pokemonCache = usePokemonCache(allPokemonIds);

    return <EquiposView teams={teams} pokemonCache={pokemonCache} onDelete={eliminar} />;
}
