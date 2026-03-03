import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/buildings', label: 'Buildings', icon: '🏢' },
  { to: '/flats', label: 'Flats', icon: '🏠' },
  { to: '/tenants', label: 'Tenants', icon: '👥' },
  { to: '/rent', label: 'Rent Tracking', icon: '💰' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-10">
      {/* Brand */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg">
            🏗️
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900">TenantHub</h1>
            <p className="text-xs text-gray-400">Property Management</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">v1.0.0</p>
      </div>
    </aside>
  );
}
