"use client";
import { useState } from "react";
import { PokemonCard } from "../../pokemon/components/PokemonCard";
import { Button } from "../../shared/components/Button";
import { ConfirmDialog } from "../../shared/components/AlertDialog";

export function EquiposView({ teams, pokemonCache, onDelete, spriteType, fallbackSprite }) {
    const [confirmIndex, setConfirmIndex] = useState(null);

    return (
        <main className="w-full">
            <ConfirmDialog
                open={confirmIndex !== null}
                onClose={() => setConfirmIndex(null)}
                onConfirm={() => onDelete(confirmIndex)}
                title="Eliminar equipo"
                message="¿Estás seguro de que quieres eliminar este equipo? Esta acción no se puede deshacer."
            />
            <div className="grid place-items-center">
                {teams.length === 0 ? (
                    <p className="dark:text-white">No hay equipos creados aún.</p>
                ) : (
                    <div className="grid place-items-center gap-2.5 w-[90%]">
                        {teams.map((team, index) => (
                            <div key={index} className="grid [grid-template-rows:auto_auto_auto_auto] place-items-center gap-[5px] p-2.5 text-xl w-full shadow-[1px_3px_5px_2px_rgba(0,0,0,0.3)] dark:shadow-[1px_3px_5px_2px_rgba(0,0,0,0.6)] rounded-xl bg-white dark:bg-gray-800">
                                <h2 className="dark:text-white">{team.nombre}</h2>
                                <div className="text-base dark:text-gray-300">
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
                                <Button variant="danger" onClick={() => setConfirmIndex(index)}>
                                    Eliminar equipo
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
