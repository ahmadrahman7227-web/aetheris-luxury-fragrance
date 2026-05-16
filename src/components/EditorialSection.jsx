import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import perfume from '../assets/perfume.png'

gsap.registerPlugin(ScrollTrigger)

function EditorialSection() {

  const sectionRef = useRef(null)

  const imageRef = useRef(null)

  const contentRef = useRef(null)

  const glowRef = useRef(null)

  const quoteRef = useRef(null)

  useEffect(() => {

    // CONTENT
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
      }
    )

    // IMAGE
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 160,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      }
    )

    // QUOTE
    gsap.fromTo(
      quoteRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 90%',
        },
      }
    )

    // IMAGE PARALLAX
    gsap.to(imageRef.current, {
      y: -120,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // GLOW
    gsap.to(glowRef.current, {
      y: -220,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0B0B] py-40 md:py-[340px]"
    >

      {/* ATMOSPHERIC GLOW */}
      <div
        ref={glowRef}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1800px] h-[400px] md:h-[1000px] bg-[#D4AF37]/5 blur-[180px] md:blur-[340px] rounded-full"
      ></div>

      {/* HUGE TYPOGRAPHY */}
      <div className="absolute top-[8%] left-[-5%] text-[7rem] md:text-[18rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">

        NOCTURNE

      </div>

      {/* TOP TRANSITION */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-black to-transparent"></div>

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>

      <div className="relative z-10 max-w-[1850px] mx-auto px-6 md:px-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-28 items-center">

          {/* LEFT CONTENT */}
          <div
            ref={contentRef}
            className="lg:col-span-5 relative z-20"
          >

            {/* LABEL */}
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

              Chapter I — Editorial Composition

            </p>

            {/* HUGE TITLE */}
            <div className="relative mt-8">

              {/* BACK TEXT */}
              <h2 className="absolute -top-10 left-0 text-[5rem] md:text-[11rem] leading-none font-serif text-white/[0.03] pointer-events-none">

                POEM

              </h2>

              {/* TITLE */}
              <h3 className="relative z-10 font-serif text-[clamp(4rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.07em] font-light text-[#F5F1EA]">

                The olfactory
                <br />

                <span className="italic text-[#D4AF37]">
                  poem.
                </span>

              </h3>

            </div>

            {/* DIVIDER */}
            <div className="mt-10 w-20 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"></div>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-xl text-[#B5AEA5] text-base md:text-[20px] leading-relaxed">

              Crafted in the shadows of the Parisian atelier,
              this fragrance unfolds like a cinematic memory —
              balancing darkness, warmth, and timeless elegance.

            </p>

            <p className="mt-8 max-w-xl text-[#8E867C] text-sm md:text-lg leading-relaxed">

              Rare black oud, smoked amber,
              luminous aldehydes,
              and velvet jasmine collide into an atmosphere
              suspended between silence and emotion.

            </p>

            {/* NOTES */}
            <div className="mt-14 flex flex-wrap gap-10">

              {[
                'Black Oud',
                'Amber Smoke',
                'Velvet Jasmine',
              ].map((note) => (

                <span
                  key={note}
                  className="text-[9px] md:text-[10px] uppercase tracking-[0.42em] text-[#72695F]"
                >

                  {note}

                </span>

              ))}

            </div>

            {/* BUTTON */}
            <button className="group flex items-center gap-5 mt-16">

              <span className="text-[10px] uppercase tracking-[0.42em] text-[#F5F1EA] border-b border-[#D4AF37] pb-2">

                Read Manifesto

              </span>

              <span className="text-[#D4AF37] group-hover:translate-x-2 transition duration-500">

                →

              </span>

            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="lg:col-span-7 relative flex justify-center lg:justify-end"
          >

            {/* FRAME */}
            <div className="hidden lg:block absolute top-[-40px] right-[-40px] w-[80%] h-full border border-[#2A2722]"></div>

            {/* BACK GLOW */}
            <div className="absolute bottom-[10%] w-[400px] md:w-[700px] h-[200px] md:h-[320px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

            {/* IMAGE WRAPPER */}
            <div className="relative z-10 overflow-hidden bg-[#151515] max-w-[720px]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>

              {/* IMAGE */}
              <img
                src={perfume}
                alt="Luxury Perfume"
                className="w-full h-[620px] md:h-[1050px] object-cover grayscale contrast-125 hover:scale-[1.04] transition duration-[2600ms]"
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-8 md:bottom-14 left-8 md:left-14 z-20 backdrop-blur-xl bg-black/20 border border-white/[0.08] p-6 md:p-9 max-w-[320px]">

                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.45em] text-[#B89B63]">

                  Signature Atmosphere

                </p>

                <p className="mt-5 text-[#E6DED2] text-sm md:text-base leading-relaxed">

                  Darkness, warmth,
                  and cinematic pacing
                  composed into timeless olfactory memory.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* QUOTE BLOCK */}
        <div
          ref={quoteRef}
          className="mt-40 md:mt-[260px] text-center max-w-6xl mx-auto"
        >

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

            Maison Aetheris

          </p>

          {/* QUOTE */}
          <h2 className="mt-8 font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.88] tracking-[-0.07em] font-light text-[#F5F1EA]">

            Fragrance shaped
            <br />

            <span className="italic text-[#D4AF37]">
              through emotion.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-10 max-w-3xl mx-auto text-[#A49C93] text-base md:text-2xl leading-relaxed">

            A cinematic composition designed to linger
            like memory itself —
            suspended between shadow, silence,
            and timeless luxury atmosphere.

          </p>

        </div>

      </div>

    </section>
  )
}

export default EditorialSection