/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Cards = (props) => {
  const { apiDogs, dbDogs, searchedDogs } = props;

  const [dogToFind, setDogToFind] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("ASCENDENTE");
  const [dataOrgin, setDataOrigin] = useState("API");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTemperaments, setFilteredTemperaments] = useState([]);

  //TODO: LOOK FOR A WAY TO INCLUDE THE COMMENTED FILTER IN THE PROJECT

  // {
  //   let test = false;

  //   filteredTemperaments.map((temper) => {
  //     if (dog.temperament.includes(temper) && !test) {
  //       test = true;
  //     }
  //   });

  //   if (test) {
  //     return <Card key={dog.id} dog={dog} />;
  //   } else {
  //     return <></>;
  //   }
  // }

  const dogsPerPage = 8;

  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  let totalPages;

  //set the pagination system

  if (dataOrgin === "API") {
    if (!dogToFind) {
      totalPages = apiDogs ? Math.ceil(apiDogs.length / dogsPerPage) : 1;
    } else {
      totalPages = searchedDogs.apiDogs
        ? Math.ceil(searchedDogs.apiDogs.length / dogsPerPage)
        : 1;
    }
  } else {
    if (!dogToFind) {
      totalPages = dbDogs ? Math.ceil(dbDogs.length / dogsPerPage) : 1;
    } else {
      totalPages = searchedDogs.dbDogs
        ? Math.ceil(searchedDogs.dbDogs.length / dogsPerPage)
        : 1;
    }
  }

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
    if (!dogToFind) {
      dataOrgin === "API"
        ? apiDogs && apiDogs.sort(ascendent)
        : dbDogs && dbDogs.sort(ascendent);
    } else {
      dataOrgin === "API"
        ? searchedDogs.apiDogs && searchedDogs.apiDogs.sort(ascendent)
        : searchedDogs.dbDogs && searchedDogs.dbDogs.sort(ascendent);
    }
  } else {
    if (!dogToFind) {
      dataOrgin === "API"
        ? apiDogs && apiDogs.sort(descendent)
        : dbDogs && dbDogs.sort(descendent);
    } else {
      dataOrgin === "API"
        ? searchedDogs.apiDogs && searchedDogs.apiDogs.sort(descendent)
        : searchedDogs.dbDogs && searchedDogs.dbDogs.sort(descendent);
    }
  }

  if (!dogToFind) {
    return apiDogs || dbDogs ? (
      <>
        <div className={style.mainContainer}>
          <SearchBar
            setSortingOrder={setSortingOrder}
            setFilteredTemperaments={setFilteredTemperaments}
            filteredTemperaments={filteredTemperaments}
            searchedWord={setDogToFind}
            setDataOrigin={setDataOrigin}
          />
          {dataOrgin === "API" ? (
            apiDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)
          ) : dbDogs.length ? (
            dbDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)
          ) : (
            <>
              <h5>NO HAY RAZAS REGISTRADAS EN LA BASE DE DATOS</h5>
            </>
          )}
        </div>
        <button onClick={handlePreviousPage}>Anterior</button>
        <button onClick={handleNextPage}>Siguiente</button>
      </>
    ) : (
      <></>
    );
  } else {
    return searchedDogs ? (
      <>
        <div className={style.mainContainer}>
          <SearchBar
            setSortingOrder={setSortingOrder}
            searchedWord={setDogToFind}
            setDataOrigin={setDataOrigin}
          />
          {dataOrgin === "API" ? (
            searchedDogs.apiDogs &&
            searchedDogs.apiDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)
          ) : searchedDogs.dbDogs ? (
            searchedDogs.dbDogs &&
            searchedDogs.dbDogs
              .slice(startIndex, endIndex)
              .map((dog) => <Card key={dog.id} dog={dog} />)
          ) : (
            <>
              <h5>NO HAY RAZAS REGISTRADAS EN LA BASE DE DATOS</h5>
            </>
          )}
        </div>
        <button onClick={handlePreviousPage}>Anterior</button>
        <button onClick={handleNextPage}>Siguiente</button>
      </>
    ) : (
      <></>
    );
  }
};

export default Cards;
