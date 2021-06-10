import React, { useState } from "react";
import Item from "../Item/Item";
export const ItemList = (props) => {
  const { greeting, description } = props;
  const [result, setResult] = useState([]);

  //funcion que simula el llamado a una base de datos
  const fetchItems = () => {
    const promesa = new Promise((resolve, reject) => {
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
    });
    return promesa;
  };

  fetchItems().then((data) => {
    setResult(data);
  });

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
