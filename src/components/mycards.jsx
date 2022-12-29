import { Link } from "react-router-dom";
import Card from "./card";
import PageHeader from "./pageheader";
import UseMyCards from "./usemycards";
const MyCards = () => {
  const cards = UseMyCards();
  return (
    <>
      <PageHeader
        title={
          <span>
            My <i className="bi bi-hurricane"></i> Cards
          </span>
        }
      />

      <div className="d-flex justify-content-center display-5 my-2">
        <Link
          className="link-dark bg-success bg-opacity-50 rounded-5 p-3"
          to={"/createCard"}
        >
          Create a Card
        </Link>
      </div>
      <div className="row">
        {!cards.length ? (
          <p>No cards yet</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};
export default MyCards;
