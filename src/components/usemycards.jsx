import { useEffect, useState } from "react";
import { getAllCards } from "../services/cardservice";
const UseMyCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const response = await getAllCards();
      setCards(response.data);
    };
    getCards();
  }, []);
  return cards;
};
export default UseMyCards;
