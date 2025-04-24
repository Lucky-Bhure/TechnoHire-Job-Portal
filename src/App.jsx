// components/DashboardLayout.js
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <header>Dashboard Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
