import { PokemonCardExtended } from "../../pokemon/components/PokemonCard";
import { FILTER_OPTIONS } from "../../pokemon/utils/filterUtils";
import { Button } from "../../shared/components/Button";
import { AlertDialog } from "../../shared/components/AlertDialog";

export function NuevoEquipoView({
    pokemonData, loading, selectedIds, pokemonsSelected,
    teamName, teamCreator, teamDescription,
    onTeamNameChange, onTeamCreatorChange, onTeamDescriptionChange,
    onToggle, onCrear,
    spriteType, fallbackSprite,
    filter, onFilterChange,
    dialog, onCloseDialog,
}) {
    const atLimit = pokemonsSelected === 0 || pokemonsSelected === 10;

    return (
        <main className="w-full">
            <AlertDialog
                open={!!dialog}
                onClose={() => { onCloseDialog(); dialog?.onClose?.(); }}
                title={dialog?.title ?? ""}
                message={dialog?.message ?? ""}
            />
            <header className="bg-white dark:bg-gray-900 pb-[10px] w-full">
                <div className="grid gap-[10px]">
                    <div className="flex justify-between items-center border-b border-[#ababab] mb-[5px] mx-[5px]">
                        {/* topSection vacío — título en navbar */}
                    </div>
                    <div className="grid [grid-template-columns:31%_31%_36%] gap-[5px] w-full h-[45px] justify-center">
                        <input type="text" placeholder="Nombre del Equipo" required
                            className="w-full p-2 border border-[#adadad] dark:border-gray-600 rounded-[3px] bg-white dark:bg-gray-800 dark:text-white focus:scale-[1.03] transition-all duration-300"
                            value={teamName} onChange={(e) => onTeamNameChange(e.target.value)} />
                        <input type="text" placeholder="Creador del Equipo" required
                            className="w-full p-2 border border-[#adadad] dark:border-gray-600 rounded-[3px] bg-white dark:bg-gray-800 dark:text-white focus:scale-[1.03] transition-all duration-300"
                            value={teamCreator} onChange={(e) => onTeamCreatorChange(e.target.value)} />
                        <input type="text" placeholder="Descripción" required
                            className="w-full p-2 border border-[#adadad] dark:border-gray-600 rounded-[3px] bg-white dark:bg-gray-800 dark:text-white focus:scale-[1.03] transition-all duration-300"
                            value={teamDescription} onChange={(e) => onTeamDescriptionChange(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between px-[15px]">
                        <p className={`transition-all duration-500 ${atLimit ? "text-red-500" : "text-black dark:text-white"}`}>
                            Pokémon seleccionados: {pokemonsSelected}/10
                        </p>
                        <div className="flex items-center gap-[10px]">
                            <select
                                value={filter}
                                onChange={(e) => onFilterChange(e.target.value)}
                                className="border border-[#cccccc] dark:border-gray-600 rounded-[25px] bg-[#e6e6e6] dark:bg-gray-700 dark:text-white px-[10px] py-[5px] transition-all duration-300 hover:scale-110 hover:cursor-grab hover:bg-[#dddddd] dark:hover:bg-gray-600 hover:border-[#999999]"
                            >
                                {FILTER_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                            <Button
                                onClick={onCrear}
                                className="rounded-[25px] text-xl py-[15px] px-[80px] mr-[10px] hover:scale-[1.04]"
                            >
                                ! Crear !
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] place-items-center gap-[15px] p-[10px_25px]">
                {pokemonData.length === 0 ? (
                    <p>Cargando Pokémon...</p>
                ) : (
                    <>
                        {pokemonData.map((pokemon) => (
                            <PokemonCardExtended
                                key={pokemon.id}
                                pokemon={pokemon}
                                isSelected={selectedIds.has(pokemon.id)}
                                onToggle={onToggle}
                                spriteType={spriteType}
                                fallbackSprite={fallbackSprite}
                            />
                        ))}
                        {loading && <p className="col-span-full text-center text-gray-500">Cargando más Pokémon...</p>}
                    </>
                )}
            </div>
        </main>
    );
}
