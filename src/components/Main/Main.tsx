import { Banner } from "components/Banner/Banner";
import { Points } from "components/Points/Points";

export const Main = (): JSX.Element => {
  return (
    <main className="main">
      <Banner />
      <Points />
    </main>
  );
};
