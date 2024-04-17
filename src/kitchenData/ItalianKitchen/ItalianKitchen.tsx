/** @format */
import italianFoodImage1 from "../../foodImages/italianFoodImages/italianFood1.jpg";
import italianFoodImage2 from "../../foodImages/italianFoodImages/italianFood2.jpg";
import italianFoodImage3 from "../../foodImages/italianFoodImages/italianFood3.jpg";
import italianFoodImage4 from "../../foodImages/italianFoodImages/italianFood4.jpg";
import italianFoodImage5 from "../../foodImages/italianFoodImages/italianFood5.jpg";
import italianFoodImage6 from "../../foodImages/italianFoodImages/italianFood6.jpg";
import italianFoodImage7 from "../../foodImages/italianFoodImages/italianFood7.jpg";

export const italianKitchen = [
  {
    id: crypto.randomUUID(),
    name: "Brusketta",
    description:
      "Bruschetta is an antipasto dish made with grilled bread topped with vegetables, grated garlic and a tomato mixture.",
    price: 1.8,
    src: italianFoodImage1,
  },
  {
    id: crypto.randomUUID(),
    name: "Focaccia Bread",
    description: "Yeast cake with olives",
    price: 15.6,
    src: italianFoodImage2,
  },
  {
    id: crypto.randomUUID(),
    name: "Pasta Carbonara",
    description: "Spaghetti, egg, parmesan, bacon",
    price: 16.6,
    src: italianFoodImage3,
  },
  {
    id: crypto.randomUUID(),
    name: "Pizza Diavola",
    description: "Tomato sauce, cheese, salami, onion, olives",
    price: 26.6,
    src: italianFoodImage4,
  },
  {
    id: crypto.randomUUID(),
    name: "Lasagne",
    description: "pasta",
    price: 20.7,
    src: italianFoodImage5,
  },
  {
    id: crypto.randomUUID(),
    name: "Ravioli",
    description: "with chicken and spinat",
    price: 12.1,
    src: italianFoodImage6,
  },
  {
    id: crypto.randomUUID(),
    name: "Caprese",
    description: "tomate and mozarella",
    price: 10.9,
    src: italianFoodImage7,
  },
];
