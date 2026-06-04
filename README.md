# Pokedex Team Builder

Aplicacion web para crear y gestionar equipos Pokemon, construida con Next.js y la PokeAPI.

## Funcionalidades

- **Crear equipos** con nombre, creador y descripcion
- **Seleccionar hasta 10 Pokemon** de los 150 originales de Kanto
- **Ver equipos existentes** con las tarjetas de cada Pokemon (sprite, nombre y tipos)
- **Eliminar equipos** creados
- **Persistencia local** con localStorage (los equipos se guardan en el navegador)

## Tecnologias

- [Next.js 16](https://nextjs.org/) - Framework de React
- [PokeAPI](https://pokeapi.co/) - API publica de datos Pokemon
- [Poppins](https://fonts.google.com/specimen/Poppins) - Tipografia via next/font
- CSS personalizado con grid y flexbox

## Estructura del proyecto

```
src/app/
  page.js            -> /           (Pagina de inicio)
  new-team/page.js   -> /new-team   (Crear nuevo equipo)
  teams/page.js      -> /teams      (Ver equipos existentes)
  globals.css                       (Estilos globales)
  layout.js                         (Layout raiz con fuente Poppins)
```

## Instalacion

```bash
git clone https://github.com/arturogonz-ic/pokedexteam.git
cd pokedexteam
npm install
```

## Uso

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build

```bash
npm run build
npm start
```

## Autor

Arturo Gonzalez - [arturogonz-ic](https://github.com/arturogonz-ic)
