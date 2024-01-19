/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from "./Cards.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const Cards = (props) => {
  const { dogs } = props;

  const [dogToFind, setDogToFind] = useState(null);

  return !dogToFind ? (
    <div className={style.mainContainer}>
      <SearchBar searchedWord={setDogToFind} />
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  ) : (
    <div className={style.mainContainer}>
      <SearchBar searchedWord={setDogToFind} />
      {dogs
        ?.filter((dog) =>
          dog.name.toLowerCase().includes(dogToFind.toLowerCase())
        )
        .map((dog) => (
          <Card key={dog.id} dog={dog} />
        ))}
    </div>
  );
};

export default Cards;
