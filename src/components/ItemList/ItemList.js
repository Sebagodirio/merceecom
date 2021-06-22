import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";

export const ItemList = (props) => {
  const { greeting, description, price, catName } = props;
  const [result, setResult] = useState([]);

  //funcion que simula el llamado a una base de datos
  const fetchItems = () => {
    const promesa = new Promise((resolve, reject) => {
      let algunError = false;
      setTimeout(() => {
        resolve([
          { title: greeting, description, price, category: "drama", id: 1 },
          { title: greeting, description, price, category: "accion", id: 2 },
          { title: greeting, description, price, category: "drama", id: 3 },
          { title: greeting, description, price, category: "aventura", id: 4 },
          { title: greeting, description, price, category: "accion", id: 5 },
          { title: greeting, description, price, category: "aventura", id: 6 },
          { title: greeting, description, price, category: "aventura", id: 7 },
          { title: greeting, description, price, category: "drama", id: 8 },
          { title: greeting, description, price, category: "accion", id: 9 },
          { title: greeting, description, price, category: "drama", id: 10 },
        ]);
      }, 2000);
      if (algunError) reject("Ocurrio un error al obtener los items");
    });
    return promesa;
  };

  useEffect(() => {
    fetchItems()
      .then((data) => {
        if (catName !== "") {
          setResult(
            data.filter((cat) => {
              return cat.category === catName;
            })
          );
        } else {
          setResult(data);
        }
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
            <Item
              key={item.id}
              title={item.title}
              description={item.description}
              cat={catName}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
