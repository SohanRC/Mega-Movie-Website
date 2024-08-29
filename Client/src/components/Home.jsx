import React, { useState, useEffect } from "react";
import { BestMovies, HomeBanner, MovieCard, Trending } from "./index.js";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setMovies as setMoviesMem } from "../store/MovieSlices.js";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const savedMovies = useSelector((state) => state.movieReducer.movies);
  const findAllMovies = async () => {
    // if (savedMovies.length === 0) {
    const allMovies = await axios.get("/movies/all-movies");
    // console.log(allMovies.data);
    dispatch(setMoviesMem(allMovies.data));
    setMovies(allMovies.data);
    // }
    // else {
    //   setMovies(savedMovies);
    // }
  };
  useEffect(() => {
    findAllMovies();
  }, []);
  console.log(movies);

  return (
    <div className=" py-5 min-h-[100dvh] px-3 ">
      <HomeBanner className="h-[80dvh]" />

      {/* trending */}
      <div className="mt-6">
        <div className="flex w-[60dvw] justify-between px-2">
          <h1 className="text-3xl font-semibold">Trending</h1>
          <Link to="/movies/all-movies" className="text-xl text-orange-600">
            <div className="flex items-center">
              <h2 className="">View All</h2>
              <span className="text-sm">
                <FaAngleRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="flex px-5 mt-3">
          {movies?.map((movie) =>
            movie.trending === true ? (
              <Trending key={movie?._id} movie={movie} />
            ) : null
          )}
        </div>
      </div>

      {/* bests */}
      <div className="mt-6">
        <div className="flex w-[60dvw] justify-between px-2">
          <h1 className="text-3xl font-semibold">Best of Bests</h1>
          <Link to="/movies/all-movies" className="text-xl text-orange-600">
            <div className="flex items-center">
              <h2 className="">View All</h2>
              <span className="text-sm">
                <FaAngleRight />
              </span>
            </div>
          </Link>
        </div>
        <div className="flex px-5 mt-3 gap-3">
          {movies?.map((movie, index) =>
            index < 3 ? <BestMovies key={movie._id} movie={movie} /> : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
