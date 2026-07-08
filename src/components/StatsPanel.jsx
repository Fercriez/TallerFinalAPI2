function StatsPanel({ totalLoaded, favoritesCount, blockedCount }) {
  return (
    <section className="hero-card stats-panel" aria-label="Estadísticas del proyecto">
      <div className="stats-grid">
        <article className="stat-card">
          <span className="stat-label">Total cargada</span>
          <strong className="stat-value">{totalLoaded}</strong>
        </article>
        <article className="stat-card">
          <span className="stat-label">Favoritos</span>
          <strong className="stat-value">{favoritesCount}</strong>
        </article>
        <article className="stat-card">
          <span className="stat-label">Bloqueados</span>
          <strong className="stat-value">{blockedCount}</strong>
        </article>
      </div>
    </section>
  );
}

export default StatsPanel;
