export default function HeroSection({ hero }) {
  return (
    <section
className="relative h-[75vh] w-full bg-cover bg-left bg-no-repeat pt-8 pl-8 flex items-center"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-secondary/70"></div>

      <div className="relative z-10 max-w-4xl text-white pl-10 md:pl-20 ">
        <h1 className="text-4xl md:text-4xl font-bold leading-tight merri">
          {hero.title}
        </h1>

        <p className="text-2xl mt-4 font-semibold merri">{hero.subtitle}</p>

        <p className="mt-1 text-lg opacity-90 
        leading-relaxed max-w-2xl merri">
          {hero.description}
        </p>

        <button className="mt-8 bg-primary px-8 py-3 rounded-[4px] text-white font-semibold text-lg shadow-lg hover:bg-primary transition">
          {hero.buttonText}
        </button>
    
      </div>
    </section>
  );
}
