/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Cards = (props) => {
  const { dogs } = props;

  const [dogToFind, setDogToFind] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("ASCENDENTE");
  const [dataOrgin, setDataOrigin] = useState("API");

  //set the pagination system
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;

  const totalPages = Math.ceil(dogs.apiDogs.length / dogsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const ascendent = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const descendent = (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  };

  // Check the sorting order selected by the user

  if (sortingOrder === "ASCENDENTE") {
    dogs.apiDogs.sort(ascendent);
  } else {
    dogs.apiDogs.sort(descendent);
  }

  return dogs ? (
    <>
      <div className={style.mainContainer}>
        <SearchBar
          setSortingOrder={setSortingOrder}
          searchedWord={setDogToFind}
          setDataOrigin={setDataOrigin}
        />
        {dataOrgin === "API"
          ? dogs.apiDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)
          : dogs.dbDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)}
      </div>
      <button onClick={handlePreviousPage}>Anterior</button>
      <button onClick={handleNextPage}>Siguiente</button>
    </>
  ) : (
    <></>
  );
};

export default Cards;
