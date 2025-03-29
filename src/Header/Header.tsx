import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`p-6 ${
        isOpen
          ? "bg-Black h-dvh"
          : "bg-[url(/images/mobile/image-hero.jpg)] bg-no-repeat bg-cover bg-center"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="w-30">
          <img src="/images/logo.svg" alt="imagen logo" />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src="/images/icon-close.svg" alt="icono menu" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="icono menu" />
          )}
        </button>
        <div className="hidden md:flex ">
          <Navbar />
        </div>
      </div>
      <div>
        {isOpen ? (
          <div className="mt-30 text-3xl md:hidden">
            <Navbar />
          </div>
        ) : (
          ""
        )}
      </div>

      <Hero />
    </header>
  );
}

export default Header;
