import Navbar from "../Navbar/Navbar";

function Footer() {
  return (
    <footer className="bg-black flex flex-col justify-center items-center p-5 mt-20">
      <div className="mt-15 flex flex-col items-center text-center">
        <img src="/images/logo.svg" alt="imagen logo" />
        <div className="text-2xl mt-10">
          <Navbar />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center text-center">
        <div className="flex gap-5">
          <img src="/images/icon-facebook.svg" alt="icono redes" />
          <img src="/images/icon-twitter.svg" alt="icono redes" />
          <img src="/images/icon-pinterest.svg" alt="icono redes" />
          <img src="/images/icon-instagram.svg" alt="icono redes" />
        </div>
        <p className="text-DarkGray mt-5">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
