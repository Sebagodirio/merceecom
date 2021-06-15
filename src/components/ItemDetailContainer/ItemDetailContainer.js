import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = (item) => {
  const { greeting, description, price, id } = item;
  const [result, setResult] = useState(null);

  //funcion que simula el llamado a una base de datos
  const fetchItems = () => {
    const promesa = new Promise((resolve, reject) => {
      let algunError = false;
      setTimeout(() => {
        resolve({ title: greeting, description, price, id });
      }, 2000);
      if (algunError) reject("Ocurrio un error al obtener los items");
    });
    return promesa;
  };

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        setResult(error);
        console.log(error);
      });
  }, []);
  console.log(result)
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container mt-5 mb-5">
        <ItemDetail
          key={id}
          //title={result.title}
          
          description={description}
          price={price}
        />
        );
      </div>
    </div>
  );
};

export default ItemDetailContainer;
