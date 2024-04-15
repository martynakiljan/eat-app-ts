/** @format */
import "../styles/all.scss";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

type Props = {
  resetFun?: () => void;
};
const NoFoodFound: React.FC<Props> = () => {
  const { setSearchQuery } = useContext(FilterContext);

  const resetFun = () => {
    setSearchQuery("");
    setCurrentPage(() => {
      return 1;
    });
  };

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
