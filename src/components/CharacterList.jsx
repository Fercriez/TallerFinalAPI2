import { useEffect, useState } from 'react';
import { getCharacters } from '../services/characters';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h2>Personajes de Rick and Morty</h2>
      <div className="character-grid">
        {characters.map((character) => (
          <article key={character.id} className="character-card">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <h3 className="character-name">{character.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CharacterList;
