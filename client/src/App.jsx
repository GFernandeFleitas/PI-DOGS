import "./App.css";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const response = await axios("http://localhost:3001/dogs");
      setAllDogs(response.data);
    };

    getDogs();
  }, []);

  return allDogs ? (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Cards data={allDogs} />
    </div>
  ) : (
    <></>
  );
}

export default App;
