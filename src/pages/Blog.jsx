import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="pt-16 px-5">
      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-widest text-center mt-4 mb-10 ">
        Blog page
      </h1>

      <div className="2xl:max-w-7xl 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <article key={post.slug.current}>
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="h-60 w-full object-cover"
            />
            <h4 className="font-medium text-xl mt-2">{post.title}</h4>
            <button className="mt-5 mb-10 ">
              <Link
                to={`/blog/${post.slug.current}`}
                className="py-2 px-6 rounded shadow text-white bg-black border-2 border-black hover:bg-transparent hover:text-black transition ease-linear font-bold"
              >
                Read Full Article
              </Link>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
