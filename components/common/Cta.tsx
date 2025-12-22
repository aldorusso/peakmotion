import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div
                className="mxd-promo__bg"
                style={{
                  backgroundImage: "url('/img/pm/parallax.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    <Image
                      alt="Peak Motion Icon"
                      src="/img/logo-peakmotion-white.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '20%', height: 'auto', objectFit: 'contain' }}
                    />
                  </span>
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type"
                  >
                    ¡Hablemos de tu proyecto!
                  </RevealText>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    text="Contáctanos"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                    href={`/contact`}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
              {/* parallax images */}
              <div className="mxd-promo__images">
                <Image
                  className="promo-image promo-image-1"
                  alt="Image"
                  src="/img/pm/cta-1.jpg"
                  width={800}
                  height={912}
                  style={{ objectFit: 'cover' }}
                />
                <Image
                  className="promo-image promo-image-2"
                  alt="Image"
                  src="/img/pm/cta-2.jpg"
                  width={600}
                  height={601}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
