"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""} ${pathname === '/' ? 'is-home-header' : ''}`}>
      <div className="mxd-header__logo loading__fade">
        <Link href={`/`} className="mxd-logo" style={{ maxWidth: 'none', position: 'relative' }}>
          {/* Logo for Light Mode (Dark text/icon) */}
          <Image
            className="mxd-logo__image logo-light"
            alt="PeakMotion Logo"
            src="/img/logo-peakmotion.png"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
          {/* Logo for Dark Mode (White text/icon) */}
          <Image
            className="mxd-logo__image logo-dark"
            alt="PeakMotion Logo White"
            src="/img/logo-peakmotion-white.png"
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <style jsx global>{`
            /* Base styles for logos */
            .mxd-logo__image {
              max-height: 60px;
              min-width: 150px;
            }

            /* Responsive styles for mobile */
            @media (max-width: 768px) {
              .mxd-logo__image {
                max-height: 32px !important;
                min-width: unset !important;
                max-width: 120px;
              }
            }

            /* Default Theme Logic */
            .logo-light { opacity: 1; visibility: visible; transition: opacity 0.3s; }
            .logo-dark { opacity: 0; visibility: hidden; transition: opacity 0.3s; }
            html[color-scheme="dark"] .logo-light { opacity: 0; visibility: hidden; }
            html[color-scheme="dark"] .logo-dark { opacity: 1; visibility: visible; }

            /* HOME PAGE OVERRIDE (Forcing Dark Mode style for Hero Video) */
            .is-home-header .logo-light {
              display: none !important;
            }
            .is-home-header .logo-dark {
              display: block !important;
              opacity: 1 !important;
              visibility: visible !important;
            }
            .is-home-header .theme-switcher-btn,
            .is-home-header .btn-mobile-icon {
               color: #fff !important;
               border-color: rgba(255,255,255,0.3) !important;
            }
            /* Hamburger Menu Override for Home */
            .is-home-header ~ .mxd-nav__wrap .mxd-nav__hamburger .hamburger__line {
               background-color: #fff !important;
            }
            .is-home-header ~ .mxd-nav__wrap .mxd-nav__hamburger .hamburger__base {
               border-color: rgba(255,255,255,0.3) !important;
            }
            /* Ensure Header is above video */
            .mxd-header {
              z-index: 1000;
            }
          `}</style>
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />

        <AnimatedButton
          text="Contacto"
          className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
          href="/contact"
        >
          <i className="ph-bold ph-arrow-up-right" />
        </AnimatedButton>
      </div>
    </header>
  );
}
