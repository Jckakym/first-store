import React, { useState, useEffect } from "react";
import "./style.css";
import ListingCards from "../../componets/ListingCards";
<<<<<<< HEAD
import Card from "../../componets/Card";
import axios from "axios";
import { useEffect, useState } from "react";
=======
import axios from "axios";
>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca

const Store = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
<<<<<<< HEAD
    .get('http://localhost:3002/products')
    .then((response) => setData(response.data));
  },[]);

  return (
    <div>
      <ListingCards data={data}/>
=======
      .get("http://localhost:3002/products")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <ListingCards data={data} />
>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca
    </div>
  );
};

export default Store;
