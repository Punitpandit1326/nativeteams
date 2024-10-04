import React from "react";
import styles from "./CurrencyGrid.module.css";

const currencies = [
  { img: "/img/IND.svg", name: "INR", value: 82.97 },
  { img: "/img/EUR.svg", name: "EUR", value: 0.00 },
  { img: "/img/GB.svg", name: "GBP", value: 0.0 },
  { img: "/img/USA.svg", name: "USD", value: 0.0 },
];

const CurrencyGrid = () => {
  return (
    <div className={styles.currencyGrid}>
      {currencies.map((currency, index) => (
        <div key={index} className={styles.currencyCard}>
          <span className={styles.flag}>
            <img src={currency.img} alt={`${currency.name} flag`} />  <span>{currency.name}</span>
          </span>
        
          <div className={styles.value}>
            <h6>{currency.value}</h6>
          </div>
        </div>
      ))}
      <div className={styles.addCurrencyCard}>
        <span className={styles.plus}>+</span>
        <span>New currency</span>
      </div>
    </div>
  );
};

export default CurrencyGrid;
