"use client";
import React from 'react';
import styles from "@/components/styles/loader.module.css"; // Importa los estilos como un módulo CSS

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}> {/* Usamos la clase loader del CSS Module */}
      <div className={`${styles['jimu-primary-loading']}`}></div> {/* Usamos la clase jimu-primary-loading del CSS Module */}
    </div>
  );
};

export default Loader;
