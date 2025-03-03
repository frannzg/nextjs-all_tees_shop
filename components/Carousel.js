// 📁 components/Carousel.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/styles/Carousel.module.css";
import Link from "next/link";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Cambiar imagen automáticamente cada 15 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1); // Ciclo: 1 → 2 → 3 → 1 ...
    }, 5000);

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {/* Inputs radio antes del contenedor de diapositivas */}
      <input
        type="radio"
        name="slides"
        id="slide-1"
        className={styles.radio}
        checked={currentSlide === 1}
        onChange={() => setCurrentSlide(1)}
      />
      <input
        type="radio"
        name="slides"
        id="slide-2"
        className={styles.radio}
        checked={currentSlide === 2}
        onChange={() => setCurrentSlide(2)}
      />
      <input
        type="radio"
        name="slides"
        id="slide-3"
        className={styles.radio}
        checked={currentSlide === 3}
        onChange={() => setCurrentSlide(3)}
      />

      <div className={styles.slides}>
        <div className={styles.slide}>
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
            alt="Imagen 1"
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.title}>Bienvenidos a la aventura</h1>
            <p className={styles.description}>Descubre productos sorprendentes que te llevarán al siguiente nivel.</p>
            <Link href="/products">
              <button className={styles.btnVerMas}>Ver más</button>
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img
            src="https://wallpapers.com/images/high/1920-x-1080-nature-desktop-7h76hbdcrtpawe3i.webp"
            alt="Imagen 2"
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.title}>Explora la naturaleza</h1>
            <p className={styles.description}>Conecta con el entorno natural y encuentra inspiración.</p>
            <Link href="/contact">
              <button className={styles.btnVerMas}>Ver más</button>
            </Link>
          </div>
        </div>
        <div className={styles.slide}>
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
            alt="Imagen 3"
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.title}>Innovación y diseño</h1>
            <p className={styles.description}>Diseños únicos que marcan la diferencia en cada detalle.</p>
            <Link href="/about">
              <button className={styles.btnVerMas}>Ver más</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <label htmlFor="slide-1"></label>
        <label htmlFor="slide-2"></label>
        <label htmlFor="slide-3"></label>
      </div>
    </div>
  );
};

export default Carousel;
