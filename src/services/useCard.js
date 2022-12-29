import { useEffect, useState } from "react";
import cardService, { getAllCards } from "../services/cardservice";
const UseMyCard = (id) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    const getCard = async () => {
      const response = await cardService.getCard(id);
      setCard(response.data);
    };
    getCard();
  }, []);
  return card;
};
export default UseMyCard;
