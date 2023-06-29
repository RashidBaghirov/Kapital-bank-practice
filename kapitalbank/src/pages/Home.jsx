import React from "react";
import Banner from "../components/Main/Banner";
import Operations from "../components/Main/Operations";
import Cardsection from "../components/Main/Cardsection";
import Daily from "../components/Main/Daily";
import Calculator from "../components/Main/Calculator";
import Endcards from "../components/Main/Endcards";
import News from "../components/Main/News";
import MainCurrency from "../components/Main/MainCurrency";

const Home = () => {
  return (
    <div>
      <Banner />
      <Operations />
      <Cardsection />
      <Daily />
      <Calculator />
      <Endcards />
      <News />
      <MainCurrency />
    </div>
  );
};

export default Home;
