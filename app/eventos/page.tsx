import { Metadata } from "next";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Footer2 from "@/components/footers/Footer2";
import RevealText from "@/components/animation/RevealText";

export const metadata: Metadata = {
    title: "Eventos - Peak Motion",
    description:
        "Producción completa de documentales y resúmenes épicos para carreras y quedadas de trail running. Inmortalizamos la esencia de tu evento.",
};

export default function EventosPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero Section */}
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Eventos</h1>
                                    <p className="t-large t-caption" style={{ maxWidth: "800px", marginTop: "2rem" }}>
                                        Producción completa de piezas audiovisuales destinadas a capturar la esencia,
                                        la dureza y la emoción de carreras y quedadas de trail running.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mxd-section padding-pre-pinned-img">
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0 d-xl-flex justify-content-xl-center">
                                    <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                        <div className="mxd-block__content">
                                            <div className="mxd-block__manifest">
                                                <RevealText
                                                    as="p"
                                                    className="mxd-manifest mxd-manifest-l reveal-type"
                                                >
                                                    Desde vídeos de resumen dinámicos hasta documentales de 5-15 minutos
                                                    con entrevistas profundas, generamos contenido de alto valor que
                                                    trasciende la simple promoción. Inmortalizamos tu evento con una
                                                    estética cinematográfica minimalista.
                                                </RevealText>
                                                <div className="mxd-manifest__controls">
                                                    <AnimatedButton
                                                        text="Ver Servicios"
                                                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                                                        href="/servicios"
                                                    >
                                                        <i className="ph-bold ph-arrow-up-right" />
                                                    </AnimatedButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mxd-section">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Inmortalización de Marca</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Genera un archivo visual atemporal que refuerza la identidad y
                                        el prestigio de tu evento.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Impulso Promocional</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Contenido de calidad profesional esencial para vender futuras
                                        ediciones y atraer a patrocinadores de élite.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Estética Cinematográfica</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Utilizamos la estética minimalista de Peak Motion para un look
                                        and feel que destaca de la competencia.
                                    </p>
                                </div>
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
                                    <h2 className="h2-large">¿Organizas eventos de trail running?</h2>
                                    <p className="t-large" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                                        Contáctanos para inmortalizar tu próximo evento con producción audiovisual de élite.
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
