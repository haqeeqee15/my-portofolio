import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/flutter.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Junior Flutter Developer</h3>
              <p>
              I am a Junior Flutter Developer focused on creating high-quality mobile applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Junior WEB Developer</h3>
              <p>
              Currently, I am participating in the development of a project using the Laravel framework with web-view and mobile-view features
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cyber-security.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
              <h3>Cyber Security</h3>
              <p>
              I have basic networking experience and hold an entry-level cybersecurity certification
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
