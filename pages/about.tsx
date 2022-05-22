import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
function About() {
  return (
    <div className={styles.courses}>
      <Header />
      <h1 className={styles.about}>
        SpudAcademy is a non-profit massive open online course provider aimed at
        professional adults and students. Students take courses primarily to
        improve job-related skills. SpudAcademy has made a special effort to
        attract corporate trainers seeking to create coursework for employees of
        their company. Courses on SpudAcademy can be paid or free, depending on
        the instructor. Courses are mainly focused on improving the knowledge of
        the students on topcis like technology, especially Ethical Hacking.
        SpudAcademy was founded in 2022 by a student who wanted to learn Ethical
        Hacking but wasnt recourses enough. Today SpudAcademy has reached more
        than 10m users and it is growing every day.
      </h1>
    </div>
  );
}

export default About;
