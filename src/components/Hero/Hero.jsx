import React from "react";
import Heroimage from '../../../assets/hero/heroimg.png';
import styles from '../Hero/Hero.module.css';
export const Hero = () => {
    return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anand</h1>
            <p className={styles.description}>I am a Computer Science and Engineering student at Kongu Engineering College, where I am gaining a strong foundation in computing and information technology.</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={Heroimage} alt="Hero image of me" className={styles.heroimg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
    );
};