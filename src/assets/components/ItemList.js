import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Item />
        </div>
        <div className="col-md-4">
          <Item />
        </div>
        <div className="col-md-4">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default ItemList;
