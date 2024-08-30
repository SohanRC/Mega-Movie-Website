import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swiper/style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovies as setMoviesMem } from "../../store/MovieSlices.js";
import axios from "axios";
import parse from "html-react-parser";

export default function SwiperComponent({ className = "" }) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const savedMovies = useSelector((state) => state.movieReducer.movies);

  const findAllMovies = async () => {
    const allMovies = await axios.get("/movies/all-movies");
    console.log("Movies : ", allMovies.data);
    dispatch(setMoviesMem(allMovies.data));
    setMovies(allMovies.data);
  };

  useEffect(() => {
    findAllMovies();
  }, [setMovies]);

  return (
    <>
      {movies.length && (
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className={`mySwiper ${className}`}
          >
            {movies?.map((movie, index) => (
              <div key={movie?._id}>
                <SwiperSlide key={movie?._id} className={`w-full ${className}`}>
                  <div className="h-full w-full relative">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: `url(${movie.featuredImage})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize : "100% 100%",
                      }}
                    >
                      {/* <img
                        className="h-full"
                        src={movie.featuredImage}
                        alt="Poster"
                      /> */}
                    </div>
                    <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-950 to-transparent rounded-md"></div>

                    {/* details */}
                    <div className="container mx-auto ">
                      <div className=" w-full absolute bottom-0 max-w-md">
                        <h2 className="font-bold text-2xl lg:text-2xl text-white drop-shadow-2xl text-left">
                          {movie.title}
                        </h2>
                        <p className="text-ellipsis line-clamp-2 my-2 text-white text-lg text-left">
                          {parse(movie.summary)}
                        </p>
                        <div className="flex items-center gap-4 text-white font-semibold">
                          <p>{movie.rating ? movie.rating : "8.3+"}</p>
                        </div>
                        <div className="flex justify-start mt-3">
                          <Link to="">
                            <button className=" bg-white px-4 py-2 text-black font-bold rounded hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105 mb-4">
                              Play Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
