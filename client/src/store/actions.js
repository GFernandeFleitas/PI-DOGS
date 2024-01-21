import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const TEMPERAMENTS = "TEMPERAMENTS";

export const getAllDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        console.log(data);
        return dispatch({
          type: GET_ALL_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  };
};

export const searchDogs = (dogsName) => {
  const endpoint = `http://localhost:3001/searchdogs?name=${dogsName}`;
  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        console.log(data);
        return dispatch({
          type: SEARCH_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  };
};

export const getAlldogsTemperaments = () => {
  const endpoint = `http://localhost:3001/temperaments`;
  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        console.log(data);
        return dispatch({
          type: TEMPERAMENTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching dogs:", error);
      });
  };
};
