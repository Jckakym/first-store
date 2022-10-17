import "./style.css";

const ProductDetail = () => {
  const getIdFromURL = () => {
<<<<<<< HEAD
   const pathname = window.location.pathname;
   return pathname.split("/")[2]; 
  };

  console.log(getIdFromURL());
  
=======
    const pathname = window.location.pathname;
    return pathname.split("/")[2];
  };

  console.log(getIdFromURL());

>>>>>>> 7b5bc1ffa3d765ee364ff061bf639057a7d163ca
  return <div className="ProductDetail">Página do Produto</div>;
};

export default ProductDetail;
