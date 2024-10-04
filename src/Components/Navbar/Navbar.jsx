import React from "react";
import styles from "./nav.module.css";
import { CgMenuGridO } from "react-icons/cg";
// import { FaRegCircleUser } from "react-icons/fa6";
import { LuUserCircle } from "react-icons/lu"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src="/img/logo.svg" alt="logo" />
      <div className={styles.right}>
        <button>Referrals</button>
        <LuUserCircle className={styles.icon} />
        <IoNotificationsOutline className={styles.icon} />
        <CgMenuGridO className={styles.icon} />
      </div>
    </div>
  );
};

export default Navbar;
