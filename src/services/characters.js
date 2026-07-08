export async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (!response.ok) {
    throw new Error('No se pudieron cargar los personajes');
  }

  const data = await response.json();
  return data.results;
}
