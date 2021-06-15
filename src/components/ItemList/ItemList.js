import React, { useState, useEffect } from "react";
import libro from "../ItemDetail/img/indice.jpg"
import ItemCount from "../ItemCount/ItemCount";

export const ItemList = (props) => {
  const { greeting, description, price } = props;
  const [result, setResult] = useState([]);

  //funcion que simula el llamado a una base de datos
  const fetchItems = () => {
    const promesa = new Promise((resolve, reject) => {
      let algunError = false;
      setTimeout(() => {
        resolve([
          { title: greeting, description, price, id: 1 },
          { title: greeting, description, price, id: 2 },
          { title: greeting, description, price, id: 3 },
          { title: greeting, description, price, id: 4 },
          { title: greeting, description, price, id: 5 },
          { title: greeting, description, price, id: 6 },
          { title: greeting, description, price, id: 7 },
          { title: greeting, description, price, id: 8 },
          { title: greeting, description, price, id: 9 },
          { title: greeting, description, price, id: 10 },
        ]);
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

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container mt-5 mb-5">
        {result.map((item) => {
          return (
            <div className="card p-2 m-1">
            <img src={libro} className="card-img-top" alt="foto" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text fw-bold">{item.price}</p>
                <ItemCount stock="10" initial="" key={item.id}/>
            </div>
        </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
