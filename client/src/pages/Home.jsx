import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CallToAction1 from "../components/CallToAction1";
import CallToAction2 from "../components/CallToAction2";
import CallToAction3 from "../components/CallToAction3";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Slider from "react-slick"; // Importer React Slick
import "slick-carousel/slick/slick.css"; // Importer les styles de Slick
import "slick-carousel/slick/slick-theme.css"; // Importer le thème de Slick

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const images = [
    "../src/assets/image1.jpeg",
    "../src/assets/image2.jpeg",
    "../src/assets/image3.jpeg",
    "../src/assets/image4.jpeg"
  ];

  // Configuration du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   // Limiter à 8 posts
   const recentPosts = posts.slice(0, 8);

  return (
    <div>
      {/* Carrousel d'Images */}
      <Slider {...settings} className="relative h-96">
        {images.map((src, index) =>
          <div key={index} className="flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-80 transition-transform duration-1000 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
        )}
      </Slider>
      {/* Fin Carrousel d'Images */}

      {/* Contenu de la Bannière */}
      <div className="flex flex-col gap-6 p-60 px-3 max-w-6xl mx-auto absolute top-20 left-0 right-0">
        <h1 className="text-3xl font-bold lg:text-6xl text-white">
          AMFOHS ACTION
        </h1>
        <p className="text-gray-200text-xs sm:text-sm">
        ACTION FOR A BETTER WORLD
        </p>
        <Link
          to="/search"
          className="text-3xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-6 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      {/* Fin Bannière */}

      <div className="max-w-10xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts &&
          posts.length > 0 &&
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Recent Activities
            </h2>
            <div className="flex flex-wrap gap-4">
              {recentPosts.map(post => <PostCard key={post._id} post={post} />)}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>}
      </div>
      <div className="p-6 bg-amber-100 dark:bg-slate-700">
        <CallToAction1 />
      </div>
      <div className="p-6 bg-amber-100 dark:bg-slate-700">
        <CallToAction2 />
      </div>
      {/* <div className='p-6 bg-amber-100 dark:bg-slate-700'>
        <CallToAction3 />
      </div> */}
    </div>
  );
}
