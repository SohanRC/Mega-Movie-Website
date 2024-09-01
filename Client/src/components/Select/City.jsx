import React, { useId, useState, useEffect } from "react";
import { State, City as StateCity } from "country-state-city";
import { useSelector, useDispatch } from "react-redux";
import {
  setCity as setCityReducer,
} from "../../store/LocationSlice.js";

function City({ cities, className = "" }) {
  const id = useId();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const currCity = await cities.filter(
      (city) => city.name === e.target.value
    );
    // console.log(currCity);
    
    dispatch(setCityReducer(currCity[0].name));
    // console.log("dispatched");
    
  };

  return (
    <div className="flex flex-col gap-2">
      <select
        id={id}
        defaultValue="City"
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {cities?.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default City;
