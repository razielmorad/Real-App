import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizDescription, bizName, bizImage, bizPhone, bizNumber },
}) => {
  return (
    <>
      <div className="card mx-4 my-4" style={{ width: "18rem" }}>
        <img className="card-img-top" src={bizImage} alt={bizName} />
        <div className="card-body">
          <h5 className="card-title">{bizName}</h5>
          <p className="card-text">{bizDescription}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Business Name : {bizName}</li>
          <li className="list-group-item">Business Number : {bizNumber}</li>
          <li className="list-group-item">Phone Number : {bizPhone}</li>
        </ul>
        <div className="card-body">
         <Link className="card-link" to={`/myCards/edit/${_id}`}>Edit Card</Link>
          <Link className="card-link" to={`/myCards/delete/${_id}`}>
            Delete card
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
