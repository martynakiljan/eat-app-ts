/** @format */
import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="coming-soon__container">
      <div className="coming-soon__col coming-soon__text">
        <h2 className="coming-soon__subtitle">Grand opening and free drinks</h2>
        <h3 className="coming-soon__info">
          information about the date and place will appear in the next issue.
        </h3>
        <table className="table">
          <tr>
            <th className="table__day table__title">Day</th>
            <th className="table__hours table__title">Hours</th>
          </tr>
          <tr>
            <td className="table__day">Monday</td>
            <td className="table__hours">10:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Tuesday</td>
            <td className="table__hours">10:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Wednesday</td>
            <td className="table__hours">10:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Thursday</td>
            <td className="table__hours">10:00 AM - 9:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Friday</td>
            <td className="table__hours">10:00 AM - 10:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Saturday</td>
            <td className="table__hours">9:00 AM - 10:00 PM</td>
          </tr>
          <tr>
            <td className="table__day">Sunday</td>
            <td className="table__hours">9:00 AM - 9:00 PM</td>
          </tr>
        </table>
      </div>
      <div className="coming-soon__col coming-soon__img"></div>
    </div>
  );
};

export default ComingSoon;
