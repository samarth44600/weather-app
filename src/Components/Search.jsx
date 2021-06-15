import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fetch } from "../Redux/actions/action";
export const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector((data) => data.Search.value);
  console.log(value);
  const cityInput = useRef();
  useEffect(() => {
    dispatch(Fetch("Birgunj"));
  }, [dispatch]);
  //after button clicked
  const clicked = (event) => {
    event.preventDefault();
    dispatch(Fetch(cityInput.current.value));
    cityInput.current.value = "";
  };
  return (
    <div className="weather-main-div">
      <form className="search-comp" onSubmit={clicked}>
        <input
          type="text"
          placeholder="Enter City"
          className="city-name-index"
          ref={cityInput}
        />
        <input
          className="search-button"
          type="submit"
          value="Search"
          className="city-search-btn"
        />
      </form>

      <div className={value ? "weather-data-active" : "weather-data-inactive"}>
        <h1 className='country-name'>{value ? value.data.location.name: ""}</h1>
        <h2 className='city-name'>{value ? value.data.location.country : ""}</h2>
        <h3 className='temp-c'>{value ? value.data.current.temp_c + "°C" : ""}</h3>
        <img
          className='weather-info-pic'
          src={value ? value.data.current.condition.icon : ""}
          alt={value ? value.data.current.condition.text : ""}
        />
      </div>

      <div className={value ? "loading-not-necessary" : "loading-necessary"}>
        <h1>LOADING...</h1>
      </div>
    </div>
  );
};
