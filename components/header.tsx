import Link from "next/link";
import Image from "next/image";
import "./styles/header.css";

export default function Header() {
    return (
        <div className="navigationContainer">
            <nav className="p-4 bg-gray-800 text-white flex gap-4 navigationBar">
                <div>
                    <Image
                        className="dark:invert"
                        src="/assets/img/logo.webp"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                    />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                    <Link href="/">Home</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </div>
    );
} 