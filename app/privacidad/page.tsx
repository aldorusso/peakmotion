import { Metadata } from "next";
import Footer2 from "@/components/footers/Footer2";
import AnimatedButton from "@/components/animation/AnimatedButton";

export const metadata: Metadata = {
    title: "Política de Privacidad - Peak Motion",
    description: "Política de privacidad de Peak Motion",
};

export default function PrivacidadPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-lg-10 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Política de Privacidad</h1>
                                    <p className="t-large t-muted" style={{ marginTop: "1rem" }}>
                                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mxd-section">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-lg-10 mxd-grid-item">
                                    <div className="content-legal">
                                        <p>
                                            En Peak Motion, nos comprometemos a proteger su privacidad. Esta política
                                            describe cómo recopilamos, usamos y protegemos su información personal.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>1. Información que Recopilamos</h2>
                                        <p>
                                            Recopilamos información que usted nos proporciona directamente, como nombre,
                                            correo electrónico y número de teléfono cuando se pone en contacto con nosotros.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>2. Uso de la Información</h2>
                                        <p>
                                            Utilizamos su información para responder a sus consultas, proporcionar nuestros
                                            servicios y mejorar nuestra oferta.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>3. Protección de Datos</h2>
                                        <p>
                                            Implementamos medidas de seguridad para proteger su información personal contra
                                            acceso no autorizado o divulgación.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>4. Sus Derechos</h2>
                                        <p>
                                            Tiene derecho a acceder, rectificar o eliminar sus datos personales. Para ejercer
                                            estos derechos, contáctenos en info@peakmotion.es
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>5. Contacto</h2>
                                        <p>
                                            Para cualquier pregunta sobre esta política de privacidad, contáctenos en:
                                            <br />
                                            Email: info@peakmotion.es
                                            <br />
                                            Teléfono: +34 633 815 083 / +34 636 499 798
                                        </p>

                                        <div style={{ marginTop: "3rem" }}>
                                            <AnimatedButton
                                                text="Volver al Inicio"
                                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                                href="/home-web-agency"
                                            >
                                                <i className="ph-bold ph-arrow-left" />
                                            </AnimatedButton>
                                        </div>
                                    </div>
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
