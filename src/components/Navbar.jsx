import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navMenus = [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <nav>
      <div className="container flex justify-between items-center py-3 sm:py-0   beig">
        <h1 className="text-3xl font-bold">Tayyba Saveera</h1>
        {/* desktop menu */}
        <div className="hidden sm:block">
          <ul className="flex items-center gap-4">
            {navMenus.map((menu) => {
              return (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer "
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* mobile menu*/}
        <div className="block sm:hidden ease-in-out ">
          <div className="flex gap-2">
            <button className="cursor-pointer " onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
              {showMenu && (
                <div className="fixed  top-16 bg-white shadow-md rounded-b-xl z-10 py-5 left-0 right-0">
                  <ul className="flex flex-col items-end gap-1">
                    {navMenus.map((menu) => {
                      return (
                        <li key={menu.name}>
                          <a
                            href={menu.link}
                            className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                          >
                            {menu.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
