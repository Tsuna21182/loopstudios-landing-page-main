function VR() {
  return (
    <section className="w-full p-5 mt-10 max-w-[1200px] mx-auto relative">
      <div className="w-full max-w-[1200px] mx-auto relative grid md:grid-cols-2 gap-10 items-center xl:grid-cols-1">
        <div>
          <img
            src="/images/mobile/image-interactive.jpg"
            alt="imagen seccion"
            className="md:hidden w-full"
          />

          <img
            src="/images/desktop/image-interactive.jpg"
            alt="imagen seccion"
            className="hidden md:block w-full rounded-sm"
          />
        </div>

        <article className="bg-white p-5 text-center md:text-left md:p-10 xl:absolute xl:top-[590px] xl:shadow-xl xl:w-sm xl:-right-10">
          <h2 className="uppercase font-light font-body text-4xl mb-5 md:text-2xl xl:text-lg">
            The leader in interactive vr
          </h2>

          <p className="font-display text-DarkGray text-sm lg:text-base leading-relaxed xl:text-xs">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </div>
    </section>
  );
}

export default VR;
