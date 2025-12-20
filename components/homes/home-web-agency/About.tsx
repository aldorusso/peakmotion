import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="mxd-section padding-pre-pinned-img">
      <div className="mxd-container grid-container">
        {/* Block - About Description with Manifest Start */}
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
                      Contar historias visuales auténticas del mundo del trail running,
                      inspirando a la comunidad a conectar con la naturaleza y promoviendo
                      el respeto por el entorno en cada paso.
                    </RevealText>
                    <div className="mxd-manifest__controls">
                      <AnimatedButton
                        text="Nuestros Servicios"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                        href={`/servicios`}
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
        {/* Block - About Description with Manifest End */}
      </div>
    </div>
  );
}
