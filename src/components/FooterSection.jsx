import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FooterSection() {

  const footerRef = useRef(null)

  const glowRef = useRef(null)

  const quoteRef = useRef(null)

  useEffect(() => {

    // FOOTER REVEAL
    gsap.fromTo(
      footerRef.current,
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
          trigger: footerRef.current,
          start: 'top 85%',
        },
      }
    )

    // QUOTE REVEAL
    gsap.fromTo(
      quoteRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 90%',
        },
      }
    )

    // GLOW
    gsap.to(glowRef.current, {
      y: -260,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

  }, [])

  return (

    <footer className="relative overflow-hidden bg-[#060606] pt-44 md:pt-[420px] pb-16 md:pb-24 border-t border-[#181512]">

      {/* HUGE GLOW */}
      <div
        ref={glowRef}
        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[900px] md:w-[2400px] h-[600px] md:h-[1500px] bg-[#D4AF37]/5 blur-[240px] md:blur-[460px] rounded-full"
      ></div>

      {/* HUGE TYPO */}
      <div className="absolute top-[5%] left-[-5%] text-[8rem] md:text-[24rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">

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

      <div
        ref={footerRef}
        className="relative z-10 max-w-[1900px] mx-auto px-6 md:px-16"
      >

        {/* HUGE CTA */}
        <div className="max-w-7xl mx-auto text-center">

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

            Maison Aetheris

          </p>

          {/* HUGE TITLE */}
          <h2 className="mt-8 md:mt-10 font-serif text-[clamp(4rem,11vw,11rem)] leading-[0.84] tracking-[-0.07em] font-light text-[#F5F1EA]">

            Crafted for
            <br />

            <span className="italic text-[#D4AF37]">
              timeless nights.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-10 max-w-3xl mx-auto text-[#A49C93] text-base md:text-2xl leading-relaxed">

            A cinematic fragrance experience shaped through
            editorial storytelling,
            layered atmosphere,
            and timeless nocturnal elegance.

          </p>

          {/* BUTTONS */}
          <div className="mt-16 flex flex-wrap justify-center gap-8">

            {/* CTA */}
            <button className="group relative overflow-hidden border border-[#3A342C] px-10 md:px-14 py-4 md:py-5">

              {/* HOVER */}
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition duration-700"></div>

              {/* TEXT */}
              <span className="relative z-10 text-[10px] uppercase tracking-[0.42em] text-[#F5F1EA] group-hover:text-black transition duration-700">

                Explore Collection

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

        </div>

        {/* QUOTE BLOCK */}
        <div
          ref={quoteRef}
          className="mt-40 md:mt-[280px] text-center max-w-6xl mx-auto"
        >

          {/* LABEL */}
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

            Editorial Philosophy

          </p>

          {/* QUOTE */}
          <h3 className="mt-8 font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.86] tracking-[-0.07em] font-light text-[#F5F1EA]">

            Luxury shaped
            <br />

            <span className="italic text-[#D4AF37]">
              through emotion.
            </span>

          </h3>

          {/* TEXT */}
          <p className="mt-10 max-w-3xl mx-auto text-[#A49C93] text-base md:text-2xl leading-relaxed">

            Every composition is crafted like cinema —
            balancing shadow,
            silence,
            motion,
            and timeless atmosphere into memory.

          </p>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-40 md:mt-[260px] max-w-5xl mx-auto">

          <div className="relative overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] px-8 md:px-16 py-12 md:py-20">

            {/* INNER GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center">

              {/* LABEL */}
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.55em] text-[#A58D5A]">

                Private Journal

              </p>

              {/* TITLE */}
              <h3 className="mt-8 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-0.06em] font-light text-[#F5F1EA]">

                Join the
                <br />

                <span className="italic text-[#D4AF37]">
                  atmosphere.
                </span>

              </h3>

              {/* TEXT */}
              <p className="mt-8 max-w-2xl mx-auto text-[#A49C93] text-base md:text-xl leading-relaxed">

                Receive cinematic fragrance stories,
                editorial releases,
                and exclusive nocturnal compositions.

              </p>

              {/* INPUT */}
              <div className="mt-12 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-black/40 border border-[#2C2722] px-6 py-5 text-[#F5F1EA] outline-none placeholder:text-[#6D655B]"
                />

                <button className="group relative overflow-hidden border border-[#3A342C] px-10 py-5">

                  {/* HOVER */}
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition duration-700"></div>

                  {/* TEXT */}
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.42em] text-[#F5F1EA] group-hover:text-black transition duration-700">

                    Subscribe

                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-40 md:mt-[260px] h-px bg-gradient-to-r from-transparent via-[#2B261F] to-transparent"></div>

        {/* BOTTOM */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* LEFT */}
          <div className="lg:col-span-5">

            {/* BRAND */}
            <h3 className="text-[36px] md:text-[58px] leading-none tracking-[0.08em] font-light text-[#F5F1EA]">

              AETHERIS

            </h3>

            {/* TEXT */}
            <p className="mt-8 max-w-lg text-[#90887E] text-base md:text-lg leading-relaxed">

              Parisian fragrance house dedicated to cinematic
              olfactory storytelling,
              timeless luxury atmosphere,
              and editorial composition.

            </p>

            {/* NOTES */}
            <div className="mt-12 flex flex-wrap gap-6">

              {[
                'Black Oud',
                'Amber Smoke',
                'Velvet Rose',
              ].map((note) => (

                <span
                  key={note}
                  className="text-[9px] md:text-[10px] uppercase tracking-[0.42em] text-[#72695F]"
                >

                  {note}

                </span>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-14">

            {[
              {
                title: 'Collections',
                items: ['Nocturne', 'Velour', 'Éclipse'],
              },
              {
                title: 'Maison',
                items: ['Stories', 'Atelier', 'Archives'],
              },
              {
                title: 'Social',
                items: ['Instagram', 'Behance', 'Dribbble'],
              },
              {
                title: 'Contact',
                items: ['Paris', 'Support', 'Contact'],
              },
            ].map((column) => (

              <div key={column.title}>

                {/* TITLE */}
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#A58D5A]">

                  {column.title}

                </p>

                {/* LINKS */}
                <div className="mt-8 flex flex-col gap-5">

                  {column.items.map((item) => (

                    <a
                      key={item}
                      href="#"
                      className="group relative w-fit text-[#C7BFB5] text-sm md:text-base transition duration-500 hover:text-[#F5F1EA]"
                    >

                      {item}

                      {/* UNDERLINE */}
                      <span className="absolute left-0 -bottom-2 w-0 h-px bg-[#D4AF37] transition-all duration-700 group-hover:w-full"></span>

                    </a>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-[#1D1A17] flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.42em] text-[#5E564D] text-center md:text-left">

            © 2026 Aetheris Fragrances. All Rights Reserved.

          </p>

          {/* RIGHT */}
          <div className="flex items-center gap-6 flex-wrap justify-center">

            {[
              'Privacy',
              'Terms',
              'Cookies',
            ].map((item) => (

              <a
                key={item}
                href="#"
                className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-[#6D655B] hover:text-[#D4AF37] transition duration-500"
              >

                {item}

              </a>

            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}

export default FooterSection