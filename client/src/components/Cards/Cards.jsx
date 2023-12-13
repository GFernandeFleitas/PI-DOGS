import Card from "../Card/Card";

const Cards = (props) => {
  console.log(props);
  const dogs = props.data;
  return (
    <>
      {dogs?.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </>
  );
};

export default Cards;
