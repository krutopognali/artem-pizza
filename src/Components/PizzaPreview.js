import { DOUGH, SIZE, SAUCE, VEGETABLES, MEAT, CHEESE } from "../pizzaData"


export const PizzaPreview = ({pizza}) => {
    return <>
    <p>Размер пиццы: {SIZE[pizza.size].name} </p>
    <p>Тесто: {DOUGH[pizza.dough].name} </p>
    <p>Соус: {SAUCE[pizza.sauce].name} </p>

    <p>Сыр: {pizza.cheese.map((c) => CHEESE[c].name).join(", ")}</p>
    <p>Овощи: {pizza.vegetables.map((v) => VEGETABLES[v].name).join(", ")}</p>
    <p>Мясо: {pizza.meat.map((m) => MEAT[m].name).join(", ")}</p>

    <p>Цена: {pizza.price}</p>
    </>
}