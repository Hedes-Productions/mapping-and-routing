import './Card.css';

const Card = ({ userName, userImageURL, userAge, userDetails }) => {
  return (
    <div className="card-bg">
      <div className="card-name">{userName}</div>
      <img src={userImageURL} alt="userphoto" className="card-image" />
      <div className="card-age">{userAge}</div>
      <div className="card-details">{userDetails}</div>
    </div>
  );
};

// function Card(){

// }

export default Card;
