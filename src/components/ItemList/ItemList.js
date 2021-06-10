import React, { useState,useEffect } from "react";
import Item from "../Item/Item";
export const ItemList = (props) => {
  const { greeting, description } = props;
  const [result, setResult] = useState([]);

  //funcion que simula el llamado a una base de datos
  const fetchItems = () => {
    const promesa = new Promise((resolve, reject) => {
      let algunError = false
      setTimeout(() => {
        resolve([
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
          { title: greeting, description },
        ]);
      }, 2000);
      if(algunError) reject("Ocurrio un error al obtener los items")
    });
    return promesa;
  };

  useEffect(() => {
    fetchItems()
      .then(data => {
        setResult(data)
      })
      .catch(error => {
        setResult(error)
        console.log(error)
      })
      
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around container mt-5 mb-5">
        {result.map((item, key) => {
          return (
            <Item key={key} title={item.title} description={item.description} />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
