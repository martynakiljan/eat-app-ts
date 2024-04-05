/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./BasketList.scss";
import { useBasket } from "../../context/BasketContext";
import React from "react";
import { BasketItemTypes } from "../../types/basketTypes";

const BasketList: React.FC<{ basket: BasketItemTypes[] }> = ({ basket }) => {
  const { increaseInBasket, decreaseInBasket, removeFromBasket, emptyBasket } =
    useBasket();

  return (
    <>
      {emptyBasket ? (
        <p className="order__empty">Your basket is empty</p>
      ) : (
        basket.map((item) => (
          <div key={item.id} className="order__item">
            <p className="order__item--text">{item.name}</p>
            <p className="order__item--text">{item.price} CHF</p>
            <p className="order__item--amount">{item.amount}x</p>
            <div className="order__modification">
              <div className="order__modification--buttons">
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() =>
                    increaseInBasket(item.id, item.amount, item.price)
                  }
                />
                <p className="order__modification--num">1</p>

                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={() =>
                    decreaseInBasket(item.id, item.amount, item.price)
                  }
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeFromBasket(item.price, item.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default BasketList;
