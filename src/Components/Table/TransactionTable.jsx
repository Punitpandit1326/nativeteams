import React from "react";
import styles from "./table.module.css";
import { FaDatabase } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleCheck, CiFilter } from "react-icons/ci";
import CountPages from "../Count/CountPages";


const transactions = [
  {
    transaction: "Balance reward",
    date: "02/10/2024",
    amount: "+0.25 INR",
    balance: "82.97 INR",
    status: "Completed",
  },
  {
    transaction: "Balance reward",
    date: "03/09/2024",
    amount: "+0.26 INR",
    balance: "82.72 INR",
    status: "Completed",
  },
  {
    transaction: "Balance reward",
    date: "15/08/2024",
    amount: "+0.13 INR",
    balance: "82.46 INR",
    status: "Completed",
  },
  {
    transaction: "Ankit Jha",
    date: "17/07/2024",
    amount: "+82.33 INR",
    balance: "82.33 INR",
    status: "Completed",
  },
  {
    transaction: "Ankit Jha",
    date: "17/07/2024",
    amount: "-1.00 USD",
    balance: "0.00 USD",
    status: "Completed",
  },
  {
    transaction: "Rishav Jha",
    date: "17/07/2024",
    amount: "+1.00 USD",
    balance: "1.00 USD",
    status: "Completed",
  },
];

const TransactionTable = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.head}>
        <h6>Latest Transcation</h6>
        <div className="d-flex gap-4">
          <button>
            <CiFilter size={22} /> Filter <RiArrowDropDownLine size={22} />
          </button>
          <h5>Expand Table</h5>
        </div>
      </div>
      <hr className="mt-4" />
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th className="text-start"> Transaction</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>
                <div className={styles.transactionInfo}>
                  <span className={styles.icon}>
                    <FaDatabase style={{ color: "#5152fb" }} />
                  </span>
                  <div>
                    <p>{tx.transaction}</p>
                    <small style={{ color: "#838a90", fontFamily: "inter" }}>
                      {tx.date}
                    </small>
                  </div>
                </div>
              </td>
              <td
                className={
                  tx.amount.startsWith("-") ? styles.negative : styles.positive
                }
              >
                {tx.amount}
              </td>
              <td>{tx.balance}</td>
              <td className="text-success">
                {" "}
                <CiCircleCheck /> &nbsp;
                {tx.status}
              </td>
              <td className="text-center">
                <button className={styles.detailsButton}>View details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className={styles.end_section}>
        <h6>1-2 of 5</h6>
     <CountPages/>
      </div>
    </div>
  );
};

export default TransactionTable;
