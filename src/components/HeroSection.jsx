import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import heroBg from '../assets/hero-bg.jpg'
import perfumeHero from '../assets/perfume-hero.png'

function HeroSection() {

  const heroRef = useRef(null)

  const perfumeRef = useRef(null)

  const smokeRef = useRef(null)

  const glowRef = useRef(null)

  const dustRef = useRef(null)

  useEffect(() => {

    // HERO REVEAL
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      }
    )

    // PERFUME FLOAT
    gsap.to(perfumeRef.current, {
      y: -18,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // ATMOSPHERE
    gsap.to(smokeRef.current, {
      x: 60,
      y: -30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(glowRef.current, {
      scale: 1.1,
      opacity: 0.7,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // DUST
    gsap.to(dustRef.current, {
      y: -20,
      opacity: 0.4,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

  }, [])

  return (

    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src={heroBg}
          alt="Luxury Background"
          className="w-full h-full object-cover scale-105 opacity-55"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CINEMATIC LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

        {/* GOLD LIGHT */}
        <div className="absolute top-0 left-[-10%] w-[40%] h-full bg-[#D4AF37]/[0.08] blur-[180px]"></div>

        {/* SHADOW */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      </div>

      {/* SMOKE */}
      <div
        ref={smokeRef}
        className="absolute top-[8%] right-[8%] w-[400px] md:w-[900px] h-[400px] md:h-[900px] bg-[#D4AF37]/10 blur-[140px] md:blur-[280px] rounded-full"
      ></div>

      {/* DUST */}
      <div
        ref={dustRef}
        className="absolute top-[15%] left-[20%] w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[100px] rounded-full"
      ></div>

      {/* MAIN */}
      <div className="relative z-20 min-h-screen flex items-center pt-40 md:pt-52 px-6 md:px-16">

        <div className="w-full max-w-[1850px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

            {/* LEFT */}
            <div className="lg:col-span-5 relative z-20">

              {/* LABEL */}
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#B89B63]">

                Paris — Maison Aetheris

              </p>

              {/* HUGE TITLE */}
              <div className="relative mt-8">

                {/* BACK TEXT */}
                <h2 className="absolute -top-10 left-0 text-[7rem] md:text-[14rem] leading-none font-serif text-white/[0.03] pointer-events-none select-none">

                  NIGHT

                </h2>

                {/* MAIN TITLE */}
                <h1 className="relative z-10 font-serif text-[clamp(4rem,8vw,9rem)] leading-[0.85] tracking-[-0.07em] font-light text-[#F5F1EA]">

                  THE ESSENCE
                  <br />

                  <span className="italic text-[#D4AF37]">
                    OF NIGHT
                  </span>

                </h1>

              </div>

              {/* DIVIDER */}
              <div className="mt-10 w-20 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"></div>

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-xl text-[#C7BFB5] text-base md:text-[22px] leading-relaxed">

                A nocturnal fragrance composition shaped through
                cinematic storytelling, rare oud,
                amber smoke, and timeless elegance.

              </p>

              {/* BUTTONS */}
              <div className="mt-14 flex flex-wrap items-center gap-8">

                {/* CTA */}
                <button className="group relative overflow-hidden border border-[#7A6741] px-10 md:px-14 py-4 md:py-5">

                  {/* HOVER */}
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition duration-700"></div>

                  {/* TEXT */}
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.42em] text-[#F5F1EA] group-hover:text-black transition duration-700">

                    Discover Collection

                  </span>

                </button>

                {/* FILM */}
                <button className="group flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full border border-[#403625] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition duration-500">

                    ▶

                  </div>

                  <span className="text-[10px] uppercase tracking-[0.42em] text-[#D2CAC0]">

                    Watch Campaign

                  </span>

                </button>

              </div>

              {/* NOTES */}
              <div className="mt-24 flex flex-wrap gap-12">

                {[
                  {
                    title: 'Top',
                    note: 'Midnight Jasmine',
                  },
                  {
                    title: 'Heart',
                    note: 'Amber Smoke',
                  },
                  {
                    title: 'Base',
                    note: 'Black Oud',
                  },
                ].map((item) => (

                  <div key={item.title}>

                    <p className="text-[9px] uppercase tracking-[0.45em] text-[#8B7A57]">

                      {item.title}

                    </p>

                    <p className="mt-4 text-[#F1ECE5] text-sm md:text-base">

                      {item.note}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end">

              {/* HUGE GLOW */}
              <div
                ref={glowRef}
                className="absolute bottom-[10%] w-[500px] md:w-[900px] h-[300px] md:h-[500px] bg-[#D4AF37]/15 blur-[140px] rounded-full"
              ></div>

              {/* PLATFORM */}
              <div className="absolute bottom-[3%] w-[320px] md:w-[700px] h-[90px] md:h-[180px] bg-gradient-to-b from-[#1B1713] to-black rounded-[999px] blur-[2px]"></div>

              {/* PLATFORM SHADOW */}
              <div className="absolute bottom-[2%] w-[360px] md:w-[760px] h-[60px] md:h-[100px] bg-black/80 blur-[50px] rounded-full"></div>

              {/* PERFUME */}
              <div
                ref={perfumeRef}
                className="relative z-20"
              >

                <img
                  src={perfumeHero}
                  alt="Luxury Perfume"
                  className="w-[280px] sm:w-[380px] md:w-[700px] object-contain drop-shadow-[0_80px_160px_rgba(0,0,0,1)]"
                />

              </div>

              {/* FLOATING CARD */}
              <div className="hidden xl:block absolute top-[15%] right-[5%] z-30 backdrop-blur-xl bg-black/20 border border-white/[0.06] p-7 max-w-[260px]">

                <p className="text-[8px] uppercase tracking-[0.45em] text-[#B89B63]">

                  Signature Atmosphere

                </p>

                <p className="mt-5 text-[#D6CEC3] leading-relaxed text-sm">

                  Crafted through shadow,
                  cinematic pacing,
                  and timeless Parisian elegance.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6 md:px-16">

        <div className="max-w-[1850px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* SOCIAL */}
          <div className="flex items-center gap-8">

            {[
              'Instagram',
              'Behance',
              'Dribbble',
            ].map((item) => (

              <a
                key={item}
                href="#"
                className="text-[10px] uppercase tracking-[0.42em] text-[#D2CAC0] hover:text-[#D4AF37] transition duration-500"
              >

                {item}

              </a>

            ))}

          </div>

          {/* SCROLL */}
          <div className="flex items-center gap-5">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#D2CAC0]">

              Scroll To Explore

            </p>

            <div className="w-16 h-px bg-[#D4AF37]"></div>

          </div>

        </div>

      </div>

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>

    </section>
  )
}

export default HeroSection