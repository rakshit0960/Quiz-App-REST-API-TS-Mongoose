import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="ml-1/5 p-8 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}