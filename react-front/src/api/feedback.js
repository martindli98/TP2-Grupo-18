import { API_URL } from './auth';

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
