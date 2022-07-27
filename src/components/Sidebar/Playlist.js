import "../../bar.css";
function Playlist() {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto scrollbar scrollable-element  overflow-auto  border-t border-white border-opacity-20">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white  flex h-8 items-center"
            >
              23. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlist;
