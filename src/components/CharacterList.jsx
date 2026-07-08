import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getCharacters } from '../services/characters';

function CharacterList({
  searchTerm,
  favorites,
  blockedCharacters,
  onToggleFavorite,
  onToggleBlockedCharacter,
  onLoadedCount,
}) {
  const { data: characters, loading, error } = useFetch(() => getCharacters(), []);

  useEffect(() => {
    if (onLoadedCount) {
      onLoadedCount(characters?.length ?? 0);
    }
  }, [characters, onLoadedCount]);

  const blockedIds = new Set((blockedCharacters || []).map((character) => character.id));

  const filteredCharacters = (characters || []).filter(
    (character) =>
      !blockedIds.has(character.id) &&
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
          filteredCharacters.map((character) => {
            const isFavorite = favorites.some((item) => item.id === character.id);
            const isBlocked = blockedIds.has(character.id);

            return (
              <article key={character.id} className="character-card">
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-image"
                />
                <h3 className="character-name">{character.name}</h3>
                <div className="card-actions">
                  <button
                    type="button"
                    className={`favorite-button ${isFavorite ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(character)}
                  >
                    {isFavorite ? '★ Favorito' : '☆ Favorito'}
                  </button>
                  <button
                    type="button"
                    className={`block-button ${isBlocked ? 'blocked' : ''}`}
                    onClick={() => onToggleBlockedCharacter(character)}
                  >
                    {isBlocked ? 'Desbloquear' : 'Bloquear'}
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <p className="status-box">No se encontraron personajes con ese nombre.</p>
        )}
      </div>
    </section>
  );
}

export default CharacterList;
