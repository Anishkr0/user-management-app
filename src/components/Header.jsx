import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
      <h1 className="text-2xl font-semibold text-slate-900">
        User Management
      </h1>

      <nav className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              'text-sm font-medium',
              'text-slate-600 hover:text-slate-900',
              isActive ? 'underline' : '',
            ].join(' ')
          }
        >
          Home
        </NavLink>
      </nav>
    </header>
  );
}
