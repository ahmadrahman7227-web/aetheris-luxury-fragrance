import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import atmosphere1 from '../assets/atmosphere-1.jpg'
import atmosphere2 from '../assets/atmosphere-2.jpg'

gsap.registerPlugin(ScrollTrigger)

function AtmosphereSection() {

  const sectionRef = useRef(null)

  const image1Ref = useRef(null)
  const image2Ref = useRef(null)

  const glowRef = useRef(null)

  const quoteRef = useRef(null)

  const contentRef = useRef(null)

  useEffect(() => {

    // REVEALS
    ;[
      image1Ref.current,
      image2Ref.current,
      contentRef.current,
      quoteRef.current,
    ].forEach((item) => {

      gsap.fromTo(
        item,
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
            trigger: item,
            start: 'top 85%',
          },
        }
      )

    })

    // PARALLAX
    gsap.to(image1Ref.current, {
      y: -160,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(image2Ref.current, {
      y: -220,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // ATMOSPHERE
    gsap.to(glowRef.current, {
      y: -300,
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
      className="relative overflow-hidden bg-[#050505] py-52 md:py-[460px]"
    >

      {/* HUGE ATMOSPHERE */}
      <div
        ref={glowRef}
        className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1000px] md:w-[2600px] h-[700px] md:h-[1600px] bg-[#D4AF37]/[0.05] blur-[260px] md:blur-[520px] rounded-full"
      ></div>

      {/* HUGE TYPOGRAPHY */}
      <div className="absolute top-[4%] left-[-6%] text-[9rem] md:text-[28rem] leading-none font-serif text-white/[0.02] pointer-events-none select-none">

        CINEMA

      </div>

      {/* FOREGROUND BLUR */}
      <div className="absolute bottom-[15%] right-[-10%] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-[#D4AF37]/10 blur-[180px] rounded-full"></div>

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>

      <div className="relative z-10 max-w-[2100px] mx-auto px-6 md:px-16">

        {/* TOP CONTENT */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto text-center"
        >

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#A58D5A]">

            Maison Aetheris — Chapter II

          </p>

          {/* TITLE */}
          <h2 className="mt-10 font-serif text-[clamp(4.5rem,11vw,12rem)] leading-[0.82] tracking-[-0.08em] font-light text-[#F5F1EA]">

            Atmosphere
            <br />

            <span className="italic text-[#D4AF37]">
              becomes memory.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-12 max-w-4xl mx-auto text-[#A59D93] text-base md:text-[28px] leading-relaxed">

            Crafted through cinematic pacing,
            layered emotion,
            and restrained nocturnal elegance —
            every composition unfolds like visual poetry.

          </p>

        </div>

        {/* MAIN COMPOSITION */}
        <div className="relative mt-44 md:mt-[340px] min-h-[1200px] md:min-h-[1800px]">

          {/* HUGE IMAGE */}
          <div
            ref={image1Ref}
            className="relative z-10 w-full md:w-[62%]"
          >

            {/* FRAME */}
            <div className="hidden xl:block absolute top-[-50px] left-[-50px] w-full h-full border border-[#2B2722]"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden bg-[#141414]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

              {/* IMAGE */}
              <img
                src={atmosphere1}
                alt="Luxury Portrait"
                className="w-full h-[700px] md:h-[1450px] object-cover hover:scale-[1.06] transition duration-[3200ms]"
              />

              {/* FLOATING TEXT */}
              <div className="absolute bottom-8 md:bottom-20 left-8 md:left-20 z-20">

                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#B89B63]">

                  Nocturnal Composition

                </p>

                <h3 className="mt-6 font-serif text-5xl md:text-[8rem] leading-[0.82] tracking-[-0.07em] font-light text-[#F5F1EA]">

                  Timeless
                  <br />

                  <span className="italic text-[#D4AF37]">
                    atmosphere.
                  </span>

                </h3>

              </div>

            </div>

          </div>

          {/* FLOATING IMAGE */}
          <div
            ref={image2Ref}
            className="relative z-30 mt-[-120px] md:mt-[-500px] ml-auto w-[78%] md:w-[38%]"
          >

            {/* GLASS CARD */}
            <div className="absolute top-[-40px] md:top-[-90px] left-[-20px] md:left-[-100px] z-40 backdrop-blur-2xl bg-black/20 border border-white/[0.08] p-6 md:p-10 max-w-[340px]">

              {/* LABEL */}
              <p className="text-[8px] uppercase tracking-[0.5em] text-[#B89B63]">

                Editorial Atmosphere

              </p>

              {/* TEXT */}
              <p className="mt-6 text-[#DDD5CA] text-sm md:text-base leading-relaxed">

                Designed through cinematic silence,
                shadow layering,
                and emotional visual storytelling.

              </p>

            </div>

            {/* IMAGE */}
            <div className="relative overflow-hidden bg-[#141414]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

              {/* IMAGE */}
              <img
                src={atmosphere2}
                alt="Luxury Editorial"
                className="w-full h-[520px] md:h-[980px] object-cover hover:scale-[1.06] transition duration-[3200ms]"
              />

            </div>

          </div>

          {/* HUGE FLOATING TYPO */}
          <div className="hidden xl:block absolute bottom-[8%] left-[5%] z-20">

            <h2 className="font-serif text-[12rem] leading-none tracking-[-0.08em] text-white/[0.03]">

              NOIR

            </h2>

          </div>

        </div>

        {/* QUOTE BLOCK */}
        <div
          ref={quoteRef}
          className="mt-44 md:mt-[360px] text-center max-w-7xl mx-auto"
        >

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#A58D5A]">

            Editorial Philosophy

          </p>

          {/* QUOTE */}
          <h2 className="mt-10 font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.84] tracking-[-0.08em] font-light text-[#F5F1EA]">

            Luxury shaped
            <br />

            <span className="italic text-[#D4AF37]">
              through emotion.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-12 max-w-4xl mx-auto text-[#A49C93] text-base md:text-[28px] leading-relaxed">

            Every detail is composed like cinema —
            balancing movement,
            silence,
            shadow,
            and timeless atmosphere into visual memory.

          </p>

        </div>

      </div>

    </section>
  )
}

export default AtmosphereSection