import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-widest mb-5 md:text-6xl lg:text-8xl">
        Mirkomilboy's Blog
      </h1>
      <button>
        <Link
          to="blog"
          className="py-2 px-6 rounded shadow text-white bg-black border-2 border-black hover:bg-transparent hover:text-black transition ease-linear font-bold"
        >
          Read my blog posts
        </Link>
      </button>
    </div>
  );
};

export default Home;
