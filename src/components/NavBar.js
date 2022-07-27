import { Icon } from "../Icons";
import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { Routes, Route } from "react-router-dom";
import Search from "./Navbar/Search";
function NavBar() {
  return (
    <nav className="h-[3.75rem] flex  items-center justify-between px-8 relative z-10">
      <Navigation />
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
      <Auth />
    </nav>
  );
}

export default NavBar;
