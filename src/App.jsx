import Header from './components/Header';
import Footer from './components/Footer';
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
      </main>

      <Footer members={teamMembers} />
    </div>
  );
}

export default App;
