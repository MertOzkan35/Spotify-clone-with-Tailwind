import { Icon } from "../../Icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const history = useNavigate();

  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => history(-1)}
        className="w-8 h-8 felx items-center pl-1  justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="left" />
      </button>
      <button
        onClick={() => history(+1)}
        className="w-8 h-8 felx items-center pl-1.5  justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="right" />
      </button>
    </nav>
  );
}

export default Navigation;
