/** @format */
import "../styles/all.scss";

type Props = {
  resetFun?: () => void;
};
const NoFoodFound: React.FC<Props> = () => {
  const resetFun = () => {
    const inputElement = document.querySelector<HTMLInputElement>(
      ".home__input--input"
    );
    if (inputElement) {
      inputElement.value = "";
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
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
