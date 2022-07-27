import logo from "../image/logo.svg";
import Menu from "./Sidebar/Menu";
import Playlist from "./Sidebar/Playlist";
import Download from "./Sidebar/Download";
import { Icon } from "../Icons";

function SideBar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="" className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex group text-sm text-link hover:text-white"
            >
              <span className="w-6 h-6 flex items-center group-hover:bg-opacity-100 justify-center mr-4 bg-white bg-opacity-60 rounded text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Lİstesi Oluştur
            </a>
          </li>

          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibol hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-gradient-to-br from-indigo-500 to-blue-300 opacity-60 group-hover:opacity-100 rounded">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist />
      <Download />
    </aside>
  );
}

export default SideBar;
