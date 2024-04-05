/** @format */

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./FormOrder.scss"; // Import the CSS file where styles are defined
import { FormDataOrderType } from "../../types/formDataOrderType";
import { useBasket } from "../../context/BasketContext";
import { SyncLoader } from "react-spinners";

const Form = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isOrderOK, setIsOrderOK] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { totalPrice, emptyBasket } = useBasket();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataOrderType>();

  let minOrder = 9;
  let noErrors = Object.keys(errors).length === 0;
  const minOrderOK = totalPrice > minOrder;

  useEffect(() => {
    if (minOrderOK) {
      setIsOrderOK(true);
    } else {
      setIsOrderOK(false);
    }
  }, [totalPrice, minOrderOK]);

  const onSubmit: SubmitHandler<FormDataOrderType> = () => {
    if (noErrors || isOrderOK) {
      setIsFormValid(true);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        window.location.reload();
      }, 5000);
    }

    setSubmitClicked(true);
  };

  return (
    !emptyBasket && (
      <>
        <h4 className="form-order__title">your address:</h4>
        <form className="form-order" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-order__group">
            <label htmlFor="firstName" className="form-order__label">
              First Name:
            </label>
            <input
              {...register("firstName", {
                required: true,
                minLength: 5,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="form-order__input"
            />
            {errors.firstName && errors.firstName.type === "required" && (
              <span className="form-order__error">This field is required</span>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
              <span className="form-order__error">
                First name must be at least 5 characters long
              </span>
            )}
            {errors.firstName && errors.firstName.type === "pattern" && (
              <span className="form-order__error">
                First name cannot contain numbers or special characters
              </span>
            )}
          </div>
          <div className="form-order__group">
            <label htmlFor="lastName" className="form-order__label">
              Last Name:
            </label>
            <input
              {...register("lastName", {
                required: true,
                minLength: 5,
                pattern: /^[A-Za-z]+$/i,
              })}
              className="form-order__input"
            />
            {errors.lastName && errors.lastName.type === "required" && (
              <span className="form-order__error">This field is required</span>
            )}
            {errors.lastName && errors.lastName.type === "minLength" && (
              <span className="form-order__error">
                Last name must be at least 5 characters long
              </span>
            )}
            {errors.lastName && errors.lastName.type === "pattern" && (
              <span className="form-order__error">
                Last name cannot contain numbers or special characters
              </span>
            )}
          </div>
          <div className="form-order__group">
            <label htmlFor="address" className="form-order__label">
              Address:
            </label>
            <input
              {...register("address", { required: true })}
              className="form-order__input"
            />
            {errors.address && (
              <span className="form-order__error">This field is required</span>
            )}
          </div>

          <input type="submit" className="order__price--button" value="PAY" />

          <div className="order__info--pay">
            {submitClicked && (
              <p className="info__pay info__pay--notcorrect">
                {!isOrderOK && (
                  <p>You must have at least 9 CHF in your basket.</p>
                )}
                {!isFormValid && <p>The form is not correct</p>}
              </p>
            )}

            {isFormValid &&
              isOrderOK &&
              (isLoading ? (
                <div className="spinner">
                  <SyncLoader color={"#0D9276"} loading={isLoading} size={15} />
                  <p className="spinner__text">Wait...</p>
                </div>
              ) : (
                <p className="info__pay info__pay--correct">
                  Your order is placed
                </p>
              ))}
          </div>
        </form>
      </>
    )
  );
};

export default Form;
