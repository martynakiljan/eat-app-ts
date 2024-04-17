/** @format */
import React, { ReactNode, useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { BasketItem } from "../types/basket";

type ContextType = {
  basket: BasketItem[];
  addToBasket: (
    id: string,
    name: string,
    price: number,
    amount?: number
  ) => void;
  openModal: () => void;
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  increaseInBasket: (
    itemID: number,
    itemamount: number,
    itemPrice: number
  ) => void;
  decreaseInBasket: (
    itemID: number,
    itemamount: number,
    itemPrice: number
  ) => void;
  totalPrice: number;
  emptyBasket: boolean;
  removeFromBasket: (itemPrice: number, itemId: number) => void;
  handleDeliveryOptionChange: (value: string) => void;
  deliveryOption: string;
  basketLength: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

const BasketContext = createContext<ContextType | null>(null);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within BasketProvider.");
  }
  return context;
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initialBasket = JSON.parse(localStorage.getItem("basket") || "[]");
  const [basket, setBasket] = useState<BasketItem[]>(initialBasket);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const deliveryPrice = 5.9;

  // basket is empty //
  const [emptyBasket, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (basket.length === 0) {
      setIsEmpty(true);
      setTotalPrice(0);
    }
  }, [basket]);

  //delivery//
  const [deliveryOption, setDeliveryOption] = useState("delivery");

  const handleDeliveryOptionChange = (option: string) => {
    setDeliveryOption(option);
    if (basket.length !== 0) {
      calculateTotalPrice(basket, option);
    }
  };

  //add to Basket //
  const addToBasket = (id: number, name: string, price: number) => {
    const existingItem = basket.find((item) => item.id === id);
    setIsEmpty(false);

    if (existingItem) {
      increaseInBasket(id, existingItem.amount);
      calculateTotalPrice(basket, deliveryOption);
    } else {
      const newItem = {
        id,
        name,
        price,
        amount: 1,
      };

      setBasket((oldBasket) => {
        const newBasket = [...oldBasket, newItem];
        calculateTotalPrice(newBasket, deliveryOption);
        return newBasket;
      });
    }
  };

  //increase in Basket//
  const increaseInBasket = (itemID: number, itemAmount: number) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === itemID) {
        const updatedPrice = (item.price / item.amount) * (item.amount + 1);
        return {
          ...item,
          price: parseFloat(updatedPrice.toFixed(2)),
          amount: itemAmount + 1,
        };
      }
      return item;
    });

    setBasket(updatedBasket);
    calculateTotalPrice(updatedBasket, deliveryOption);
    setBasketLength(
      updatedBasket.reduce((total, item) => total + item.amount, 0)
    );
  };

  // decrease
  const decreaseInBasket = (itemId: number, itemAmount: number) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === itemId && itemAmount > 1) {
        const updatedPrice = (item.price / item.amount) * (item.amount - 1);
        return {
          ...item,
          price: parseFloat(updatedPrice.toFixed(2)),
          amount: itemAmount - 1,
        };
      }
      return item;
    });

    calculateTotalPrice(updatedBasket, deliveryOption);
    setBasket(updatedBasket);
    setBasketLength(
      updatedBasket.reduce((total, item) => total + item.amount, 0)
    );
  };

  // total price calculate //
  const calculateTotalPrice = (
    basket: BasketItem[],
    deliveryOption: string
  ) => {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price;
    });

    if (basket.length !== 0 && deliveryOption === "delivery") {
      totalPrice += deliveryPrice;
    }

    setTotalPrice(parseFloat(totalPrice.toFixed(2)));
  };

  // remove from Basket //
  const removeFromBasket = (itemPrice: number, itemId: number) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
    setTotalPrice((prevTotalPrice) => prevTotalPrice - itemPrice);
    console.log(totalPrice);
  };

  //open modal //
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openModal = () => {};

  // basket length
  const [basketLength, setBasketLength] = useState(0);

  useEffect(() => {
    const totalAmount = basket.reduce((total, item) => total + item.amount, 0);
    setBasketLength(totalAmount);
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));

    calculateTotalPrice(basket, deliveryOption);
  }, [basket, deliveryOption, totalPrice]);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        openModal,
        open,
        handleClose,
        handleOpen,
        increaseInBasket,
        decreaseInBasket,
        totalPrice,
        removeFromBasket,
        deliveryOption,
        handleDeliveryOptionChange,
        emptyBasket,
        basketLength,
        setTotalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
