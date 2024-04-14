/** @format */

import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "../../types/formData";

const Contact: React.FC = () => {
  const [formCorrect, setFormCorrect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = () => {
    setFormCorrect(true);
    reset();
  };

  useEffect(() => {
    if (formCorrect) {
      const timer = setTimeout(() => {
        setFormCorrect(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formCorrect]);

  return (
    <div className="form">
      <h1 className="form__title">Contact Us!</h1>
      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name:
          </label>
          <input
            id="name"
            className="form__input"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
          />
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "minLength" && (
            <p className="error">Name must consist of at least 3 letters...</p>
          )}
          {errors?.name?.type === "maxLength" && (
            <p>Name is too long - max 15 characters</p>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email:
          </label>
          <input
            id="email"
            className="form__input"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          {errors?.email?.type === "required" && <p>Email is required</p>}
          {errors?.email?.type === "pattern" && (
            <p className="error">Invalid email address</p>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="message" className="form__label">
            Message:
          </label>
          <textarea
            id="message"
            className="form__input form__input--textarea"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: true,
              minLength: 5,
              maxLength: 1000,
            })}
          />
          {errors?.message?.type === "minLength" && (
            <p className="error">Write something more...</p>
          )}
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
        {formCorrect ? (
          <p className="form-correct">Thank you!</p>
        ) : (
          <p className="form-not-correct">Please fill out the form</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
