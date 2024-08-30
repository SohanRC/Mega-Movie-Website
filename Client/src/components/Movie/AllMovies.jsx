import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMovies as setMoviesMem } from "../../store/MovieSlices.js";
import { HomeBanner, MovieCard, Select } from "../index.js";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function AllMovies() {
  // const [movies, setMovies] = useState([]);
  // const dispatch = useDispatch();
  const savedMovies = useSelector((state) => state.movieReducer.movies);
  // const findAllMovies = async () => {
  //   if (savedMovies.length === 0) {
  //     const allMovies = await axios.get("/all-movies");
  //     // console.log(allMovies.data);
  //     dispatch(setMoviesMem(allMovies.data));
  //     setMovies(allMovies.data);
  //   }
  //   // else {
  //   //   setMovies(savedMovies);
  //   // }
  // };
  const geners = [
    "All",
    "Action",
    "Romance",
    "Comdey",
    "Adventure",
    "SciFi",
    "Thriller",
    "Horror",
  ];
  // findAllMovies();

  const city = useSelector((state) => state.locationReducer.City);
  //   console.log(city);

  // useEffect(() => {
  //   findAllMovies();
  // },);
  // findAllMovies();

  return (
    <div className="px-1">
      <div className="mt-5">
        <HomeBanner className="h-[30rem]" />
      </div>
      <div className="w-full flex justify-center min-h-[80dvh] mt-24 gap-2 ">
        {/* left */}
        <div className="w-[20dvw] flex flex-col justify-start gap-5">
          <h1 className="text-3xl font-bold">Filters</h1>
          <div className="bg-white rounded-lg p-2">
            <h2 className="text-xl">Genre</h2>
            <Select className="outline-none" options={geners} />
          </div>
          <div className="bg-white rounded-lg p-2">
            <h2 className="text-xl">Format</h2>
            <Select className="outline-none" options={["2D", "3D"]} />
          </div>
        </div>

        {/* right */}
        <div className="w-[70dvw] px-2">
          <h1 className="text-3xl font-bold">
            Movies Avavible in
            <span className="text-red-400 ml-2 underline underline-offset-4">
              {city.name}
            </span>
          </h1>

          <div className="mt-6">
            <div className="flex px-5 mt-3 justify-between">
              {savedMovies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} />
              ))}

              {/* <MovieCard />
              <MovieCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMovies;
