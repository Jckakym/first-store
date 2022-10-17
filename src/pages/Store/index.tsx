import "./style.css";
import ListingCards from "../../componets/ListingCards";
import Card from "../../componets/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
    .get('http://localhost:3002/products')
    .then((response) => setData(response.data));
  },[]);

  return (
    <div>
      <ListingCards data={data}/>
    </div>
  );
};

export default Store;
