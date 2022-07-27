import { Icon } from "../../Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            exact
            to={"/"}
            href="#"
            className={({ isActive }) =>
              `h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded px-4 ${
                isActive ? "bg-active text-white" : ""
              }`
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/search"}
            href="#"
            className={({ isActive }) =>
              isActive
                ? "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded bg-active text-white px-4 "
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4  "
            }
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/collection"}
            href="#"
            className={({ isActive }) =>
              isActive
                ? "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded bg-active text-white px-4 "
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4  "
            }
          >
            <Icon name="collection" />
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
