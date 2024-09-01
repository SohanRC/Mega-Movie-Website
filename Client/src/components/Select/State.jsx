import React, { useId } from "react";
import { City, State as IndianState } from "country-state-city";
import Select from "../Select.jsx";
import { useDispatch } from "react-redux";
import { setState } from "../../store/LocationSlice.js";

function State({ data, selected, setSelected, className = "", setCities }) {
  // console.log(data);

  const id = useId();
  const dispatch = useDispatch();

  async function handleChange(e) {
    const currState = await data.filter((curr) => curr.name === e.target.value);
    dispatch(setState(currState));
    // console.log(currState);

    const cities = City.getCitiesOfState("IN", currState[0].isoCode);
    setCities(cities);
    // console.log(cities);
    dispatch(setState(currState[0].name));
  }

  return (
    <div className="flex flex-col gap-2">
      <select
        id={id}
        defaultValue="State"
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        onChange={(e) => {
          handleChange(e);
          setSelected(e.target.value);
        }}
      >
        {data?.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default State;
