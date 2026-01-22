import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "About us", path: "/aboutUs" },
    { name: "Contact", path: "/contact" },
  ];

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
    setActiveMobile(null);
  };

  return (
    <header className="relative z-50 w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => goTo("/")}
            className="flex items-center gap-2 text-xl font-bold cursor-pointer"
          >
            <div className="flex gap-1 text-blue-500">
              <span className="h-4 w-4 rotate-45 border-2 border-blue-500"></span>
              <span className="h-4 w-4 -rotate-45 border-2 border-blue-500"></span>
            </div>
            <span className="text-blue-500">Devmixx</span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 ${
                        isActive ? "text-blue-400" : "hover:text-blue-400"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <div className="flex cursor-pointer items-center gap-1 hover:text-blue-400">
                    {item.name}
                    <ChevronDown size={14} />
                  </div>
                )}

                {/* underline */}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

                {/* DROPDOWN */}
                {item.dropdown && (
                  <div className="invisible absolute top-10 left-0 min-w-[220px] rounded-lg bg-[#222] p-4 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="flex flex-col gap-3">
                      {item.dropdown.map((sub) => (
                        <li
                          key={sub.label}
                          onClick={() => goTo(sub.path)}
                          className="cursor-pointer text-sm text-gray-300 hover:text-blue-400"
                        >
                          {sub.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black`}
      >
        <div className="flex flex-col px-6 py-6 text-sm">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-3">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() =>
                  item.dropdown
                    ? setActiveMobile(
                        activeMobile === item.name ? null : item.name,
                      )
                    : goTo(item.path)
                }
              >
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown size={16} />}
              </div>

              {/* MOBILE DROPDOWN */}
              {item.dropdown && activeMobile === item.name && (
                <ul className="mt-3 flex flex-col gap-2 pl-4 text-gray-400">
                  {item.dropdown.map((sub) => (
                    <li
                      key={sub.label}
                      onClick={() => goTo(sub.path)}
                      className="cursor-pointer hover:text-blue-400"
                    >
                      {sub.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
