import React, { useEffect, useState } from "react";
import image from "../../assests/try.png";
import { Link, useParams } from "react-router-dom";
import { Cast, HorizontalCard, MovieCard } from "../index.js";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import axios from "axios";

function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const findMovie = async () => {
    const response = await axios.get(`/movies/single-movie/${id}`);
    setMovie(response.data);
    setLoading(false);
  };

  useEffect(() => {
    findMovie();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="px-1">
      <div className="relative">
        <div className="hover:scale-105 duration-200 transition-all">
          <div className="drop-shadow-lg">
            <img
              src={movie?.featuredImage}
              alt="Banner"
              className="h-[500px] w-[100dvw] object-cover rounded-md"
            />
          </div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-950 to-transparent rounded-md"></div>
        </div>
        {/* details */}

        <div className="container mx-auto ">
          <div className=" w-full absolute bottom-0 max-w-md px-3">
            <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">
              {/* title */}
              {movie?.title}
            </h2>
            <p className="text-ellipsis line-clamp-3 my-2 text-white">
              {/* summary */}
              {parse(movie?.summary)}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              consectetur quia amet, ullam recusandae aliquid similique
              consequatur excepturi ipsum quasi non odio sunt eius voluptatem
              voluptatum repudiandae hic, culpa qui ipsa. Vel vero nisi iure
              omnis dignissimos praesentium incidunt vitae, tempora mollitia
              facilis, voluptas unde explicabo asperiores, alias fuga cumque! */}
            </p>
            <div className="flex items-center gap-4 text-white font-semibold">
              <p>{movie?.rating || "8.7+"}</p>
            </div>
            <Link to="">
              <button className=" bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 mb-4">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:mt-5 lg:px-10">
        {/* casts */}
        <div>
          <h1 className="text-3xl">Casts</h1>
          <div className="w-[60dvw] border min-h-[200px]">
            <HorizontalCard />
          </div>
        </div>

        <div className="w-[60dvw] border bg-black/20 h-[3px] mt-7 lg:ml-5"></div>

        <div className="mt-5">
          <h1 className="text-3xl">Crew</h1>
          <div className="w-[60dvw] mt-4">
            <HorizontalCard />
          </div>
        </div>

        <div className="w-[60dvw] border bg-black/20 h-[3px] mt-7 lg:ml-5"></div>

        <div className="mt-5">
          <div className="flex w-[60dvw] justify-between px-2">
            <h1 className="text-3xl font-semibold">You might also like</h1>
            <Link to="/movies/all-movies" className="text-xl text-orange-600">
              <div className="flex items-center">
                <h2 className="">View All</h2>
                <span className="text-sm">
                  <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="mt-5">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
