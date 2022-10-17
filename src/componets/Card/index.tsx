import "./style.css";
import dotMenuIcon from "../../assets/icons/dotmenu-icon.png";
import Icon from "../Icon";
import starIcon from "../../assets/icons/star-icon.png";
import bagRedIcon from "../../assets/icons/bag-red-icon.png";
import { type } from "@testing-library/user-event/dist/type";

type CardProps = {
<<<<<<< HEAD
  id:number;
  name:string;
  price:number;
  rating:number;
  image: string;
};

const Card = (props:CardProps) => {

  const navigateTo = () => {
    console.log(props.id);
    window.location.href=`http://localhost:3000/product/${props.id}`;
  }
  return (
    <div className="Card" onClick={navigateTo}>
      <div className="CardImage"
        style={{backgroundImage: `url(${props.image})`}}></div>
=======
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
};

const Card = (props: CardProps) => {
  const navigateTo = () => {
    console.log(props.id);
    window.location.href = `http://localhost:3000/product/${props.id}`;
  };

  return (
    <div className="Card" onClick={navigateTo}>
      <div
        className="CardImage"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca
      <div className="CardSection">
        <h1 className="CardTitle --bold">{props.name}</h1>
        <Icon src={dotMenuIcon} />
      </div>
      <div className="CardSection">
        <span className="CardPriceText">Price</span>
<<<<<<< HEAD
        <span className="--bold">{props.price.toFixed(2)}</span>
=======
        <span className="--bold">RS {props.price.toFixed(2)}</span>
>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca
      </div>
      <div className="CardRating">
        <div className="--blur"></div>
        <div className="CardRatingIcon">
          <Icon src={starIcon} />
        </div>
        <span>{props.rating}</span>
      </div>
      <div className="CardBagIcon">
        <Icon src={bagRedIcon} />
      </div>
    </div>
  );
};

export default Card;
