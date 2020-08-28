import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  PlusSquareFill,
  DashSquareFill,
  TrashFill,
} from "react-bootstrap-icons";
import PropTypes from "prop-types";

export const Products = ({ productData = [], action, type, emptyCart }) => {
  return (
    <div className="m5 w-50">
      {type === "remove" && productData.length > 0 && (
        <TrashFill
          className="delete-icon"
          onClick={emptyCart}
          size={15}
          color="red"
        />
      )}
      <ListGroup>
        {productData.map((mapData, index) => (
          <ListGroup.Item
            variant={index % 2 === 0 ? "light" : "dark"}
            key={mapData.name}
            onClick={() => {
              action(mapData);
            }}
            className="list-data"
          >
            {mapData.count ? (
              <>
                <DashSquareFill size={15} className="mr-2" />
                <span className="mr-2"> {mapData.count}</span>
              </>
            ) : (
              <span className="product-icon">
                <PlusSquareFill size={15} className="mr-2" />
              </span>
            )}
            {mapData.name}
          </ListGroup.Item>
        ))}
        {productData.length === 0 && (
          <ListGroup.Item className="list-data" variant="light">
            No items in your basket
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

Products.propTypes = {
  productData: PropTypes.array,
  action: PropTypes.func,
  type: PropTypes.string,
  emptyCart: PropTypes.func,
};
