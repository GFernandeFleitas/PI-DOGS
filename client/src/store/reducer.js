import { GET_ALL_DOGS, SEARCH_DOGS, TEMPERAMENTS } from "./actions";

const initialState = {
  allDogs: [],
  searchedDogs: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    case SEARCH_DOGS:
      return {
        ...state,
        searchedDogs: action.payload,
      };

    case TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
