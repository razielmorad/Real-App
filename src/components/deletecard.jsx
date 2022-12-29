import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCard } from "../services/cardservice";

const DeleteCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const deleteCards = async () => {
      try {
        await deleteCard(id);
        navigate("/myCards");
      } catch (error) {
        console.log(error);
      }
    };
    deleteCards();
  }, []);
  return null;
};
export default DeleteCard;
