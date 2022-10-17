import "./style.css";
import Card from "../Card";
import { isMetaProperty } from "typescript";

type ListingCardsProps = {
<<<<<<< HEAD
  data: | Array<{
    id:number;
    name:string;
    price:number;
    rating:number;
    image: string;
  }> | undefined;
=======
  data:
    | Array<{
        id: number;
        name: string;
        price: number;
        rating: number;
        image: string;
      }>
    | undefined;
};

const ListingCards = (props: ListingCardsProps) => {
  console.log(props.data);

  const listCards = () => {
    if (props.data) {
      return props.data.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          price={item.price}
          rating={item.rating}
          image={item.image}
        />
      ));
    }
  };

  return <div className="ListingCards">{listCards()}</div>;
>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca
};

const ListingCards = (props: ListingCardsProps) => {
  console.log(props.data);
  
  
const listCards = () => {  
  if(props.data) {
  return props.data.map((item) => <Card 
  id={item.id}
  name={item.name} 
  price={item.price} 
  rating={item.rating}
  image={item.image} />);
  }
}

return (
  <div className="ListingCards">{listCards()}</div>
  );
}

export default ListingCards;
