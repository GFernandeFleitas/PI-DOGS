/* eslint-disable react/prop-types */
import style from "./SearchBar.module.css";
const SearchBar = (props) => {
  const { searchedWord, setSortingOrder, setDataOrigin } = props;

  const handleDogSearch = (event) => {
    const typedWord = event.target.value;
    console.log(typedWord);
    searchedWord(typedWord);
  };

  const handleSortingOrderSelection = (event) => {
    setSortingOrder(event.target.value);
  };

  const handleDataOriginSelection = (event) => {
    setDataOrigin(event.target.value);
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
    </div>
  );
};

export default SearchBar;
