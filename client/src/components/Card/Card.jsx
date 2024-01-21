/* eslint-disable react/prop-types */
import style from "../Card/Card.module.css";

const Card = ({ dog }) => {
  const { id, name, image, temperament, weight } = dog;

  return (
    <div className={style.container}>
      <img className={style.dogPicture} src={image} alt={name} />
      <p className={style.dogName}>{name}</p>
      <p className={style.temperamentDescription}>
        <b>This dog is: </b>
        {temperament?.length &&
          temperament.map((data, index) => {
            if (index > 0) {
              return <span key={index}>{`, ${data}`}</span>;
            } else {
              return <span key={index}>{`${data}`}</span>;
            }
          })}
      </p>
      <p>
        {weight}
        <span> Kg.</span>
      </p>
    </div>
  );
};

export default Card;
