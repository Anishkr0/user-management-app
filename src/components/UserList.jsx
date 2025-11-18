import UserItem from './UserItem';

export default function UserList({ users, onEdit, onDelete }) {
  if (!users || users.length === 0) {
    return (
      <div className="px-4 py-6 text-sm text-slate-500">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-slate-700">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Phone</th>
            <th className="px-4 py-2 font-semibold w-40">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserItem
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
