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

export async function createFeedback({ message, token } = {}) {
  token = token || localStorage.getItem('jwt');
  if (!token) throw new Error('No se encontró token de autenticación');

  const res = await fetch(`${API_URL}/api/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      data: { message }
    })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || data?.message || JSON.stringify(data));
  return data;
}

export const fetchPlans = async () => {
  const res = await fetch(`${API_URL}/api/plans`);
  if (!res.ok) {
    throw new Error("Error al obtener los planes");
  }
  const data = await res.json();
  return data.data;
};
