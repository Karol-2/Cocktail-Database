import React from "react";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="Homepage">
      <h1>Hello, fellow drink-lover!</h1>
      <h3>My brand-new website can help you discover new cocktail recipes.</h3>
      <Slider />
      <p>
        You can find here alcoholic drinks, as well as non-alcoholic drinks.
        Just follow to Database section to find your next favourite drink! You
        can use search bar to find a drink and to get a recepie. If you want to
        get more insight into our website, check out the stats tab.
      </p>
      <h2>Cheers &#127864; </h2>
    </div>
  );
};

export default Home;
