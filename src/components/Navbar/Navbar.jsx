import React,{useState} from 'react'

import styles from "./Navbar.module.css";
import  { getImageUrl } from "../../utils"

export const Navbar = () => {
    const[menuOpen, setMenuOpen]=useState(false);
    return(
    <nav className={styles.Navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.Menu}>
            <img className={styles.img} style={{width:"30px"}} 
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                :getImageUrl("nav/menuIcon.png")
            } 
            alt="menu-button"
            onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul 
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}
            >
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#project">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}