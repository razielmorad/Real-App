import httpServices from "./httpservices";

export function createCard(card) {
  return httpServices.post("/cards", card);
}
export function getAllCards() {
  return httpServices.get("/cards/my-cards");
}
export function deleteCard(id) {
  return httpServices.delete(`/cards/${id}`);
}
export function getCard(id) {
  return httpServices.get(`/cards/${id}`);
}
export function updateCard(id, card) {
  return httpServices.put(`/cards/${id}`, card);
}

const cardService = {
  createCard,
  getAllCards,
  deleteCard,
  getCard,
  updateCard,
};
export default cardService;
