export const API_URL = 'http://localhost:1337';

export async function register({ username, email, password }) {
  const res = await fetch(`${API_URL}/api/auth/local/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || 'Error al registrar');
  return data;
}

export async function login({ identifier, password }) {
  const res = await fetch(`${API_URL}/api/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || 'Error al iniciar sesión');
  return data;
}
