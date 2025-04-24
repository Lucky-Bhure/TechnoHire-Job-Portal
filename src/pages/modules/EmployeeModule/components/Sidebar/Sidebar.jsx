import { FaHome, FaBuilding, FaBriefcase, FaClipboardList, FaBookmark, FaReceipt, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", icon: <FaHome />, path: "overview" },
  { name: "Company Profile", icon: <FaBuilding />, path: "company-profile" },
  { name: "Post a Job", icon: <FaBriefcase />, path: "post-job" },
  { name: "Manage Job", icon: <FaClipboardList />, path: "manage-jobs" },
  { name: "Saved Candidates", icon: <FaBookmark />, path: "saved-candidates" },
  { name: "Plans & Bills", icon: <FaReceipt />, path: "plans-bills" },
  { name: "Settings", icon: <FaCog />, path: "settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen">
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 p-2 text-gray-700 hover:bg-purple-100 rounded-md"
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
