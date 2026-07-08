import { useFetch } from '../hooks/useFetch';
import { getCharacters } from '../services/characters';

function CharacterList() {
  const { data: characters, loading, error } = useFetch(() => getCharacters(), []);

  if (loading) {
    return (
      <div className="status-box loading" role="status">
        <p>Cargando personajes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-box error" role="alert">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section>
      <h2>Personajes de Rick and Morty</h2>
      <div className="character-grid">
        {characters?.map((character) => (
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
