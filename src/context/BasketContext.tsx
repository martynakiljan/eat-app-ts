/** @format */
import React, { ReactNode, useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { BasketItemTypes } from "../types/basketTypes";

type ContextType = {
  basket: BasketItemTypes[];
  addToBasket: (
    id: number,
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
};

const BasketContext = createContext<ContextType | null>(null);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket musi zostac uzyte wewnatrz BasketProvider");
  }
  return context;
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [basket, setBasket] = useState<BasketItemTypes[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  let deliveryPrice = 5.9;

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
    calculateTotalPrice(basket, option);
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
  };

  // total price calculate //

  const calculateTotalPrice = (
    basket: BasketItemTypes[],
    deliveryOption: string
  ) => {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price;
    });

    if (deliveryOption === "delivery") {
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
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
