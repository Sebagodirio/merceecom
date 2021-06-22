import React from "react";
import libro from "../ItemDetail/img/indice.jpg";
import { ItemCount } from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";

export const Item = (props) => {
  const { title, description, price,cat, id } = props;
  return (
    <div className="card p-2 m-1">
      <img src={libro} className="card-img-top" alt="foto" />
      <div className="card-body">
        <NavLink to={`/item/${id}`} className="navbar-brand">
          <h5 className="card-title">{title}</h5>
        </NavLink>
        <p className="card-text">{description}</p>
        <p className="card-text">{cat}</p>
        <p className="card-text fw-bold">${price}</p>
        <ItemCount stock="10" initial="" key={id} />
      </div>
    </div>
  );
};
