import { points } from "enums";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

export const Points = (): JSX.Element => {
  return (
    <section className="points__wrapper">
      <h3 className="points__title">Ты получишь:</h3>
      <ul className="points__list list">
        {points.map((item) => (
          <li key={item} className="points__item">
            <p className="points__text">
              <span>{item}</span>
            </p>
            <StarIcon className="points__icon" />
          </li>
        ))}
      </ul>
    </section>
  );
};
