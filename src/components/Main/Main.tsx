import { Banner } from "components/Banner/Banner";
import { Points } from "components/Points/Points";
import video_preview_desktop_x1 from "assets/images/video_preview_desktop_x1.png";
import video_preview_desktop_x2 from "assets/images/video_preview_desktop_x2.png";
import video_preview_mobile_x1 from "assets/images/video_preview_mobile_x1.png";
import video_preview_mobile_x2 from "assets/images/video_preview_mobile_x2.png";
import { Comments } from "components/Comments/Comments";

export const Main = (): JSX.Element => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="hero__video">
          <div className="hero_iframe-wrapper">
            <iframe
              src="https://youtube.com/embed/wVkD89V1-BQ"
              title="Как правильно определить рекламный бюджет?"
              className="hero__iframe"
              allowFullScreen
            />
          </div>
          <img
            className="hero__img mobile"
            srcSet={`${video_preview_mobile_x1} 1x, ${video_preview_mobile_x2} 2x`}
            alt="Video preview"
            width={320}
            height={180}
          />
          <img
            className="hero__img desktop"
            srcSet={`${video_preview_desktop_x1} 1x, ${video_preview_desktop_x2} 2x`}
            alt="Video preview"
            width={950}
          />
        </div>
        <Banner />
        <Points />
      </div>
      <Comments />
    </main>
  );
};
