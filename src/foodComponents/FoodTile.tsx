/** @format */
import "../styles/all.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useBasket } from "../context/BasketContext";
import { Tile} from "../types/tile.tsx";

const FoodTile = ({ id, name, price, src }: Tile) => {
  const { addToBasket, handleOpen } = useBasket();

  return (
    <div className="foodTile">
      <img className="foodTile__img" src={src} alt="img" />
      <div className="foodTile__wrapper-text">
        <p className="foodTile__title">{name}</p>
        <p className="foodTile__price">{price} CHF</p>
        <div className="foodTile__shopping-card">
          <button
            className="foodTile__button"
            onClick={() => {
              addToBasket(id, name, price);
              handleOpen();
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodTile;
