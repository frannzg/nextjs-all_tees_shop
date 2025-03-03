"use client"; // Esto marca el archivo como un componente del lado del cliente

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles/header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para alternar el menú hamburguesa
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Función para cerrar el menú al hacer clic en un enlace
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="navigationContainer navigationText">
            <nav className="p-4 bg-gray-800 text-white flex gap-4 navigationBar">
                <div>
                    <Link href="/">
                        <Image
                            className=""
                            src="/assets/img/logo.webp"
                            alt="Vercel logomark"
                            width={140}
                            height={20}
                        />
                    </Link>
                </div>
                
                {/* Enlaces visibles en pantallas grandes */}
                <div className="desktop-menu">
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                </div>

                {/* Menú hamburguesa para pantallas pequeñas */}
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Menú para dispositivos móviles */}
                <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
                    <Link href="/" onClick={closeMenu}>Home</Link>
                    <Link href="/contact" onClick={closeMenu}>Contact</Link>
                    <Link href="/products" onClick={closeMenu}>Products</Link>
                    <Link href="/about" onClick={closeMenu}>About</Link>
                </div>
            </nav>
        </div>
    );
}
