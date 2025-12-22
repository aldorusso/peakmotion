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

                {/* Gallery Content */}
                <div className="mxd-section">
                    <div className="mxd-container">
                        <div className="container-fluid px-0">
                            <div className="row">
                                <div className="col-12">
                                    {/* Google Drive Embed */}
                                    <div className="google-drive-embed" style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '800px',
                                        background: 'var(--pm-black)',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        <iframe
                                            src="https://drive.google.com/embeddedfolderview?id=1LEFvtCt6JfZlndZwE2Li-Hjh7isODS4v#grid"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            title="Galería Peak Motion"
                                            allowFullScreen
                                            sandbox="allow-scripts allow-popups allow-same-origin allow-popups-to-escape-sandbox allow-forms"
                                        />
                                    </div>
                                    <div className="text-center mt-4">
                                        <a
                                            href="https://drive.google.com/drive/folders/1LEFvtCt6JfZlndZwE2Li-Hjh7isODS4v?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-default btn-outline"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                        >
                                            <i className="ph-bold ph-google-logo" />
                                            Abrir Galería Completa en Drive
                                        </a>
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
