import { CHEESE, MEAT, SIZE, VEGETABLES } from "./pizzaData";

export function calculatePrice({ size, cheese, vegetables, meat }) {
  const basicPrice = 200;
  const sizePrice = SIZE[size].price;
  const cheesePrice = cheese.reduce(
    (price, cheese) => price + CHEESE[cheese].price,
    0
  );
  const vegetablesPrice = vegetables.reduce(
    (price, vegetable) => price + VEGETABLES[vegetable].price,
    0
  );
  const meatPrice = meat.reduce((price, meat) => price + MEAT[meat].price, 0);

  return basicPrice + sizePrice + cheesePrice + vegetablesPrice + meatPrice;
}
