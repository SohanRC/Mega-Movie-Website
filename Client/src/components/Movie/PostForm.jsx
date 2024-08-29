import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigation } from "react-router-dom";
import { RTE, Input } from "../index.js";
import { Select, MultiInput } from "../index.js";
import axios from "axios";
import parse from "html-react-parser";

function PostForm({ movie }) {
  const dispatch = useDispatch();

  const [casts, setCasts] = useState([]);
  const [crew, setCrew] = useState([]);
  const [genre, setGenre] = useState([]);
  // const [tempClips, setTempClips] = useState([]);

  const { register, handleSubmit, setValue, getValues, control,reset } = useForm({
    defaultValues: {
      title: movie?.title || "",
      summary: movie?.content || "",
      trending: movie?.trending || false,
      released: movie?.released || false,
      genre: movie?.genre || [],
      trailer: movie?.trailer || "",
      poster: movie?.poster || "",
      // clips: movie?.clips || [],
      duration: movie?.duration || "",
      rating: movie?.rating || "",
      crew: movie?.crew || [],
      cast: movie?.cast || [],
    },
  });
  const submit = async (data) => {
    // console.log(data);
    let tempCrew = [];
    let tempCasts = [];
    let tempGenre = [];

    genre.map((curr) => {
      if (typeof curr === "object") {
        tempGenre.push(curr.value);
      }
    });
    casts.map((curr) => {
      if (typeof curr === "object") {
        tempCasts.push(curr.value);
      }
    });
    crew.map((curr) => {
      if (typeof curr === "object") {
        tempCrew.push(curr.value);
      }
    });

    const formData = new FormData();
    formData.append("released", data.released === "true" ? true : false);
    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("genre", tempGenre);
    formData.append("trailer", data.trailer);
    formData.append("featuredImage", data.poster[0]);
    formData.append("duration", data.duration ? data.duration : "");
    formData.append("releaseDate", data.releaseDate ? data.releaseDate : "");
    formData.append("trending", data.trending == "true" ? true : false);
    formData.append("rating", data.rating ? data.rating : "");
    formData.append("casts", tempCasts);
    formData.append("crew", tempCrew);

    // console.log(tempCasts);
    // console.log(tempCrew);
    // console.log(tempGenre);

    const response = await axios.post("/movies/add-movie", formData);
    console.log(response);

    if(response.message === 'added successfully'){
      reset();
    }
  };
  // useEffect(() => {
  //   console.log(genre);
  //   console.log(crew);
  //   console.log(casts);
  // });
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-3xl font-bold mt-5 underline underline-offset-4">
        Add New Movie
      </h1>
      <div className="min-h-screen lg:w-[60dvw] sm:w-full flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-3 items-center mb-5"
          encType="multipart/form-data"
        >
          {/* title */}
          <Input
            className="mt-10 w-1/2"
            label="Title: "
            type="text"
            placeholder="Type your movie title"
            title={movie?.title}
            {...register("title", { required: true })}
          />
          {/* summary */}
          <RTE
            label="Summary :"
            name="summary"
            content={movie?.content}
            control={control}
            defaultValue={getValues("summary")}
            {...register("summary", { required: true })}
          />
          {/* trtailer link */}
          <Input
            className="mt-10 w-1/2"
            label="Trailer: "
            type="text"
            placeholder="Type your movie title"
            title={movie?.trailer}
            {...register("trailer", { required: true })}
          />
          {/* image */}
          <Input
            label="Poster: "
            type="file"
            file={movie?.featuredImage}
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("poster", { required: true })}
          />

          {/* clips
          <Input
            label="Clips: "
            type="file"
            file={movie?.featuredImage}
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("clips", { required: true })}
            multiple
          /> */}

          <div className="flex w-full gap-5">
            <Select
              options={["true", "false"]}
              label="Treding:"
              // status={post?.status}
              className="w-[40dvh]"
              {...register("trending", { required: true })}
            />
            <Select
              options={["true", "false"]}
              label="Released:"
              // status={post?.status}
              className=" w-[40dvh]"
              {...register("released", { required: true })}
            />
          </div>
          <div className="w-full">
            <MultiInput
              team={genre}
              setTeam={setGenre}
              label="Genre"
              placeholder="Add Genres"
              // {...register("genre")}
            />
          </div>

          <div className="w-full">
            <MultiInput
              team={casts}
              setTeam={setCasts}
              label="Casts"
              placeholder="Add Casts"
              // {...register("casts")}
            />
          </div>

          <div className="w-full">
            <MultiInput
              team={crew}
              setTeam={setCrew}
              label="Crew"
              placeholder="Add crew members"
              // {...register("crew")}
            />
          </div>

          <button
            type="submit"
            className="w-1/4 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold drop-shadow-lg shadow-lg"
          >
            {movie ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
