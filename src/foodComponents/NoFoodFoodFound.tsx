/** @format */
import "../styles/all.scss";

type Props = {
  resetFun: () => void;
};

const NoFoodFound: React.FC<Props> = ({ resetFun }) => {
  return (
    <div className="info__food">
      <p>No food found. Sorry!</p>
      <button onClick={resetFun} className="info__button">
        Get All Food!
      </button>
    </div>
  );
};

export default NoFoodFound;
