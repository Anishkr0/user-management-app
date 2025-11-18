import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchUser } from '../services/usersApi';

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        setLoading(true);
        setError('');
        const data = await fetchUser(id);
        if (isMounted) setUser(data);
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load user');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Header />

      {error && <ErrorMessage message={error} />}

      {loading ? (
        <Spinner />
      ) : !user ? (
        <div className="text-sm text-slate-500">
          User not found.
        </div>
      ) : (
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm p-4 space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">
            User Details
          </h2>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium text-slate-700">Name: </span>
              {user.name}
            </p>
            <p>
              <span className="font-medium text-slate-700">Username: </span>
              {user.username}
            </p>
            <p>
              <span className="font-medium text-slate-700">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="font-medium text-slate-700">Phone: </span>
              {user.phone}
            </p>
            <p>
              <span className="font-medium text-slate-700">Website: </span>
              {user.website}
            </p>
          </div>

          <button
            className="inline-flex items-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            onClick={() => navigate('/')}
          >
            ← Back to Users
          </button>
        </div>
      )}
    </div>
  );
}
