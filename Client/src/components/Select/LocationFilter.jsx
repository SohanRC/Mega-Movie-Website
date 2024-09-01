import React from "react";
import { Country, City, State } from "country-state-city";
import { useState, useEffect, lazy, Suspense } from "react";
const SelectState = lazy(() => import("./State.jsx"));
const SelectCity = lazy(() => import("./City.jsx"));
import Loading from "../Loading.jsx";
import { FaFilter } from "react-icons/fa";

function LocationFilter() {
  let stateData = State.getStatesOfCountry("IN");
  const tempState = {
    countryCode: "IN",
    isoCode: "",
    latitude: "",
    longitude: "",
    name: "State",
  };

  // console.log(stateData);

  const [state, setState] = useState();
  const [cities, setCities] = useState()
//   console.log(state);

  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex items-center rounded-lg gap-5">
      <div className="border-black relative">
        <button
          onClick={(e) => setShowFilter((prev) => !prev)}
          className="flex items-center gap-2 font-semibold"
        >
          <FaFilter />
          <p>Location</p>
        </button>
        {showFilter && (
          <div className="absolute right-0.5 top-10 w-[150px] z-10">
            <div className="mb-1">
              <Suspense>
                <SelectState
                  data={stateData}
                  selected={state}
                  setSelected={setState}
                  setCities={setCities}
                />
              </Suspense>
            </div>
            <div>
              <Suspense fallback={<Loading />}>
                <SelectCity cities={cities} />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationFilter;
