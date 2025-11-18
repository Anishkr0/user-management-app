import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/usersApi';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      try {
        setLoading(true);
        setError('');
        const data = await fetchUsers();
        if (isMounted) {
          setUsers(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load users');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  function addUser(user) {
    setUsers(prev => [...prev, { ...user, id: prev.length + 1000 }]); // fake id
  }

  function updateUserInState(updated) {
    setUsers(prev =>
      prev.map(u => (u.id === updated.id ? updated : u))
    );
  }

  function removeUser(id) {
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  return {
    users,
    loading,
    error,
    addUser,
    updateUserInState,
    removeUser,
  };
}
