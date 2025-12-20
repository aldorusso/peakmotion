import BackgroundParallax from "@/components/animation/BackgroundParallax";

export default function ParallaxBanner() {
  return (
    <div className="mxd-section padding-pre-manifest">
      <div className="mxd-container">
        <div className="mxd-divider">
          <BackgroundParallax
            as="img"
            src="/img/pm/parallax.jpg"
            alt="Parallax Landscape"
            scale={1.5}
            className="mxd-divider__image parallax-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
