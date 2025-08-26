import { Link } from 'react-router-dom';
import Todos from '@/features/examples/Todos';

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Home</h1>
      <Todos />
      <p>
        <Link to="/about">About →</Link>
      </p>
    </main>
  );
}
