const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch list of users
 */
export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

/**
 * Create a new user (simulated)
 */
export async function createUser(userData) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  const data = await res.json();
  // JSONPlaceholder returns an object with a new id
  return data;
}

/**
 * Update user (simulated)
 */
export async function updateUser(id, userData) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error('Failed to update user');
  }

  return res.json();
}

/**
 * Delete user (simulated)
 */
export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete user');
  }

  return {};
}
