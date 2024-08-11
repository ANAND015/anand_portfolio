import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'; 

import {getImageUrl} from "../../utils";
import styles from "../About/About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.box}>
                <div className={`${styles.content} ${styles.leftContent}`}>
                    <h2 className={styles.tile}>Education</h2>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
                            <div className={styles.aboutItemText}>
                                <h3>2022-2026</h3>
                                <p>Computer Science Engineering</p>
                                <h4>Kongu Engineering College</h4>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
                            <div className={styles.aboutItemText}>
                                <h3>2021-2022</h3>
                                <p>HSC</p>
                                <h4>Vidhyalakshmi Matric Higher Secondary School</h4>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
                            <div className={styles.aboutItemText}>
                                <h3>2019-2020</h3>
                                <p>SSLC</p>
                                <h4>Vidhyalakshmi Matric Higher Secondary School</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.content} ${styles.rightContent}`}>
                    <h2 className={styles.tit}>Achievements</h2>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <i className={`fa-solid fa-medal ${styles.icon}`}></i>
                            <div className={styles.aboutItemText}>
                                <h3>2024</h3>
                                <p>Privacy and Security in Media</p>
                                <h4>NPTEL</h4>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                        <i className={`fa-solid fa-medal ${styles.icon}`}></i>
                        <div className={styles.aboutItemText}>
                                <h3>2024</h3>
                                <p>Xenobots-World's Living Robot</p>
                                <h4>PAPER PRESENTATION</h4>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                        <i className={`fa-solid fa-medal ${styles.icon}`}></i>
                        <div className={styles.aboutItemText}>
                                <h3>2023</h3>
                                <p>Cool Breeze Accupressure Helmet</p>
                                <h4>PROJECT PRESENTATION</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
