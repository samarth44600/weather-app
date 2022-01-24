import axios from 'axios';

//api key
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const Fetch = (value) => {
  return async (dispatch) => {
    await axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`)
      .then((fetchdata) => {
        dispatch(fetch_success(fetchdata));
      }).catch((err)=>{console.log('City not found')});
  };
};

export const fetch_success = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
