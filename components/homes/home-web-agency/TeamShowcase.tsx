import Link from "next/link";
import Image from "next/image";
import RevealText from "@/components/animation/RevealText";
import BackgroundParallax from "@/components/animation/BackgroundParallax";
import AnimatedButton from "@/components/animation/AnimatedButton";

// Datos del equipo Peak Motion
const teamMembers = [
    {
        name: "Óscar Escribano",
        role: "El Fundador y Estratega",
        description: "De la gestión deportiva a la liberación en la montaña. Especialista en gestión del miedo y disfrute activo.",
        quote: "Tu seguridad y transformación son mi responsabilidad.",
        tags: ["Estrategia", "Mentalidad", "Gestión"],
        imageSrc: "/img/pm/team-1.jpg",
    },
    {
        name: "Aitor González",
        role: "Guía Técnico y Seguridad",
        description: "Guía de Montaña Certificado y ex-Campeón de España. Simplifica la técnica de élite para iniciación.",
        quote: "Rigor de competición para disfrutar sin riesgos.",
        tags: ["Seguridad", "Técnica", "Alto Rendimiento"],
        imageSrc: "/img/pm/team-2.jpg",
    },
    {
        name: "Víctor García Pérez",
        role: "Director Visual",
        description: "Fotógrafo de acción y narrador de la esencia del trail. Captura la emoción y la transformación.",
        quote: "Cada imagen es un documento de tu atrevimiento.",
        tags: ["Fotografía", "Narrativa", "Estética"],
        imageSrc: "/img/pm/team-3.jpg",
    },
];

export default function TeamShowcase() {
    return (
        <div className="mxd-section padding-blog">
            <div className="mxd-container grid-container">
                {/* Block - Section Title Start */}
                <div className="mxd-block">
                    <div className="mxd-section-title pre-grid">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <RevealText as="h2" className="reveal-type anim-uni-in-up">
                                            Equipo Peak Motion
                                        </RevealText>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrdescr">
                                        <p className="anim-uni-in-up">
                                            Expertos apasionados que transforman la montaña en una experiencia segura y cinematográfica.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                                        <AnimatedButton
                                            text="Contáctanos"
                                            className="btn btn-anim btn-default btn-outline slide-right-up"
                                            href={`/contact`}
                                        >
                                            <i className="ph-bold ph-arrow-up-right" />
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Section Title End */}

                {/* Block - Team Grid Start */}
                <div className="mxd-block">
                    <div className="mxd-blog-preview">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                {teamMembers.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                                    >
                                        <div className="mxd-blog-preview__media" style={{ cursor: 'default', position: 'relative', overflow: 'hidden' }}>
                                            <div className="mxd-blog-preview__image parallax-img-small" style={{ position: 'relative', width: '100%', height: '100%' }}>
                                                <Image
                                                    src={member.imageSrc}
                                                    alt={member.name}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </div>
                                            <div className="mxd-blog-preview__tags">
                                                {member.tags.map((tag, tIdx) => (
                                                    <span
                                                        key={tIdx}
                                                        className="tag tag-default tag-permanent"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mxd-blog-preview__data">
                                            <div className="anim-uni-in-up">
                                                <h3 className="h5-small mb-2">{member.name}</h3>
                                                <p className="t-small t-muted mb-2" style={{ fontWeight: 600 }}>{member.role}</p>
                                                <p className="t-small mb-3">{member.description}</p>
                                                <p className="t-xsmall t-muted">"{member.quote}"</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Team Grid End */}
            </div>
        </div>
    );
}
