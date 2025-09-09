import { ChevronRight } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  tasks: string[];
};

const experience: ExperienceItem = {
  role: "Frontend Developer",
  company: "PROJESOFT TEKNOLOJİ A.Ş",
  period: "2020 – 2025",
  location: "GAZİANTEP / TEKNOPARK",
  tasks: [
    "B2C ve B2B e-ticaret platformlarında responsive ve kullanıcı odaklı arayüzler geliştirdim.",
    "Tailwind CSS ile modern, ölçeklenebilir ve görsel açıdan tutarlı tasarımlar oluşturdum.",
    "Site performansını artırmaya yönelik optimizasyonlarla yüklenme sürelerini iyileştirdim.",
    "Müşteri geri bildirimlerini dikkate alarak arayüzlerde sürekli geliştirmeler yaptım.",
    "Tasarım ve backend ekipleriyle işbirliği içinde projelerin zamanında ve başarılı şekilde tamamlanmasına katkıda bulundum.",
    "Kişisel gelişim kapsamında React.js ve Vue.js teknolojileri üzerine çalışmalar yaparak modern framework bilgimi genişlettim.",
  ],
};


export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
       <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink">
         DENEYİMLERİM
          </h2>
        <hr className="w-64 mt-2 text-shadow-yellow-600"/>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-xl font-semibold text-brand">
            Görevlerim & Katkılarım
          </h3>
          <ul className="list-disc mt-4 space-y-2 text-gray-100 text-md leading-relaxed">
            {experience.tasks.map((task, i) => (
              <li className="flex list-none" key={i}><ChevronRight className="text-blue-600"/>{task}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.3] transition">
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <p className="text-gray-100 mt-1">{experience.company}</p>
          <p className="text-gray-100 text-md">
            {experience.period}
            {experience.location ? ` • ${experience.location}` : ""}
          </p>

          <div className="mt-4 text-md text-gray-100">
           E-ticaret çözümleri üzerinde çalışırken HTML, CSS, Tailwind ve JavaScript ile çok sayıda arayüz geliştirdim. Bu süreçte müşteri geri bildirimlerine hızlı yanıt vererek sürekli iyileştirme yaptım ve kişisel olarak React ve Vue öğrenerek modern frontend trendlerini takip ettim.
          </div>
        </div>
      </div>
    </section>
  );
}
