import { Metadata } from "next";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Footer2 from "@/components/footers/Footer2";
import RevealText from "@/components/animation/RevealText";

export const metadata: Metadata = {
    title: "Atletas - Peak Motion",
    description:
        "Branding integral para atletas de trail running. Transformamos corredores en figuras de autoridad con una historia y estilo visual definidos.",
};

export default function AtletasPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero Section */}
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Atletas</h1>
                                    <p className="t-large t-caption" style={{ maxWidth: "800px", marginTop: "2rem" }}>
                                        Branding integral para atletas de trail running. Transformamos al corredor
                                        en una figura de autoridad con una historia y un estilo visual definidos.
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
                                                    Servicio integral de branding, estrategia de contenido y gestión
                                                    de redes sociales para atletas de trail running de nivel intermedio
                                                    a avanzado. Generamos un crecimiento orgánico medible que aumenta
                                                    directamente el valor del atleta para las marcas asociadas.
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
                                    <h3 className="h3-small">Atracción de Patrocinadores</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Generamos un crecimiento orgánico medible que aumenta directamente
                                        el valor del atleta para las marcas asociadas.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Consistencia de Marca</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Mantenemos un tono y estética unificados para reflejar profesionalidad
                                        y autenticidad en todas las plataformas.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Foco en el Rendimiento</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        El atleta se despreocupa de la gestión digital, dejando en manos de
                                        expertos la producción y difusión de su contenido.
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
                                    <h2 className="h2-large">¿Eres atleta de trail running?</h2>
                                    <p className="t-large" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                                        Contáctanos para profesionalizar tu imagen y conseguir mejores patrocinios.
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
