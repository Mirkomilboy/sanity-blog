import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <div className="pt-16">
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen uppercase font-bold text-4xl tracking-wide mb-10 md:text-5xl lg:text-6xl text-center mt-5">
          Loading...
        </h1>
      ) : (
        <section className="xl:max-w-6xl xl:mx-auto px-5 pb-20">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-5xl lg:text-6xl text-center mt-5">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="md:h-[600px] w-full object-cover rounded-t-md"
            />
          )}
          <p>By Mirkomilboy</p>

          <div className="block-content">
            <BlockContent
              blocks={singlePost.body}
              projectId="eoxm2hq9"
              dataset="production"
            />
          </div>

          <button className="my-10">
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black border-2 border-black hover:bg-transparent hover:text-black transition ease-linear font-bold"
            >
              Read more articles
            </Link>
          </button>
        </section>
      )}
    </div>
  );
};

export default SinglePost;
