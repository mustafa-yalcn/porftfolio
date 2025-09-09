import { Monitor, Layout, ShoppingCart, Zap } from "lucide-react";

const services = [
  {
    title: "Modern Web Arayüzleri",
    desc: "Hızlı, responsive ve kullanıcı dostu arayüzler. İş deneyimlerimde HTML, CSS, TailwindCSS, JavaScript ve jQuery ile geliştirme; kişisel projelerimde React ve Vue ile modern yaklaşımlar.",
    icon: Monitor,
  },
  {
    title: "UI / UX Uygulama",
    desc: "Figma veya Photoshop’ta hazırlanmış tasarımları canlıya aktarma. Piksel uyumlu, erişilebilir ve estetik arayüzler geliştirme.",
    icon: Layout,
  },
  {
    title: "E-Ticaret Çözümleri",
    desc: "Sepet tasarımı, müşteri ekranları, giriş–çıkış (login/logout), ana sayfa, ürün detay ve listeleme sayfaları dahil olmak üzere e-ticaret projelerinde kapsamlı arayüz geliştirme.",
    icon: ShoppingCart,
  },
  {
    title: "Performans & SEO",
    desc: "Lighthouse skorlarını yükseltmeye yönelik optimizasyonlar (hız, erişilebilirlik, SEO) gerçekleştirme.",
    icon: Zap,
  },
];


export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
          HİZMETLERİM
          </h2>
<hr className="w-64 mt-2 text-shadow-yellow-600"/>

      <div className="mt-12 grid sm:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.3] transition"
          >
            <service.icon className="w-10 h-10 text-brand" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-100 text-md leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
