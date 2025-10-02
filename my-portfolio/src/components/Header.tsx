import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#about", label: "Hakkımda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#services", label: "Hizmetler" },
  { href: "#experience", label: "Deneyim" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/85 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
        <div className="my-2 w-full"> 
          <a
            href="/"
            className="text-white font-heading font-semibold  text-md"
          >
            <img className="" src="/img/logo.png"/>
          </a>
</div>
          <div className="w-full hidden md:flex  justify-center">
          <ul className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-gray-100 hover:text-white transition"
                >
                  {item.label}
                  <span className=" absolute left-0 -bottom-1 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
</div>
         
          <div className="w-full hidden md:flex justify-end items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1V0D2Z_PrQi3IVUMwdpTd1exytcB0qkIm/view?usp=sharing" target="_blank"
              className="px-3 py-2 rounded-lg bg-brand text-white hover:bg-brandDark transition"
            >
              CV
            </a>
          </div>
          <button
            className="md:hidden flex justify-end items-center text-gray-100"
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden  bg-black/95 backdrop-blur border-b border-white/10 transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-gray-200 hover:text-white py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1V0D2Z_PrQi3IVUMwdpTd1exytcB0qkIm/view?usp=sharing"
              className="inline-block px-3.5 py-2 rounded-lg bg-brand text-white hover:bg-brandDark transition"
              onClick={() => setOpen(false)}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
