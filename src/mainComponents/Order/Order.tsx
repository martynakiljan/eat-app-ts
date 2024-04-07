/** @format */
import Popup from "../Popup/Popup";
import { useBasket } from "../../context/BasketContext";
import BasketList from "../BasketList/BasketList";
import FormOrder from "../FormOrder/FormOrder";

const Order = () => {
  const {
    totalPrice,
    deliveryOption,
    handleDeliveryOptionChange,
    basket,
    handleClose,
  } = useBasket();

  return (
    <Popup handleClose={handleClose}>
      <div className="shopping__box">
        <input type="checkbox" id="toggle" className="toggleCheckbox" />
        <label htmlFor="toggle" className="toggleContainer">
          <div onClick={() => handleDeliveryOptionChange("delivery")}>
            Delivery
          </div>
          <div onClick={() => handleDeliveryOptionChange("takeaway")}>
            Take away
          </div>
        </label>
        {deliveryOption === "delivery" && (
          <div className="order__delivery order__item">
            <p className="order__item--text">Delivery</p>
            <p className="order__item--text">5.90 CHF</p>
          </div>
        )}
        <div className="order__info">
          <p className="order__info--text">* minimum order is 9 CHF</p>
        </div>
        <BasketList basket={basket} />
        <FormOrder />
        <div className="order__price">
          <p className="order__price--text">All together to pay:</p>
          <p className="order__price--price">
            {totalPrice ? totalPrice : 0} CHF
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default Order;
