import React, { useState, useEffect } from "react";
import CardsBox from "./Components/CardsBox/CardsBox";
import Header from "./Components/Header/Header";
import api from "./utils/api";
function App() {
  const [isNew, setNew] = useState(false);
  const [plates, setPlates] = useState([]);
  const [cards, setCards] = useState([]);
  const [timer, setTimer] = useState(false);
  let date = new Date()
  const getData = () => {
    api
      .getInfo()
      .then((data) => {
        setNew(data.new);
        setPlates(data.data);

      })
      .catch((err) => {
        console.log(err);
      })
  };
  useEffect(() => {
    setInterval(() => {
      updateTimer();
    }, 15000);
  }, []);
  function updateTimer() {
    setTimer(true);
  }

  if (timer === true) {
    setTimer(false);
    getData();
    console.log(date)
    console.log(plates);
    console.log(plates.slice().sort((prev, next) => prev.id - next.id));

    if (isNew) {
      setCards(plates);
    } else {

      for (let i = 0; i < cards.length; i++) {
        cards[i].temperature = plates.find((el => el.id === cards[i].id)).temperature;
      }
    }
  }

  useEffect(() => {
    getData();

  }, []);

  useEffect(() => {
    if (cards.length === 0) {
      setCards(plates);
    }

  }, [plates]);

  return (
    <>
      <Header />
      <CardsBox arr={cards} />
    </>
  );
}

export default App;
