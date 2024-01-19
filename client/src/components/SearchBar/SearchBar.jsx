/* eslint-disable react/prop-types */
import style from "./SearchBar.module.css";
const SearchBar = (props) => {
  const { searchedWord } = props;

  const handleDogSearch = (event) => {
    const typedWord = event.target.value;
    console.log(typedWord);
    searchedWord(typedWord);
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
    </div>
  );
};

export default SearchBar;
