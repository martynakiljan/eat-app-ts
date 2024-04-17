/** @format */
import fastFoodImage1 from "../../foodImages/fastFoodImages/fastfood1.jpg";
import fastFoodImage2 from "../../foodImages/fastFoodImages/fastfood2.jpg";
import fastFoodImage3 from "../../foodImages/fastFoodImages/fastFood3.jpg";
import fastFoodImage4 from "../../foodImages/fastFoodImages/fastfood4.jpg";
import fastFoodImage5 from "../../foodImages/fastFoodImages/fastfood5.jpg";
import fastFoodImage6 from "../../foodImages/fastFoodImages/fastfood6.jpg";

export const fastFoodKitchen = [
  {
    id: crypto.randomUUID(),
    name: "Steakhouse Chicken King",
    description:
      "Chicken burger with cheese, tomatoes, cucumbers, bacon, fried egg",
    price: 16.7,
    src: fastFoodImage1,
  },
  {
    id: crypto.randomUUID(),
    name: "Sandwich Chicken",
    description:
      "Sandwich with grilled chicken breast with feta cheese, salad, pickles and mustard",
    price: 22.6,
    src: fastFoodImage2,
  },
  {
    id: crypto.randomUUID(),
    name: "Chicken Wrap",
    description: "Wrap with vegetables and chicken",
    price: 13.6,
    src: fastFoodImage3,
  },
  {
    id: crypto.randomUUID(),
    name: "Chicken nuggets",
    description: "breaded chicken XXL",
    price: 33.6,
    src: fastFoodImage4,
  },
  {
    id: crypto.randomUUID(),
    name: "Burger",
    description: "burger beef with pommes",
    price: 3.6,
    src: fastFoodImage5,
  },
  {
    id: crypto.randomUUID(),
    name: "Chips",
    description: "chips with one souce",
    price: 8.5,
    src: fastFoodImage6,
  },
];
