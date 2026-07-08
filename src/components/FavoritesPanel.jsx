function FavoritesPanel({ favorites, onRemoveFavorite }) {
  if (favorites.length === 0) {
    return (
      <aside className="favorites-panel">
        <h3>Favoritos</h3>
        <p>No tienes personajes favoritos aún.</p>
      </aside>
    );
  }

  return (
    <aside className="favorites-panel">
      <h3>Favoritos</h3>
      <ul className="favorites-list">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="favorite-item">
            <span>{favorite.name}</span>
            <button type="button" onClick={() => onRemoveFavorite(favorite.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FavoritesPanel;
