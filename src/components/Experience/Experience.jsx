import React from "react";
import Skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
    return(
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
            Skills.map((skill,id)=>{
                return <div key={id}>
                    <div><img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    <h1>{skill.desc}</h1></div>
                    </div>
            })
        }</div>
        </div>
    </section>
    );
};