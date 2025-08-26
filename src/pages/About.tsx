import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main style={{ padding: 24 }}>
      <h1>About</h1>
      <p>Strict TS + ESLint + Prettier + Vite alias + Routing + Query.</p>
      <p>
        <Link to="/">← Home</Link>
      </p>
    </main>
  );
}
