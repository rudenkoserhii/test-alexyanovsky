import { Banner } from "components/Banner/Banner";
import { Points } from "components/Points/Points";
import video_preview_desktop_x1 from "assets/images/video_preview_desktop_x1.png";
import video_preview_desktop_x2 from "assets/images/video_preview_desktop_x2.png";
import video_preview_mobile_x1 from "assets/images/video_preview_mobile_x1.png";
import video_preview_mobile_x2 from "assets/images/video_preview_mobile_x2.png";
import { Comments } from "components/Comments/Comments";
import { useEffect, useState } from "react";

export const Main = (): JSX.Element => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    const eighteen = 18 * 60 + 0;
    const eighteenAndTwenty = 18 * 60 + 20;
    const twentyOne = 21 * 60 + 0;

    const currentTime = currentHour * 60 + currentMinute;

    if (currentTime >= eighteen && currentTime <= eighteenAndTwenty) {
      setShowVideo(true);
    } else if (currentTime >= eighteenAndTwenty && currentTime <= twentyOne) {
      setShowVideo(true);
      setShowBanner(true);
    } else {
      setShowImage(true);
    }

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();

      const currentTime = currentHour * 60 + currentMinute;

      if (currentTime >= eighteen && currentTime <= eighteenAndTwenty) {
        setShowVideo(true);
        setShowBanner(false);
        setShowImage(false);
      } else if (currentTime >= eighteenAndTwenty && currentTime <= twentyOne) {
        setShowVideo(true);
        setShowBanner(true);
        setShowImage(false);
      } else {
        setShowVideo(false);
        setShowBanner(false);
        setShowImage(true);
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="hero__video">
          {showVideo && (
            <div className="hero_iframe-wrapper">
              <iframe
                src="https://youtube.com/embed/wVkD89V1-BQ"
                title="Как правильно определить рекламный бюджет?"
                className="hero__iframe"
                allowFullScreen
              />
            </div>
          )}
          {showImage && (
            <>
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
            </>
          )}
        </div>
        {showBanner && (
          <>
            <Banner />
            <Points />
          </>
        )}
      </div>
      <Comments />
    </main>
  );
};
