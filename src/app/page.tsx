"use client";
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';
import React, {useState} from "react";

export default function Home() {
  const [my_name] = useState<String>("José Cláudio")
  const [project_name] = useState<String>("League of Heroes")

  return (
    <div className={styles.page}>
      
      <Header className={styles.header}  project_name={project_name} />

      {/* Main */}
      <main className={styles.main}>
        <h2 className={styles.h2}>Top Heroes</h2>
        <div className={styles['hero-container']}>
          {/* Placeholder para heróis */}
          <div className={styles.hero}>
            <img
              src="/placeholder.png" // Substitua pela imagem do placeholder ou deixe vazio por enquanto
              alt="Hero Placeholder"
              className={styles.img}
            />
            <h3 className={styles.h3}>Hero Placeholder</h3>
          </div>
          <div className={styles.hero}>
            <img
              src="/placeholder.png"
              alt="Hero Placeholder"
              className={styles.img}
            />
            <h3 className={styles.h3}>Hero Placeholder</h3>
          </div>
          <div className={styles.hero}>
            <img
              src="/placeholder.png"
              alt="Hero Placeholder"
              className={styles.img}
            />
            <h3 className={styles.h3}>Hero Placeholder</h3>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer className={styles.footer}  my_name={my_name} project_name={project_name}/>
    </div>
  );
}
