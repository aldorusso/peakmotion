import { Metadata } from "next";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Footer2 from "@/components/footers/Footer2";

export const metadata: Metadata = {
    title: "Galería - Peak Motion",
    description:
        "Portfolio audiovisual de Peak Motion. Documentales, campañas y contenido cinematográfico para trail running y mountain sports.",
};

export default function GaleriaPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero Section */}
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Galería</h1>
                                    <p className="t-large t-caption" style={{ maxWidth: "800px", marginTop: "2rem" }}>
                                        Portfolio audiovisual de Peak Motion. Documentales, campañas y contenido
                                        cinematográfico para trail running y mountain sports.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder Content */}
                <div className="mxd-section">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0 justify-content-center">
                                <div className="col-12 col-md-8 text-center mxd-grid-item">
                                    <div style={{ padding: "4rem 2rem", background: "var(--pm-black)", borderRadius: "8px" }}>
                                        <h2 className="h2-large">Próximamente</h2>
                                        <p className="t-large" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                                            Estamos preparando nuestro portfolio audiovisual con los mejores proyectos
                                            de trail running y mountain sports. Mientras tanto, contáctanos para ver
                                            muestras de nuestro trabajo.
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
                </div>

                {/* Future Portfolio Grid Placeholder */}
                <div className="mxd-section">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row g-4">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="col-12 col-md-6 col-lg-4">
                                        <div
                                            className="mxd-grid-item"
                                            style={{
                                                aspectRatio: "16/9",
                                                background: "var(--pm-black)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "4px"
                                            }}
                                        >
                                            <p className="t-muted">Proyecto {item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer2 />
        </>
    );
}
