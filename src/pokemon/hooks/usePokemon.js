import { useEffect, useState } from "react";
import { pokemonService } from "../services/pokemonService";

// S: solo maneja estado y lógica de negocio de pokemon
// I: expone solo lo que los componentes necesitan
export function usePokemon() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        pokemonService
            .getRange(1, 150)
            .then((results) => { if (mounted) setPokemonData(results); })
            .finally(() => setLoading(false));
        return () => { mounted = false; };
    }, []);

    return { pokemonData, loading };
}

export function usePokemonCache(ids) {
    const [cache, setCache] = useState({});

    useEffect(() => {
        if (!ids.length) return;
        Promise.all(
            ids.map((id) =>
                pokemonService.getById(id).then((data) => ({
                    id,
                    data: {
                        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                        sprite: data.sprites.other.home?.front_default || data.sprites.front_default,
                        types: data.types.map((t) => t.type.name),
                    },
                }))
            )
        ).then((results) => {
            const map = {};
            results.forEach(({ id, data }) => { map[id] = data; });
            setCache(map);
        });
    }, [ids.join(",")]);

    return cache;
}
