"use client";
import { useState } from "react";
import Link from "next/link";
import { PokemonCard } from "../../pokemon/components/PokemonCard";
import { Button } from "../../shared/components/Button";
import { ConfirmDialog } from "../../shared/components/AlertDialog";

export function EquiposView({ teams, pokemonCache, onDelete, spriteType, fallbackSprite }) {
    const [confirmId, setConfirmId] = useState(null);

    return (
        <main className="w-full">
            <ConfirmDialog
                open={confirmId !== null}
                onClose={() => setConfirmId(null)}
                onConfirm={() => onDelete(confirmId)}
                title="Eliminar equipo"
                message="¿Estás seguro de que quieres eliminar este equipo? Esta acción no se puede deshacer."
            />
            <div className="grid place-items-center">
                {teams.length === 0 ? (
                    <p className="dark:text-white">No hay equipos creados aún.</p>
                ) : (
                    <div className="grid place-items-center gap-2.5 w-[90%]">
                        {teams.map((team) => (
                            <div key={team.id} className="grid [grid-template-rows:auto_auto_auto_auto] place-items-center gap-[5px] p-2.5 text-xl w-full shadow-[1px_3px_5px_2px_rgba(0,0,0,0.3)] dark:shadow-[1px_3px_5px_2px_rgba(0,0,0,0.6)] rounded-xl bg-white dark:bg-gray-800">
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
                                <div className="flex gap-2.5">
                                    <Link href={`/new-team?id=${team.id}`}>
                                        <Button>Editar equipo</Button>
                                    </Link>
                                    <Button variant="danger" onClick={() => setConfirmId(team.id)}>
                                        Eliminar equipo
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
