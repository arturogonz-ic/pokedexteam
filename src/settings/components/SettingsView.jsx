import { SPRITE_OPTIONS } from "../../pokemon/utils/spriteUtils";

export function SettingsView({ spriteType, onSpriteTypeChange, fallbackSprite, onFallbackChange }) {
    return (
        <main>
            <header>
                <div id="topSection">
                    <h1 id="title">Configuración</h1>
                </div>
            </header>

            <div id="settingsContent">
                <div className="settingRow">
                    <label className="settingLabel">Estilo de sprite</label>
                    <p className="settingDesc">Sprite que se muestra en las tarjetas de Pokémon.</p>
                    <select
                        className="settingSelect"
                        value={spriteType}
                        onChange={(e) => onSpriteTypeChange(e.target.value)}
                    >
                        {SPRITE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className="settingRow">
                    <label className="settingLabel">Sprite de respaldo</label>
                    <p className="settingDesc">Se usa cuando el Pokémon no tiene sprite del estilo seleccionado.</p>
                    <select
                        className="settingSelect"
                        value={fallbackSprite}
                        onChange={(e) => onFallbackChange(e.target.value)}
                    >
                        {SPRITE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </main>
    );
}
