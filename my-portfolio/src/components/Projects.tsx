import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "E-Ticaret Platformu (HTML+CSS+Tailwind)",
    desc: "Html + Css + Tailwind ile geliştirilmiş modern e-ticaret sitesi.",
    images: [
      "/src/assets/img/projects/prj2_1.png",
      "/src/assets/img/projects/prj2_2.png",
      "/src/assets/img/projects/prj2_3.png",
      "/src/assets/img/projects/prj1_1.png",
      "/src/assets/img/projects/prj1_2.png",
      "/src/assets/img/projects/prj1_3.png",
      "/src/assets/img/projects/prj1_4.png",
       "/src/assets/img/projects/prj4_1.png",
      "/src/assets/img/projects/prj4_2.png",
       "/src/assets/img/projects/prj5_1.png",
      "/src/assets/img/projects/prj6_1.png",
       "/src/assets/img/projects/prj7_1.png",
      "/src/assets/img/projects/prj9_1.png",
    ],
  },
 
  {
    title: "Kişisel Dashboard Proje",
    desc: "Vue.js + Tailwind ile geliştirilmiş admin sayfası .",
    images: [
      "/src/assets/img/projects/prj10.png",
    
    ],
  },
  {
    title: "Kişisel Landing Page Proje",
    desc: "Html + Css ile geliştirilmiş otel rezarvasyon sitesi",
    images: [
      "/src/assets/img/projects/prj11.png",
    ],
  },
  {
    title: "Kişisel E-Ticaret Sitesi",
    desc: "React + Tailwind ile geliştirilmiş e-ticaret sitesi.",
    images: [
      "/src/assets/img/projects/prj12.png",
    ],
  },
  {
    title: "Kişisel Kitaplık Sitesi",
    desc: "React + Tailwind ile geliştirilmiş kişisel kütüphane sitesi.",
    images: [
     "/src/assets/img/projects/prj14.png",
    ],
  },
  {
    title: "Kişisel Hava Durumu Sitesi",
    desc: "React + Tailwind ile geliştirilmiş hava durumu sitesi.",
    images: [
      "/src/assets/img/projects/prj15.png",
    ],
  },

];

type Active = { projectIndex: number; imageIndex: number } | null;

export default function Projects() {
  const [active, setActive] = useState<Active>(null);

  const openProject = (projectIndex: number) => {
    setActive({ projectIndex, imageIndex: 0 });
  };

  const closeModal = () => setActive(null);

  const nextImage = useCallback(() => {
    if (!active) return;
    const imgs = projects[active.projectIndex]?.images ?? [];
    if (imgs.length === 0) return;
    setActive((prev) =>
      prev
        ? {
            ...prev,
            imageIndex: (prev.imageIndex + 1) % imgs.length,
          }
        : prev
    );
  }, [active]);

  const prevImage = useCallback(() => {
    if (!active) return;
    const imgs = projects[active.projectIndex]?.images ?? [];
    if (imgs.length === 0) return;
    setActive((prev) =>
      prev
        ? {
            ...prev,
            imageIndex: (prev.imageIndex - 1 + imgs.length) % imgs.length,
          }
        : prev
    );
  }, [active]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, nextImage, prevImage]);
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  const activeProject = active ? projects[active.projectIndex] : null;
  const activeImages = activeProject?.images ?? [];
  const imgSrc =
    active && activeImages.length > 0
      ? activeImages[active.imageIndex]
      : undefined;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:py-28">
           <h2 className="font-heading text-3xl md:text-4xl font-bold">
         PROJELERİM
          </h2>
<hr className="w-64 mt-2 text-shadow-yellow-600"/>
<div className="mt-3 text-md text-gray-100 ">
   <ul className="list-none text-md space-y-2 text-gray-100">
  <li>E-Ticaret Platformu olarak burada paylaştığım projeler, önceki iş deneyimlerimde geliştirdiğim  kurumsal farklı sektörlerden web arayüzlerinden seçilmiş örnek ekran görüntüleridir.</li>
<li>
Gizlilik ilkelerine bağlı kalarak marka ve müşteri bilgilerini kaldırdım; görseller yalnızca frontend geliştirme sürecindeki katkılarımı göstermek amacıyla eklendi.</li>
<li>Amacım, kullanıcı dostu, responsive ve performans odaklı arayüz geliştirme konusundaki deneyim ve yetkinliklerimi ortaya koymaktır.</li>

   </ul>

</div>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <button
            key={`${project.title}-${idx}`}
            type="button"
            className="text-left rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:scale-105 transition "
            onClick={() => openProject(idx)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover p-4"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "1";
              }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-gray-100 text-md mt-1">{project.desc}</p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={closeModal} 
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand transition"
            onClick={closeModal}
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()} 
          >
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={`${activeProject?.title} – ${active.imageIndex + 1}/${activeImages.length}`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg bg-black/20"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
              />
            ) : (
              <div className="w-full h-[60vh] grid place-items-center text-gray-100">
                Görsel bulunamadı
              </div>
            )}

            {activeImages.length > 1 && (
              <>
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white hover:text-brand transition"
                  onClick={prevImage}
                  aria-label="Önceki"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white hover:text-brand transition"
                  onClick={nextImage}
                  aria-label="Sonraki"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div className="absolute bottom-3 right-1/2 translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-gray-100 text-xs">
                  {active.imageIndex + 1} / {activeImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
