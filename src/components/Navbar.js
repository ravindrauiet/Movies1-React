import React from 'react'
import { Search } from "react-feather"

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.logo}>Movies App</div>

       <div className={styles.right}>
            <div className={styles.search}>
                <input type="text" placeholder="Search movie" />
                <Search />
            </div>
       </div>
    </div>
  )
}

export default Navbar;
