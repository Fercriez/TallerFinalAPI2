function Footer({ members }) {
  return (
    <footer className="footer">
      <h3>Integrantes del equipo</h3>
      <ul>
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
