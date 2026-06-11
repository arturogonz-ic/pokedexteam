import { PokemonCard } from "../../pokemon/components/PokemonCard";

export function EquiposView({ teams, pokemonCache, onDelete, spriteType, fallbackSprite }) {
    return (
        <main className="w-full">
            <div className="grid place-items-center">
                {teams.length === 0 ? (
                    <p>No hay equipos creados aún.</p>
                ) : (
                    <div className="grid place-items-center gap-2.5 w-[90%]">
                        {teams.map((team, index) => (
                            <div key={index} className="grid [grid-template-rows:auto_auto_auto_auto] place-items-center gap-[5px] p-2.5 text-xl w-full shadow-[1px_3px_5px_2px_rgba(0,0,0,0.3)] rounded-xl">
                                <h2>{team.nombre}</h2>
                                <div className="text-base">
                                    <p>
                                        <strong>Creador: </strong>{team.creador}{" "}
                                        <strong>Descripción: </strong>{team.descripcion || "Sin descripción"}
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-[17px] p-[15px] w-full">
                                    {team.pokemons.map((id) => (
                                        <div key={id} className="w-[250px] shrink-0">
                                            <PokemonCard id={id} pokemon={pokemonCache[id]} spriteType={spriteType} fallbackSprite={fallbackSprite} />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => onDelete(index)}
                                    className="font-bold cursor-grab transition-all duration-300 ease-in-out rounded-xl px-[15px] py-2 text-[rgb(255,67,67)] hover:scale-110 hover:text-white hover:bg-[rgb(225,67,67)] active:cursor-grabbing"
                                >
                                    Eliminar equipo
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
