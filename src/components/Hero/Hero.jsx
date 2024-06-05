import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Junior Developer</h1>
        <p className={styles.description}>
          Hi, I'm Muhammad Aulia Haqiqi.A passionate Flutter and Laravel
          based in Tangerang, Indonesia
        </p>
        <a href="mailto:maulia.haqiqi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage5.png")}
        alt="Foto qiqi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
