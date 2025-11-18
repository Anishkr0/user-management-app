const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Fetch all users
export async function fetchUsers() {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error('Failed to load users');
  }
  return res.json();
}

// Fetch one user by id
export async function fetchUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to load user');
  }
  return res.json();
}

// Create user (simulate)
export async function createUser(user) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error('Failed to create user');
  }

  return res.json();
}

// Update user (simulate)
export async function updateUser(id, user) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error('Failed to update user');
  }

  return res.json();
}

// Delete user (simulate)
export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete user');
  }

  return true;
}
