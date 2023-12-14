import style from "../Card/Card.module.css";

const Card = ({ dog }) => {
  const { id, name, image, temperament, weight } = dog;

  return (
    <div className={style.container}>
      <img className={style.dogPicture} src={image.url} alt={name} />
      <p className={style.dogName}>{name}</p>
      <p className={style.temperamentDescription}>
        <b>This dog is: </b>
        {temperament}
      </p>
      <p>
        {weight.metric}
        <span> Kg.</span>
      </p>
    </div>
  );
};

export default Card;
