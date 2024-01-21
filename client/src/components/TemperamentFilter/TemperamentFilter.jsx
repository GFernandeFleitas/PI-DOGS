/* eslint-disable react/prop-types */
import style from "./TemperamentFilter.module.css";
import { useSelector } from "react-redux";
const TemperamentFilter = (props) => {
  const { setTrigger, setFilteredTemperaments, filteredTemperaments } = props;
  const temperaments = useSelector((state) => state.temperaments);
  console.log(temperaments);

  const handleAccess = () => {
    setTrigger(false);
  };

  const handleTemperamentSelection = (event) => {
    const temperament = event.target.value;
    console.log(event.target.checked);

    if (!filteredTemperaments.includes(temperament)) {
      setFilteredTemperaments([...filteredTemperaments, temperament]);
      console.log([...filteredTemperaments, temperament]);
    } else {
      const auxFiltered = filteredTemperaments.filter(
        (temper) => temper !== temperament
      );
      setFilteredTemperaments(auxFiltered);
      console.log(auxFiltered);
    }
  };

  return (
    <div className={style.transparentContainer}>
      <div className={style.container}>
        <h5>Temperamentos</h5>
        <div className={style.temperamentSelection}>
          {temperaments.allDogsTemperaments?.map((temperament) => (
            <div className={style.temperamentOption} key={temperament.ID}>
              <input
                onChange={handleTemperamentSelection}
                type="checkbox"
                id={temperament.ID}
                value={temperament.temperament}
                checked={
                  filteredTemperaments.includes(temperament.temperament)
                    ? true
                    : false
                }
              />
              <label> {temperament.temperament}</label>
            </div>
          ))}
        </div>

        <button onClick={handleAccess}>x</button>
      </div>
    </div>
  );
};

export default TemperamentFilter;
