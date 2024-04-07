/** @format */
import Popup from "../Popup/Popup";
import { useBasket } from "../../context/BasketContext";
import "./OrderConfimation.scss";
import { FormDataOrderType } from "../../types/formDataOrderType";

const OrderConfirmation: React.FC<FormDataOrderType> = ({
  firstName,
  lastName,
  address,
}) => {
  const { basket, totalPrice, deliveryOption } = useBasket();


  const handleClose = () => {
    window.location.reload();
  };
  
  return (
    <Popup handleClose={handleClose}>
      <div>
        <h2>Confirmation of your order</h2>
        <p className="order__cofirm__thanks">THANK YOU!</p>
        <span className="order__cofirm__thanks--text">
          We will start preparing your order soon.
        </span>
        <div className="order__confirm">
          {basket.map((item, index) => (
            <div className="order__confirm">
              <h3>Order:</h3>
              <p key={index} className="order__text">
                {item.name} - {item.amount} x CHF {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="order__confirm">
          <h3>Your data:</h3>
          <p>
            {firstName} {lastName} - {address}
          </p>
        </div>

        <div className="order__confirm">
          <h3>To pay</h3>
          <p>{totalPrice} CHF</p>
        </div>

        <div className="order__confirm">
          <h3>Delivery/Pick Up</h3>
          {deliveryOption === "delivery" ? (
            <p>delivered (estimated time 1 hour)</p>
          ) : (
            <>
              <p>
                <p>pleace pick up in 30 min</p>
                <p>Address: Ankerstreet 45/203, Zürich</p>
              </p>
            </>
          )}
        </div>

        <p className="order__confim--problem">
          if you have questions please call: +41 545 342 123
        </p>
      </div>
    </Popup>
  );
};

export default OrderConfirmation;
