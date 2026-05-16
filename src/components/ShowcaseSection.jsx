import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import scene1 from '../assets/scene1.jpg'
import scene2 from '../assets/scene2.jpg'
import scene3 from '../assets/scene3.jpg'

gsap.registerPlugin(ScrollTrigger)

function ShowcaseSection() {

  const sectionRef = useRef(null)

  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)

  const contentRef = useRef(null)

  const glowRef = useRef(null)

  useEffect(() => {

    // REVEALS
    ;[
      image1Ref.current,
      image2Ref.current,
      image3Ref.current,
      contentRef.current,
    ].forEach((item) => {

      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 140,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
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
      y: -120,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(image2Ref.current, {
      y: -180,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(image3Ref.current, {
      y: -140,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // GLOW
    gsap.to(glowRef.current, {
      y: -260,
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
      className="relative overflow-hidden bg-[#090909] py-44 md:py-[380px]"
    >

      {/* HUGE GLOW */}
      <div
        ref={glowRef}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] md:w-[2000px] h-[500px] md:h-[1200px] bg-[#D4AF37]/5 blur-[200px] md:blur-[380px] rounded-full"
      ></div>

      {/* HUGE TYPO */}
      <div className="absolute top-[5%] left-[-5%] text-[8rem] md:text-[22rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">

        CINEMA

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

      <div className="relative z-10 max-w-[1900px] mx-auto px-6 md:px-16">

        {/* TOP CONTENT */}
        <div
          ref={contentRef}
          className="max-w-6xl mx-auto text-center"
        >

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

            Visual Chapters

          </p>

          {/* TITLE */}
          <h2 className="mt-8 font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.86] tracking-[-0.07em] font-light text-[#F5F1EA]">

            Motion through
            <br />

            <span className="italic text-[#D4AF37]">
              atmosphere.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-10 max-w-3xl mx-auto text-[#A49C93] text-base md:text-2xl leading-relaxed">

            A cinematic visual composition shaped through
            editorial storytelling,
            luxury pacing,
            and timeless nocturnal elegance.

          </p>

        </div>

        {/* MAIN SHOWCASE */}
        <div className="mt-32 md:mt-[220px] relative">

          {/* IMAGE 1 */}
          <div
            ref={image1Ref}
            className="relative z-10 max-w-[850px]"
          >

            {/* FRAME */}
            <div className="hidden lg:block absolute top-[-40px] left-[-40px] w-full h-full border border-[#2B2722]"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden bg-[#151515]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>

              <img
                src={scene1}
                alt="Luxury Scene"
                className="w-full h-[600px] md:h-[1100px] object-cover hover:scale-[1.04] transition duration-[2600ms]"
              />

              {/* FLOATING TEXT */}
              <div className="absolute bottom-8 md:bottom-16 left-8 md:left-16 z-20">

                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-[#B89B63]">

                  Chapter I

                </p>

                <h3 className="mt-6 font-serif text-5xl md:text-8xl leading-[0.88] tracking-[-0.06em] font-light text-[#F5F1EA]">

                  Nocturnal
                  <br />

                  <span className="italic text-[#D4AF37]">
                    identity.
                  </span>

                </h3>

              </div>

            </div>

          </div>

          {/* FLOATING IMAGE 2 */}
          <div
            ref={image2Ref}
            className="relative z-20 mt-[-80px] md:mt-[-220px] ml-auto max-w-[320px] md:max-w-[560px]"
          >

            {/* GLASS CARD */}
            <div className="absolute top-[-40px] md:top-[-60px] left-[-20px] md:left-[-60px] z-30 backdrop-blur-xl bg-black/20 border border-white/[0.08] p-5 md:p-8 max-w-[260px]">

              <p className="text-[8px] uppercase tracking-[0.45em] text-[#B89B63]">

                Editorial Composition

              </p>

              <p className="mt-5 text-[#DDD5CA] text-sm leading-relaxed">

                Designed through cinematic pacing,
                layered atmosphere,
                and timeless luxury composition.

              </p>

            </div>

            {/* IMAGE */}
            <div className="relative overflow-hidden bg-[#151515]">

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

              <img
                src={scene2}
                alt="Editorial"
                className="w-full h-[420px] md:h-[760px] object-cover hover:scale-[1.05] transition duration-[2600ms]"
              />

            </div>

          </div>

          {/* BOTTOM BLOCK */}
          <div className="mt-28 md:mt-[220px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="lg:col-span-4 relative z-20">

              {/* HUGE TYPO */}
              <div className="absolute -top-20 left-0 text-[6rem] md:text-[12rem] font-serif text-white/[0.03] leading-none pointer-events-none">

                A

              </div>

              {/* LABEL */}
              <p className="relative z-10 text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

                Maison Aetheris

              </p>

              {/* TITLE */}
              <h3 className="relative z-10 mt-8 font-serif text-[clamp(4rem,8vw,7rem)] leading-[0.88] tracking-[-0.07em] font-light text-[#F5F1EA]">

                Crafted with
                <br />

                <span className="italic text-[#D4AF37]">
                  timeless depth.
                </span>

              </h3>

              {/* TEXT */}
              <p className="mt-10 max-w-md text-[#A49C93] text-base md:text-xl leading-relaxed">

                Built through cinematic motion,
                restrained luxury pacing,
                and immersive editorial storytelling.

              </p>

              {/* NOTES */}
              <div className="mt-14 flex flex-wrap gap-10">

                {[
                  'Black Oud',
                  'Amber Smoke',
                  'Velvet Rose',
                ].map((item) => (

                  <span
                    key={item}
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.42em] text-[#72695F]"
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

            {/* RIGHT HUGE IMAGE */}
            <div
              ref={image3Ref}
              className="lg:col-span-8 relative"
            >

              {/* FRAME */}
              <div className="hidden lg:block absolute bottom-[-40px] right-[-40px] w-full h-full border border-[#2B2722]"></div>

              {/* BACK GLOW */}
              <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[220px] bg-[#D4AF37]/10 blur-[160px] rounded-full"></div>

              {/* IMAGE */}
              <div className="relative z-10 overflow-hidden bg-[#151515]">

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10"></div>

                <img
                  src={scene3}
                  alt="Luxury Portrait"
                  className="w-full h-[620px] md:h-[1200px] object-cover hover:scale-[1.04] transition duration-[2600ms]"
                />

                {/* FLOATING INFO */}
                <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 z-20 backdrop-blur-xl bg-black/20 border border-white/[0.08] p-6 md:p-9 max-w-[320px]">

                  <p className="text-[8px] uppercase tracking-[0.45em] text-[#B89B63]">

                    Signature Atmosphere

                  </p>

                  <p className="mt-5 text-[#E6DED2] text-sm md:text-base leading-relaxed">

                    Darkness, shadow,
                    cinematic pacing,
                    and timeless nocturnal elegance.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ShowcaseSection