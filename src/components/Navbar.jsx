import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function Navbar() {

  const navRef = useRef(null)

  const mobileMenuRef = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    // NAVBAR REVEAL
    gsap.fromTo(
      navRef.current,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    )

  }, [])

  useEffect(() => {

    if (menuOpen) {

      gsap.fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      )

      document.body.style.overflow = 'hidden'

    } else {

      document.body.style.overflow = 'auto'

    }

  }, [menuOpen])

  return (

    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[999]"
    >

      {/* BACKDROP */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/20 border-b border-white/[0.03]"></div>

      {/* ATMOSPHERE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.04] to-transparent"></div>

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1900px] mx-auto px-6 md:px-12 xl:px-20">

        <div className="h-[90px] md:h-[120px] flex items-center justify-between">

          {/* LEFT */}
          <div className="flex flex-col">

            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.55em] text-[#A58D5A]">

              Maison

            </p>

            <h1 className="mt-2 text-[24px] md:text-[34px] tracking-[0.08em] font-light text-[#F5F1EA] leading-none">

              AETHERIS

            </h1>

          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-16 xl:gap-24">

            {[
              'Collections',
              'Stories',
              'Atelier',
              'Archives',
            ].map((item) => (

              <a
                key={item}
                href="#"
                className="group relative overflow-hidden"
              >

                <span className="block text-[10px] uppercase tracking-[0.42em] text-[#C8C0B6] transition duration-500 group-hover:text-[#F5F1EA]">

                  {item}

                </span>

                <span className="absolute left-0 bottom-[-12px] w-0 h-px bg-[#D4AF37] transition-all duration-700 group-hover:w-full"></span>

              </a>

            ))}

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-6">

            {/* CTA */}
            <button className="hidden md:flex group relative overflow-hidden border border-[#3A342C] px-9 py-4">

              {/* HOVER */}
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition duration-700"></div>

              {/* TEXT */}
              <span className="relative z-10 text-[10px] uppercase tracking-[0.38em] text-[#F5F1EA] group-hover:text-black transition duration-700">

                Discover

              </span>

            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative z-[1001] w-12 h-12 flex items-center justify-center"
            >

              <div className="relative w-8 h-8">

                {/* TOP */}
                <span
                  className={`absolute left-0 top-2 w-8 h-px bg-[#F5F1EA] transition duration-500 ${
                    menuOpen
                      ? 'rotate-45 top-4'
                      : ''
                  }`}
                ></span>

                {/* MIDDLE */}
                <span
                  className={`absolute left-0 top-4 w-8 h-px bg-[#F5F1EA] transition duration-500 ${
                    menuOpen
                      ? 'opacity-0'
                      : ''
                  }`}
                ></span>

                {/* BOTTOM */}
                <span
                  className={`absolute left-0 top-6 w-8 h-px bg-[#F5F1EA] transition duration-500 ${
                    menuOpen
                      ? '-rotate-45 top-4'
                      : ''
                  }`}
                ></span>

              </div>

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-700 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#070707]"></div>

        {/* ATMOSPHERE */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

        {/* HUGE TYPO */}
        <div className="absolute bottom-[-5%] left-[-5%] text-[7rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">

          AETHERIS

        </div>

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        ></div>

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col justify-between px-8 pt-36 pb-10">

          {/* MENU */}
          <div className="flex flex-col">

            {[
              'Collections',
              'Stories',
              'Atelier',
              'Archives',
            ].map((item, index) => (

              <a
                key={item}
                href="#"
                className="group border-b border-[#1E1B17] py-8 flex items-center justify-between"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >

                {/* TEXT */}
                <span className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#F5F1EA] group-hover:text-[#D4AF37] transition duration-500">

                  {item}

                </span>

                {/* ARROW */}
                <span className="text-[#7B725F] text-2xl group-hover:text-[#D4AF37] group-hover:translate-x-2 transition duration-500">

                  →

                </span>

              </a>

            ))}

          </div>

          {/* BOTTOM */}
          <div>

            {/* DESCRIPTION */}
            <p className="max-w-sm text-[#9D958B] text-sm leading-relaxed">

              A cinematic fragrance experience shaped through
              editorial storytelling,
              timeless atmosphere,
              and nocturnal elegance.

            </p>

            {/* SOCIAL */}
            <div className="mt-10 flex items-center gap-8 flex-wrap">

              {[
                'Instagram',
                'Behance',
                'Dribbble',
              ].map((item) => (

                <a
                  key={item}
                  href="#"
                  className="text-[10px] uppercase tracking-[0.42em] text-[#CFC7BD] hover:text-[#D4AF37] transition duration-500"
                >

                  {item}

                </a>

              ))}

            </div>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar