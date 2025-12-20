import { Metadata } from "next";
import Link from "next/link";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Footer2 from "@/components/footers/Footer2";
import services from "@/data/services/services-web-agency.json";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios - Peak Motion",
  description:
    "Descubre nuestros servicios de producción audiovisual para trail running: documentales, campañas de producto, branding para atletas y consultoría de sostenibilidad.",
};

export default function ServiciosPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Hero Section */}
        <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
          <div className="mxd-container">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 mxd-grid-item no-margin">
                  <h1 className="h1-large">Nuestros Servicios</h1>
                  <p className="t-large t-caption" style={{ maxWidth: "800px", marginTop: "2rem" }}>
                    Ofrecemos una fusión única de producción audiovisual cinematográfica,
                    gestión integral de branding y compromiso ambiental real para el mundo
                    del trail running y mountain sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mxd-section">
          <div className="mxd-container">
            <div className="container-fluid px-0">
              <div className="row g-4">
                {services.map((service: any, idx: number) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="mxd-grid-item" style={{ padding: "2rem" }}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={800}
                        height={800}
                        style={{ width: "100%", height: "auto", marginBottom: "1.5rem" }}
                      />
                      <h2 className="h2-small">{service.title}</h2>
                      {service.subtitle && (
                        <p className="t-caption" style={{ marginTop: "0.5rem" }}>
                          {service.subtitle}
                        </p>
                      )}
                      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                        {service.tags.map((tag: string, tagIdx: number) => (
                          <span
                            key={tagIdx}
                            className="tag tag-default tag-outline"
                            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p>{service.desc}</p>
                      {service.benefits && (
                        <div style={{ marginTop: "1.5rem" }}>
                          <p className="t-small t-caption">Beneficios clave:</p>
                          <ul style={{ marginTop: "0.5rem" }}>
                            {service.benefits.map((benefit: string, bIdx: number) => (
                              <li key={bIdx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.target && (
                        <p className="t-small t-muted" style={{ marginTop: "1rem" }}>
                          <strong>Dirigido a:</strong> {service.target}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mxd-section">
          <div className="mxd-container">
            <div className="container-fluid px-0">
              <div className="row gx-0 justify-content-center">
                <div className="col-12 col-md-8 text-center mxd-grid-item">
                  <h2 className="h2-large">¿Listo para trabajar con nosotros?</h2>
                  <p className="t-large" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                    Contáctanos para discutir tu proyecto y descubrir cómo podemos ayudarte
                    a contar tu historia en la montaña.
                  </p>
                  <AnimatedButton
                    text="Contacto"
                    className="btn btn-anim btn-default btn-outline slide-right-up"
                    href="/contact"
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
}
