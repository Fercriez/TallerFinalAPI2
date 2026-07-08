import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import FavoritesPanel from './components/FavoritesPanel';
import StatsPanel from './components/StatsPanel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTeam } from './hooks/useTeam';

function App() {
  const teamMembers = useTeam();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [blockedCharacters, setBlockedCharacters] = useLocalStorage('blockedCharacters', []);
  const [totalLoaded, setTotalLoaded] = useState(0);

  useEffect(() => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (favorite) => !blockedCharacters.some((blocked) => blocked.id === favorite.id)
      )
    );
  }, [blockedCharacters]);

  const toggleFavorite = (character) => {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.some((item) => item.id === character.id);

      if (isFavorite) {
        return currentFavorites.filter((item) => item.id !== character.id);
      }

      return [...currentFavorites, character];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((currentFavorites) => currentFavorites.filter((item) => item.id !== id));
  };

  const toggleBlockedCharacter = (character) => {
    setBlockedCharacters((currentBlocked) => {
      const isBlocked = currentBlocked.some((item) => item.id === character.id);

      if (isBlocked) {
        return currentBlocked.filter((item) => item.id !== character.id);
      }

      return [...currentBlocked, character];
    });
  };

  return (
    <div className="app-shell">
      <Header title="Taller Final API 2" />

      <main className="main-content">
        <StatsPanel
          totalLoaded={totalLoaded}
          favoritesCount={favorites.length}
          blockedCount={blockedCharacters.length}
        />

        <section className="hero-card intro-card">
          <h2>Bienvenido al proyecto</h2>
          <p>
            Esta es una base limpia para construir una aplicación escalable con React y Vite.
          </p>
        </section>

        <section className="app-layout">
          <section className="hero-card character-section">
          <label className="search-label" htmlFor="character-search">
            Buscar personaje
          </label>
          <input
            id="character-search"
            className="search-input"
            type="text"
            placeholder="Escribe un nombre"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <CharacterList
            searchTerm={searchTerm}
            favorites={favorites}
            blockedCharacters={blockedCharacters}
            onToggleFavorite={toggleFavorite}
            onToggleBlockedCharacter={toggleBlockedCharacter}
            onLoadedCount={setTotalLoaded}
          />
        </section>

          <FavoritesPanel favorites={favorites} onRemoveFavorite={removeFavorite} />
        </section>
      </main>

      <Footer members={teamMembers} />
    </div>
  );
}

export default App;
