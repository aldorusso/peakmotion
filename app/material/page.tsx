import { Metadata } from "next";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Footer2 from "@/components/footers/Footer2";
import RevealText from "@/components/animation/RevealText";

export const metadata: Metadata = {
    title: "Material - Peak Motion",
    description:
        "Campañas de fotografía y vídeo para productos técnicos de trail running y outdoor en entornos naturales auténticos.",
};

export default function MaterialPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero Section */}
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Material</h1>
                                    <p className="t-large t-caption" style={{ maxWidth: "800px", marginTop: "2rem" }}>
                                        Campañas de fotografía y vídeo spot enfocadas en la presentación de productos
                                        técnicos en entornos naturales auténticos.
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
                                                    Creamos escenarios naturales auténticos que ponen a prueba el producto,
                                                    priorizando la verdad del entorno sobre los efectos artificiales.
                                                    Nuestro equipo se encarga de generar contenido de review de autoridad
                                                    que atrae tráfico orgánico cualificado.
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
                                    <h3 className="h3-small">Asociación de Valores</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Vincule su material deportivo con los valores de autenticidad y
                                        sostenibilidad que definen a Peak Motion.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Contenido de Autoridad</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Generación de material para reviews y pruebas de producto que
                                        atraen tráfico orgánico cualificado.
                                    </p>
                                </div>
                                <div className="col-12 col-md-4 mxd-grid-item">
                                    <h3 className="h3-small">Impacto Visual Directo</h3>
                                    <p style={{ marginTop: "1rem" }}>
                                        Visuales fuertes y textos muy cortos que convierten en
                                        plataformas de e-commerce.
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
                                    <h2 className="h2-large">¿Tienes una marca de outdoor?</h2>
                                    <p className="t-large" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                                        Contáctanos para crear campañas de producto con un enfoque sostenible y auténtico.
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
