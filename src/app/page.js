export default function IndexPage() {
  return (
    <main className="indexPage">
      <div className="indexCard">
        <h1 id="welcomeMessage">Bienvenido al creador de equipos Pokémon</h1>
        <a href="/new-team"><button className="buttonsIndex">Crear nuevo equipo</button></a>
        <a href="/teams"><button className="buttonsIndex">Ver equipos existentes</button></a>
      </div>
    </main>
  );
}
