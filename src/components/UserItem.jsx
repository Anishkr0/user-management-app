import { Link } from 'react-router-dom';

export default function UserItem({ user, onEdit, onDelete }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-4 py-2 align-middle">
        <Link
          to={`/users/${user.id}`}
          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
        >
          {user.name}
        </Link>
      </td>
      <td className="px-4 py-2 align-middle text-slate-700">
        {user.email}
      </td>
      <td className="px-4 py-2 align-middle text-slate-700">
        {user.phone}
      </td>
      <td className="px-4 py-2 align-middle">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center rounded-md bg-slate-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
            onClick={() => onEdit(user.id)}
          >
            Edit
          </button>
          <button
            className="inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
