const navLinks = [
  { href: "#", name: "About" },
  { href: "#", name: "Careers" },
  { href: "#", name: "Events" },
  { href: "#", name: "Products" },
  { href: "#", name: "Support" },
];

function Navbar() {
  return (
    <nav className="font-body flex flex-col md:flex-row gap-3 ">
      {navLinks.map((item) => (
        <a
          href="#"
          className="relative text-White font-light transition-all duration-300
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1.5
             after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-White
             after:transition-all after:duration-300
             hover:after:w-8 lg:text-2xl"
          key={item.name}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
