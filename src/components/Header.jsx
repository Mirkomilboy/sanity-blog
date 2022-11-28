import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-black text-white h-16 p-5">
      <div className="logo">
        <Link to="/" className="font-bold text-xl md:text-2xl lg:text-3xl">
          Mirkomilboy's Blog
        </Link>
      </div>

      <nav>
        <ul className="flex items-center lg:text-lg space-x-5">
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/blog">Blog</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
