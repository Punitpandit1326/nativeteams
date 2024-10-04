import React from "react";
import styles from "./home.module.css";
import { IoMdAdd } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { BiTransfer } from "react-icons/bi";
import { TbHandFinger } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Navbar from "../../Components/Navbar/Navbar";
import { IoAddCircleOutline } from "react-icons/io5";
import CurrencyGrid from "../../Components/CurrencyGrid/CurrencyGrid";
import TransactionTable from "../../Components/Table/TransactionTable";

const Home = () => {
  return (
    <div className="main_section">
      <Navbar />

      {/* -------main_section-------- */}

      <Row>
        <Col md={9} sm={12}>
          <div className={styles.left__section}>
            <h6>
              Primary wallet balance{" "}
              <IoIosArrowDown style={{ cursor: "pointer" }} />
            </h6>
            <h1>82.97 INR</h1>
            <div className={styles.main_sec}>
              <div className={styles.logo_section}>
                <div className={styles.logo}>
                  <IoMdAdd className={styles.btn_icon} />
                </div>
                <h6>Add</h6>
              </div>
              <div className={styles.logo_section}>
                <div className={styles.logo}>
                  <AiOutlineSend className={styles.btn_icon} />
                </div>
                <h6>Send</h6>
              </div>
              <div className={styles.logo_section}>
                <div className={styles.logo}>
                  <BiTransfer className={styles.btn_icon} />
                </div>
                <h6>Convert</h6>
              </div>
              <div className={styles.logo_section}>
                <div className={styles.logo}>
                  <TbHandFinger className={styles.btn_icon} />
                </div>
                <h6>Request</h6>
              </div>
            </div>

            <div className={styles.new_card}>
              <IoAddCircleOutline style={{ color: "#5152fb" }} />
              <p>Order new card</p>
            </div>

            <CurrencyGrid />
          </div>
        </Col>
        <Col md={3} sm={12}>
          <div className={styles.right_section}>
            <h2> Request or create contracts with ease! </h2>
          </div>
        </Col>
      </Row>

      {/* -------table_section-------- */}
      <TransactionTable />
    </div>
  );
};

export default Home;
