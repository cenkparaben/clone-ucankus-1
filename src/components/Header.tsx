import React from "react";
import logo from "../../public/Baykar Savunma.svg";
import menuIcon from "../../public/menu-icon.svg"; // Menü ikonu için bir SVG dosyası

const Header: React.FC = () => {
    return (
        <header className="bg-white text-black p-4 w-screen">
            <div className="container relative mx-auto flex items-center justify-between">
                {/* Logo */}
                <img src={logo} alt="Baykar Logo" className="h-36 absolute" />
                <div></div>

                {/* Web Görünümü: Menü elemanları */}
                <nav className="hidden md:block md:text-end">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-300 text-lg header">
                                ANA SAYFA
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 header text-lg">
                                HİZMETLER
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 header text-lg">
                                MÜŞTERİLER
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 header text-lg">
                                TAKIM
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 header text-lg">
                                BLOG
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 header text-lg">
                                İLETİŞİM
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobil Görünümü: Menü ikonu */}
                <div className="md:hidden">
                    <img src={menuIcon} alt="Menu Icon" className="h-8" />
                </div>
            </div>
        </header>
    );
};

export default Header;
