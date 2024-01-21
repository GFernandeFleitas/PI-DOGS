import "./App.css";
import Cards from "./components/Cards/Cards";

import { useEffect, useState } from "react";
import { getAllDogs, getAlldogsTemperaments } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllDogs());
        dispatch(getAlldogsTemperaments());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const allDogs = useSelector((state) => state.allDogs);
  const searchedDogs = useSelector((state) => state.searchedDogs);
  console.log("SearchedDogs:", searchedDogs);

  return allDogs && searchedDogs ? (
    <div className="App">
      <h1>Find your DOGGY</h1>
      <Cards
        searchedDogs={searchedDogs}
        apiDogs={allDogs.apiDogs}
        dbDogs={allDogs.dbDogs}
      />
    </div>
  ) : (
    <>
      <h5>NO DOGS</h5>
    </>
  );
}

export default App;
