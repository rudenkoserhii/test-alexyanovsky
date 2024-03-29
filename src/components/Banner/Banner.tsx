import alex_desktop_x1 from "assets/images/alex_desktop_x1.png";
import alex_desktop_x2 from "assets/images/alex_desktop_x2.png";
import alex_mobile_x1 from "assets/images/alex_mobile_x1.png";
import alex_mobile_x2 from "assets/images/alex_mobile_x2.png";

export const Banner = (): JSX.Element => {
  return (
    <section className="banner__section">
      <h3 className="banner__title">
        Как создать прирост трафика и продаж в 2023 году?
      </h3>
      <div className="banner__wrapper">
        <div className="banner__first-part">
          <div className="banner__greet">
            <span className="banner__dot"></span>
            <p className="banner__name">Тренинг</p>
          </div>
          <h2 className="banner__slogan">УДВОЕНИЕ ПРИБЫЛИ</h2>
          <p className="banner__text">
            Ты увеличишь прибыль в своем бизнесе от 2 до 6 раз за 3 месяца!
          </p>
        </div>
        <div className="banner__second-part">
          <p className="banner__text-desktop">
            <span className="banner__text-desktop banner__text-desktop--up">
              <span className="banner__text-desktop banner__text-desktop--up">
                Только до конца месяца действует
              </span>
              <a
                href="./"
                className="link banner__text-desktop banner__text-desktop--link link"
              >
                специальное предложение!
              </a>
              <span className="banner__text-desktop banner__text-desktop--up">
                !
              </span>
            </span>
            <span className="banner__text-desktop banner__text-desktop--down">
              Подробности у куратора после регистрации
            </span>
          </p>
          <p className="banner__text-mobile">
            <span className="banner__text-mobile--span">
              Получи
              <a href="./" className="banner__text-mobile--link link">
                спецпредложение
              </a>
              у куратора после регистрации
            </span>
          </p>
          <a href="./" className="banner__button link">
            Получить спецпредложение
          </a>
        </div>
        <img
          className="banner__image banner__image--desktop"
          srcSet={`${alex_desktop_x1} 1x, ${alex_desktop_x2} 2x`}
          alt="Man in jacket"
          width={211}
        />
        <img
          className="banner__image banner__image--mobile"
          srcSet={`${alex_mobile_x1} 1x, ${alex_mobile_x2} 2x`}
          alt="Man in jacket"
          width={150}
        />
      </div>
    </section>
  );
};
