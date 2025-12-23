"use client";
import Link from "next/link";
import Image from "next/image";

import AnimatedButton from "@/components/animation/AnimatedButton";

import { useEffect } from "react";

export default function Hero() {
  // Inject class to body to signal we are in a Dark Hero section
  useEffect(() => {
    document.body.classList.add('hero-mode-active');
    return () => document.body.classList.remove('hero-mode-active');
  }, []);

  return (
    <div className="mxd-section mxd-hero-section" style={{ padding: 0, height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Video Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/AibXF0AGiiQ?autoplay=1&mute=1&controls=0&loop=1&playlist=AibXF0AGiiQ&playsinline=1&rel=0&showinfo=0&modestbranding=1&vq=hd1080"
          title="Peak Motion Header Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "-12.5%",
            left: "-12.5%",
            width: "125%",
            height: "125%",
            pointerEvents: "none",
          }}
        />
        {/* Dark Overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
      </div>

      {/* Content Layer */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            {/* Title */}
            <h1 className="hero-05-title" style={{ color: '#fff', marginBottom: '1.5rem', mixBlendMode: 'normal' }}>
              <span className="d-block mb-2">Donde la montaña</span>
              <span className="d-block">se convierte en cine</span>
            </h1>

            {/* Description */}
            <p className="t-large" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.25rem' }}>
              Somos una agencia creativa especializada en producción audiovisual cinematográfica para trail running y mountain sports.
            </p>

            {/* CTA */}
            <div className="d-flex justify-content-center">
              <AnimatedButton
                text="Ver Galería"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href={`/galeria`}
                style={{ borderColor: '#fff', color: '#fff' }}
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Force Header elements to White when class is present */}
      <style jsx global>{`
        /* 1. HAMBURGER MENU: Force lines directly to white */
        body.hero-mode-active .mxd-nav__hamburger .hamburger__line {
           background-color: #ffffff !important;
        }
        body.hero-mode-active .mxd-nav__hamburger .hamburger__base {
           border-color: rgba(255,255,255,0.5) !important;
        }
      `}</style>
    </div>
  );
}
