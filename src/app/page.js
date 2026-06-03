export default function IndexPage() {
  return (
    <main className="indexPage">
      <h1 id="welcomeMessage">Bienvenido al creador de equipos Pokémon</h1>
      <a href="/new-team"><button id="newTeamButton" className="buttonsIndex">Crear nuevo equipo</button></a>
      <a href="/teams"><button id="existingTeamsButton" className="buttonsIndex">Ver equipos existentes</button></a>
    </main>
  );
}