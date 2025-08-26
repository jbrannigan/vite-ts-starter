import { useQuery } from '@tanstack/react-query';

type Todo = { id: number; title: string; completed: boolean };

export default function Todos() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const r = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return (await r.json()) as Todo[];
    },
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <ul>
      {data!.map((t) => (
        <li key={t.id}>
          <input type="checkbox" checked={t.completed} readOnly /> {t.title}
        </li>
      ))}
    </ul>
  );
}
