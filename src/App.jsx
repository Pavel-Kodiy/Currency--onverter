import classes from './App.module.css';
import { useState, useEffect, useRef } from 'react';
import { Convertor } from './components/convertor/Convertor';
import { Header } from './components/header/Header';
import { Arrow } from './components/arrow/Arrow';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const [currentRate, setCurrentRate] = useState('UAH');
  const [expectedRate, setExpectedRate] = useState('USD');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [expectedPrice, setExpectedPrice] = useState(1);

  const ratesRef = useRef({});

  const usdRate = (ratesRef.current['UAH'] / ratesRef.current['USD'] * 1).toFixed(3)
  const eurRate = (ratesRef.current['UAH'] / ratesRef.current['EUR'] * 1).toFixed(3)

  useEffect(() => {
    fetch('https://cdn.cur.su/api/nbu.json')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        ratesRef.current = json.rates;
        onChangeExpectedPrice(1);
      })
      .catch((err) => {
        console.warn(err);
      })
  }, []);

  const onChangeCurrentPrice = (value) => {
    const price = value / ratesRef.current[currentRate];
    const result = price * ratesRef.current[expectedRate];
    setExpectedPrice(result.toFixed(3));
    setCurrentPrice(value);
  }

  const onChangeExpectedPrice = (value) => {
    const result = ratesRef.current[currentRate] / ratesRef.current[expectedRate] * value;
    setCurrentPrice(result.toFixed(3));
    setExpectedPrice(value);
  }

  useEffect(() => {
    onChangeCurrentPrice(currentPrice);
  }, [currentRate]);

  useEffect(() => {
    onChangeExpectedPrice(expectedPrice);
  }, [expectedRate]);

  return (
    <div className={classes.App}>
      <Header
        usd={usdRate}
        eur={eurRate}
      />
      <div className={classes.mainContent}>
        <Convertor
          value={currentPrice}
          currency={currentRate}
          onChangeCurrency={setCurrentRate}
          onChangeValue={onChangeCurrentPrice}
        />
        <Arrow />
        <Convertor
          value={expectedPrice}
          currency={expectedRate}
          onChangeCurrency={setExpectedRate}
          onChangeValue={onChangeExpectedPrice}
        />
      </div>
      <Footer />
    </div>
  );
}
