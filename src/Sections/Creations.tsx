import Gallery from "../Db/Data";
import Btn from "../components/Btn";

function Creations() {
  return (
    <section className="mt-20 p-5 grid items-center">
      <h2 className="text-4xl font-body font-light uppercase mb-5 text-center">
        our creations
      </h2>
      <div>
        {Gallery.map((item) => (
          <div
            key={item.id}
            className={`relative p-5 mb-5  bg-center bg-cover bg-no-repeat rounded-lg shadow-lg`}
            style={{ backgroundImage: `url(${item.Image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-15 rounded-lg"></div>
            <h3 className="relative text-2xl w-40 text-White uppercase font-body font-light mt-20 ">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
      <Btn />
    </section>
  );
}

export default Creations;
