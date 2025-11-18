import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { useUsers } from '../hooks/useUsers';
import {
  createUser,
  updateUser,
  deleteUser,
} from '../services/usersApi';

export default function Home() {
  const [creating, setCreating] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    users,
    loading,
    error,
    addUser,
    updateUserInState,
    removeUser,
  } = useUsers();

  async function handleCreate(newUser) {
    try {
      setSubmitting(true);
      setSuccess('');
      const created = await createUser(newUser);
      addUser(created);
      setSuccess('User created successfully!');
      setCreating(false);
    } catch (err) {
      // hook error handles fetchUsers only; here we might show toast later
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(updatedUser) {
    try {
      setSubmitting(true);
      setSuccess('');
      const saved = await updateUser(editingUserId, {
        ...updatedUser,
        id: editingUserId,
      });
      updateUserInState(saved);
      setSuccess('User updated successfully!');
      setEditingUserId(null);
    } catch (err) {
      // could show error UI here
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteClick(id) {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (!confirmDelete) return;

    try {
      setSuccess('');
      await deleteUser(id);
      removeUser(id);
      setSuccess('User deleted successfully!');
    } catch (err) {
      // could show error UI here
    }
  }

  function handleShowCreate() {
    setEditingUserId(null);
    setCreating(true);
    setSuccess('');
  }

  function handleEditClick(id) {
    setCreating(false);
    setEditingUserId(id);
    setSuccess('');
    navigate('/');
  }

  const editingUser =
    editingUserId != null
      ? users.find(u => u.id === editingUserId)
      : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Header />

      {error && <ErrorMessage message={error} />}
      {success && (
        <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
          {success}
        </div>
      )}

      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Users
          </h2>
          <p className="text-sm text-slate-500">
            Manage users with create, update, delete and detail view.
          </p>
        </div>

        <button
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          onClick={handleShowCreate}
        >
          + Create New User
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <Spinner />
          ) : (
            <UserList
              users={users}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          )}
        </div>

        {creating && (
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Create User
            </h3>
            <UserForm onSubmit={handleCreate} submitting={submitting} />
          </div>
        )}

        {editingUser && (
          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Edit User
            </h3>
            <UserForm
              initialData={editingUser}
              onSubmit={handleUpdate}
              submitting={submitting}
            />
          </div>
        )}
      </div>
    </div>
  );
}
