
import { Mail, Linkedin, Github, MapPin, Copy } from "lucide-react";
import { useState } from "react";

type ContactItem = {
  title: string;
  subtitle?: string;
  href?: string;         
  text?: string;   
  icon: React.ElementType;
};

const items: ContactItem[] = [
  {
    title: "E-posta",
    subtitle: "24 Saat İçinde Dönüş",
    text: "mustafayalcin277@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    subtitle: "Profilime Göz At",
    href: "https://www.linkedin.com/in/mustafa-yalcin27/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    subtitle: "Kod Örneklerim",
    href: "https://github.com/mustafa-yalcn",
    icon: Github,
  },
  {
    title: "Konum",
    subtitle: "GAZİANTEP",
    icon: MapPin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 gap-12">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            İletişim
          </h2>
          <p className="mt-4 text-md text-gray-100">
            Yeni fırsatlara ve freelance işlere açığım. Bana doğrudan e-posta
            atabilir ya da sosyal hesaplarımdan ulaşabilirsiniz.
          </p>
          <div className="mt-6 text-md not-[]:flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/[0.3] text-gray-100 text-xs">
              Remote / Hybrid / On-Site
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/[0.3] text-gray-100 text-xs">
              Frontend / React / Vue
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/[0.3] text-gray-100 text-xs">
              E-ticaret
            </span>
          </div>
        </div>
        <div className="mt-4 text-md grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((itm) => {
            const Icon = itm.icon;
            
            const content = (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.3] transition p-5 h-full">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-brand" />
                  <h3 className="text-lg font-semibold">{itm.title}</h3>
                </div>
                {itm.subtitle && (
                  <p className="mt-1 text-gray-100 ">{itm.subtitle}</p>
                )}

                {itm.href ? (
                  <p className="mt-4">
                    <span className="text-gray-100">
                      {new URL(itm.href).hostname.replace("www.", "")}
                    </span>
                  </p>
                ) : itm.text ? (
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-100 ">{itm.text}</span>
                    <button
                      onClick={() => copyToClipboard(itm.text!)}
                      className="inline-flex items-center gap-1 text-xs text-gray-100 hover:text-white/90"
                      aria-label="Kopyala"
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? "Kopyalandı" : "Kopyala"}
                    </button>
                  </div>
                ) : null}
              </div>
            );

            return itm.href ? (
              <a
                key={itm.title}
                href={itm.href}
                target="_blank"
                rel="noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-brand/50 rounded-2xl"
              >
                {content}
              </a>
            ) : (
              <div key={itm.title} className="focus-within:ring-2 focus-within:ring-brand/50 rounded-2xl">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
