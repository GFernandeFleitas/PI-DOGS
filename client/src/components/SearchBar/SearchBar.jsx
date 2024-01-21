/* eslint-disable react/prop-types */
import style from "./SearchBar.module.css";
import { searchDogs } from "../../store/actions";
import { useDispatch } from "react-redux";
import TemperamentFilter from "../TemperamentFilter/TemperamentFilter";
import { useState } from "react";
const SearchBar = (props) => {
  const {
    searchedWord,
    setSortingOrder,
    setDataOrigin,
    setFilteredTemperaments,
    filteredTemperaments,
  } = props;
  const dispatch = useDispatch();

  const [trigger, setTrigger] = useState(false);

  const handleDogSearch = (event) => {
    const typedWord = event.target.value;
    if (typedWord !== "") {
      searchedWord(typedWord);
    } else {
      searchedWord(null);
    }

    dispatch(searchDogs(typedWord));
  };

  const handleSortingOrderSelection = (event) => {
    setSortingOrder(event.target.value);
  };

  const handleDataOriginSelection = (event) => {
    setDataOrigin(event.target.value);
  };

  const handleFilter = () => {
    setTrigger(true);
  };
  return (
    <div className={style.searchBarContainer}>
      <input
        onChange={handleDogSearch}
        className={style.searchBarInput}
        name="searchBox"
        id="searchBox"
        placeholder={"🔍 Buscar raza..."}
        type="text"
        autoComplete="off"
      />

      <select
        onChange={handleSortingOrderSelection}
        name="dogsOrder"
        id="dogsOrder"
      >
        <option value="ASCENDENTE">ASCENDENTE</option>
        <option value="DESCENDENTE">DESCENDENTE</option>
      </select>

      <select
        onChange={handleDataOriginSelection}
        name="dataOrigin"
        id="dataOrigin"
      >
        <option value="API">API</option>
        <option value="DATABASE">DATABASE</option>
      </select>
      <button onClick={handleFilter}>Temperaments</button>
      {trigger ? (
        <TemperamentFilter
          setFilteredTemperaments={setFilteredTemperaments}
          setTrigger={setTrigger}
          filteredTemperaments={filteredTemperaments}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
