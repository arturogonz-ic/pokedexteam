"use client";
import { EquiposContainer } from "../../equipos/containers/EquiposContainer";

export default function TeamsPage() {
    return (
        <main>
            <header>
                <button className="backButton"><a href="/">＜ Regresar</a></button>
                <div id="topSection">
                    <h1 id="title">Equipos existentes</h1>
                </div>
            </header>
            <div className="center">
                <EquiposContainer />
            </div>
        </main>
    );
}
