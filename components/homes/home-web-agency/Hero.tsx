import Link from "next/link";
import Image from "next/image";

import AnimatedButton from "@/components/animation/AnimatedButton";

export default function Hero() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-05">
        <div className="mxd-hero-05__wrap loading-wrap">
          <div className="mxd-hero-05__top">
            <div className="mxd-hero-05__headline">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column flex-xl-row">
                  <div className="col-12 col-xl-8 col-xxl-10 order-2 order-xl-1 mxd-grid-item no-margin">
                    {/* title text */}
                    <h1 className="hero-05-title">
                      <span className="hero-05-title__row loading__item">
                        <em className="hero-05-title__item">Donde la montaña</em>
                      </span>
                      <span className="hero-05-title__row loading__item">
                        <em className="hero-05-title__item title-item-image">
                          <svg
                            className="mxd-pulse"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </em>
                        <em className="hero-05-title__item">
                          se convierte en cine
                        </em>
                      </span>
                    </h1>
                  </div>
                  <div className="col-12 col-xl-4 col-xxl-2 order-1 order-xl-2 mxd-grid-item no-margin">
                    {/* Tagline */}
                    <div className="hero-05-headline__avatars loading__fade">
                      <div className="mxd-avatars-group align-right">
                        <div className="mxd-avatars-group__text">
                          <p className="t-large t-caption">
                            y la montaña
                            <br />
                            <strong>en nuestra causa</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-hero-05__bottom mxd-grid-item no-margin">
            <div className="mxd-hero-05__worksblock loading__item">
              <Image
                className="mxd-move"
                alt="Hero image"
                src="/img/pm/hero.jpg"
                width={800}
                height={800}
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-05-worksblock__descr">
                <p className="t-large t-caption t-bright">
                  Fusión de creatividad cinematográfica y compromiso real
                </p>
                <AnimatedButton
                  text="Ver Galería"
                  className="btn btn-anim btn-default btn-outline slide-right-up"
                  href={`/galeria`}
                >
                  <i className="ph-bold ph-arrow-up-right" />
                </AnimatedButton>
              </div>
            </div>
            <div className="mxd-hero-05__videoblock loading__item">
              <div
                className="mxd-hero-05-videoblock__video"
                style={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/AibXF0AGiiQ?autoplay=1&mute=1&controls=0&loop=1&playlist=AibXF0AGiiQ&playsinline=1&rel=0&showinfo=0&modestbranding=1"
                  title="Peak Motion Header Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    transform: "translate(-50%, -50%) scale(1.55)", // Escala moderada para calidad vs cobertura
                    pointerEvents: "none",
                  }}
                />
              </div>
              <div className="mxd-hero-05-videoblock__descr">
                <p className="t-large t-caption t-bright">
                  Somos una agencia creativa especializada en producción audiovisual
                  cinematográfica para trail running y mountain sports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
