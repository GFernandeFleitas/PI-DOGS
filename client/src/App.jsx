import "./App.css";
import Cards from "./components/Cards/Cards";

import { useEffect, useState } from "react";
import { getAllDogs } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const allDogs = useSelector((state) => state.allDogs);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllDogs());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return allDogs ? (
    <div className="App">
      <h1>Find your DOGGY</h1>
      <Cards dogs={allDogs} />
    </div>
  ) : (
    <>
      <h5>NO DOGS</h5>
    </>
  );
}

export default App;
