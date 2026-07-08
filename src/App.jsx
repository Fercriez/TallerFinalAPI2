import Header from './components/Header';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import { useTeam } from './hooks/useTeam';

function App() {
  const teamMembers = useTeam();

  return (
    <div className="app-shell">
      <Header title="Taller Final API 2" />

      <main className="main-content">
        <section className="hero-card">
          <h2>Bienvenido al proyecto</h2>
          <p>
            Esta es una base limpia para construir una aplicación escalable con React y Vite.
          </p>
        </section>

        <section className="hero-card character-section">
          <CharacterList />
        </section>
      </main>

      <Footer members={teamMembers} />
    </div>
  );
}

export default App;
