import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import FavoritesPanel from './components/FavoritesPanel';
import { useTeam } from './hooks/useTeam';

function App() {
  const teamMembers = useTeam();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = window.localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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

  return (
    <div className="app-shell">
      <Header title="Taller Final API 2" />

      <main className="main-content app-layout">
        <section className="hero-card">
          <h2>Bienvenido al proyecto</h2>
          <p>
            Esta es una base limpia para construir una aplicación escalable con React y Vite.
          </p>
        </section>

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
            onToggleFavorite={toggleFavorite}
          />
        </section>

        <FavoritesPanel favorites={favorites} onRemoveFavorite={removeFavorite} />
      </main>

      <Footer members={teamMembers} />
    </div>
  );
}

export default App;
