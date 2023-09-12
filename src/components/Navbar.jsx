import React from "react";
import styles from "./styles/Navbar.module.css"

export default function Navbar() {

    return (
        <div className={`${styles.header}`}>
            <h1 className={`${styles.header__title}`}>Library</h1>
        </div>
        
    )
}