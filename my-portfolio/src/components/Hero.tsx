export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
           MUSTAFA YALÇIN
          </h1>
           <p className="mt-4 text-xl md:text-2xl text-gray-100">
            FRONTEND DEVELOPER
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Hızlı, erişilebilir ve kullanıcı dostu web deneyimleri.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
           
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/50 hover:bg-white/[0.3]  transition"
            >
              İletişime Geç
            </a>
          </div>
        </div>
       <div className="flex justify-center md:justify-end">
  <img
    src="/img/herobg.png"
    alt="img"
    className="w-full h-auto max-h-[80vh] object-contain"
  />
</div>
      </div>
    </section>
  );
}
