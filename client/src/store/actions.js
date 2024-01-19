import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";

export const getAllDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return (dispatch) => {
    axios.get(endpoint).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: GET_ALL_DOGS,
        payload: data,
      });
    });
  };
};
