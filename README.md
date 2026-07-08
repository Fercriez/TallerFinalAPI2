# Taller Final API 2

Proyecto base en React + Vite para desarrollar una aplicación escalable con una estructura organizada en componentes, hooks y servicios.

## Requisitos

- Node.js 18 o superior
- npm o pnpm

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura de carpetas sugerida

```text
src/
  components/
  hooks/
  services/
  App.jsx
  main.jsx
  index.css
```

## Integrantes

- Integrante 1
- Integrante 2
- Integrante 3

## Tecnologías y Origen de Datos

Este proyecto utiliza React y Vite para la interfaz de usuario. Para mostrar información dinámica, consumimos la API pública de Rick and Morty desde la ruta de personajes, permitiendo listar los personajes con su imagen y nombre en una grilla.

## Funcionalidades Principales

- Búsqueda en tiempo real de personajes por nombre desde la barra superior.
- Listado dinámico de personajes consumidos desde la API pública de Rick and Morty.
- Gestión de favoritos con botón en cada tarjeta y panel lateral.
- Bloqueo de personajes desde cada tarjeta; los personajes bloqueados desaparecen de los resultados y, si estaban en favoritos, se eliminan automáticamente.
- Estados visuales de carga y error para mejorar la experiencia del usuario.

## Hook personalizado useFetch

El hook useFetch centraliza la lógica de carga de datos para cualquier solicitud asíncrona. Recibe una función que devuelve una promesa, gestiona los estados de loading, error y data, y evita repetir la misma estructura de useEffect en distintos componentes.

### Manejo de errores

Cuando la petición falla, el hook guarda un mensaje de error y el componente muestra un estado visual claro mediante un bloque de advertencia. Esto ayuda a que la interfaz informe al usuario sin romper la experiencia.