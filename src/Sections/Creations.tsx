import Gallery from "../Db/Data";
import Btn from "../components/Btn";

function Creations() {
  return (
    <section className="mt-10 p-5 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-10 lg:flex-row lg:justify-between">
        <h2 className="text-4xl font-body font-light uppercase ">
          our creations
        </h2>

        <div className="hidden lg:block">
          <Btn />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Gallery.map((item) => (
          <div
            key={item.id}
            className="group relative p-5 h-72 bg-center bg-cover md:bg-top md:h-96 bg-no-repeat rounded-lg shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url(${
                window.innerWidth < 768 ? item.Image : item.ImageDesktop
              })`,
            }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/20 rounded-lg
                    transition-all duration-200
                    group-hover:bg-white/60"
            ></div>

            {/* Texto */}
            <h3
              className="absolute bottom-5 left-5 text-2xl w-40 uppercase font-body font-light
                   text-White transition-all duration-200 
                   z-50 group-hover:text-black group-hover:font-normal"
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-10 block text-center lg:hidden">
        <Btn />
      </div>
    </section>
  );
}

export default Creations;
