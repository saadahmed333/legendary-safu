import Giveaway from "../sections/giveaway";
import About from "../sections/about";
import Games from "../sections/games";
function Home() {
  return (
    <div>
      <div>
        <Giveaway />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Games />
      </div>
    </div>
  );
}

export default Home;
