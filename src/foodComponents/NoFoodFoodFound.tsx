/** @format */
import "../styles/all.scss";

const NoFoodFound = ({ getAllFood }) => {
  return (
    <div className="info__food">
      <p>No food found. Sorry!</p>
      <button onClick={getAllFood} className="info__button">
        Get All Food!
      </button>
    </div>
  );
};

export default NoFoodFound;
