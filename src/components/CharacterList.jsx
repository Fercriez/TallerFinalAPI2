import { useFetch } from '../hooks/useFetch';
import { getCharacters } from '../services/characters';

function CharacterList({ searchTerm }) {
  const { data: characters, loading, error } = useFetch(() => getCharacters(), []);

  const filteredCharacters = (characters || []).filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <article key={character.id} className="character-card">
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <h3 className="character-name">{character.name}</h3>
            </article>
          ))
        ) : (
          <p className="status-box">No se encontraron personajes con ese nombre.</p>
        )}
      </div>
    </section>
  );
}

export default CharacterList;
