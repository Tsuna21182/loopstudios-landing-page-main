function VR() {
  return (
    <section className="mt-30">
      <div className="p-5">
        <img
          src="/images/mobile/image-interactive.jpg"
          alt="imagen seccion"
          className="md:hidden"
        />
        <img
          src="/images/desktop/image-interactive.jpg"
          alt="imagen seccion"
          className="hidden md:block"
        />
      </div>
      <article className="text-center p-5">
        <h2 className="text-4xl font-body font-light uppercase mb-5">
          The leader in interactive vr
        </h2>
        <p className="font-display text-DarkGray">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations hace transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}

export default VR;
