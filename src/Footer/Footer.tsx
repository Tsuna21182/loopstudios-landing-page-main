import Navbar from "../Navbar/Navbar";

const iconsRedes = [
  { image: "/images/icon-facebook.svg", alt: "icono redes" },
  { image: "/images/icon-twitter.svg", alt: "icono redes" },
  { image: "/images/icon-pinterest.svg", alt: "icono redes" },
  { image: "/images/icon-instagram.svg", alt: "icono redes" },
];

function Footer() {
  return (
    <footer className="bg-black flex flex-col lg:flex-row justify-center items-center p-5 mt-20 lg:justify-around lg:pb-10">
      <div className="mt-15 flex flex-col items-center text-center lg:items-start">
        <img src="/images/logo.svg" alt="imagen logo" />
        <div className="text-2xl mt-10">
          <Navbar />
        </div>
      </div>
      <div className="mt-10  flex flex-col items-center text-center">
        <div className="flex gap-5">
          {iconsRedes.map((item, index) => (
            <div
              key={index}
              className="relative text-White font-light transition-all duration-300
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1.5
             after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-White
             after:transition-all after:duration-300
             hover:after:w-8 cursor-pointer"
            >
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <p className="text-DarkGray mt-5">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
