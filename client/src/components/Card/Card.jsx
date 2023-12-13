const Card = ({ dog }) => {
  const { id, name, image, temperament, weight } = dog;

  return (
    <div>
      <img src={image.url} alt={name} />
      <p>{id}</p>
      <p>Name: {name}</p>
      <p>Temperament: {temperament}</p>
      <p>{weight.metric}</p>
    </div>
  );
};

export default Card;
