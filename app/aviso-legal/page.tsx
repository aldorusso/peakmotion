import { Metadata } from "next";
import Footer2 from "@/components/footers/Footer2";
import AnimatedButton from "@/components/animation/AnimatedButton";

export const metadata: Metadata = {
    title: "Aviso Legal - Peak Motion",
    description: "Aviso legal de Peak Motion",
};

export default function AvisoLegalPage() {
    return (
        <>
            <main id="mxd-page-content" className="mxd-page-content">
                <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-lg-10 mxd-grid-item no-margin">
                                    <h1 className="h1-large">Aviso Legal</h1>
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
                                        <h2 className="h3-small">1. Datos Identificativos</h2>
                                        <p>
                                            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios
                                            de la Sociedad de la Información y Comercio Electrónico, se informa:
                                        </p>
                                        <ul>
                                            <li>Denominación social: Peak Motion</li>
                                            <li>Domicilio: Cáceres, España</li>
                                            <li>Email: info@peakmotion.es</li>
                                            <li>Teléfono: +34 633 815 083 / +34 636 499 798</li>
                                        </ul>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>2. Objeto</h2>
                                        <p>
                                            El presente aviso legal regula el uso del sitio web www.peakmotion.es, del que
                                            es titular Peak Motion.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>3. Condiciones de Uso</h2>
                                        <p>
                                            El acceso y uso de este sitio web implica la aceptación de estas condiciones.
                                            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios
                                            ofrecidos.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>4. Propiedad Intelectual</h2>
                                        <p>
                                            Todos los contenidos de este sitio web, incluyendo textos, fotografías, gráficos,
                                            imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos
                                            fuente, son propiedad de Peak Motion.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>5. Responsabilidad</h2>
                                        <p>
                                            Peak Motion no se hace responsable de los daños y perjuicios que pudieran derivarse
                                            del uso de la información del sitio web o de la falta de veracidad, vigencia,
                                            exhaustividad y/o autenticidad de la información que los usuarios proporcionen.
                                        </p>

                                        <h2 className="h3-small" style={{ marginTop: "2rem" }}>6. Legislación Aplicable</h2>
                                        <p>
                                            Las presentes condiciones se rigen por la legislación española.
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
