import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EditorialSection from './components/EditorialSection'
import AtmosphereSection from './components/AtmosphereSection'
import ShowcaseSection from './components/ShowcaseSection'
import FooterSection from './components/FooterSection'

function App() {

  return (

    <div className="relative overflow-hidden bg-[#050505] text-white">

      {/* ================= GLOBAL ATMOSPHERE ================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

        {/* MAIN GOLD LIGHT */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1400px] md:w-[3200px] h-[1000px] md:h-[2200px] bg-[#D4AF37]/[0.035] blur-[260px] md:blur-[560px] rounded-full"></div>

        {/* LEFT CINEMATIC LIGHT */}
        <div className="absolute top-[20%] left-[-20%] w-[600px] md:w-[1600px] h-[600px] md:h-[1600px] bg-[#D4AF37]/[0.02] blur-[220px] md:blur-[420px] rounded-full"></div>

        {/* RIGHT CINEMATIC LIGHT */}
        <div className="absolute bottom-[0%] right-[-20%] w-[600px] md:w-[1600px] h-[600px] md:h-[1600px] bg-[#D4AF37]/[0.02] blur-[220px] md:blur-[420px] rounded-full"></div>

        {/* CENTER DEPTH */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1800px] h-[500px] md:h-[1200px] bg-[#D4AF37]/[0.018] blur-[240px] md:blur-[460px] rounded-full"></div>

        {/* BOTTOM ATMOSPHERE */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1200px] md:w-[2600px] h-[700px] md:h-[1600px] bg-[#D4AF37]/[0.02] blur-[240px] md:blur-[500px] rounded-full"></div>

      </div>

      {/* ================= GLOBAL RADIAL DEPTH ================= */}
      <div className="fixed inset-0 pointer-events-none z-[1]">

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background:
              'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.9) 100%)',
          }}
        ></div>

      </div>

      {/* ================= GLOBAL VIGNETTE ================= */}
      <div className="fixed inset-0 pointer-events-none z-[2]">

        {/* TOP */}
        <div className="absolute top-0 left-0 w-full h-[28%] bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>

        {/* BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

        {/* LEFT */}
        <div className="absolute top-0 left-0 w-[22%] h-full bg-gradient-to-r from-black/85 via-black/30 to-transparent"></div>

        {/* RIGHT */}
        <div className="absolute top-0 right-0 w-[22%] h-full bg-gradient-to-l from-black/85 via-black/30 to-transparent"></div>

      </div>

      {/* ================= GLOBAL GRAIN ================= */}
      <div
        className="fixed inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none z-[3]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      ></div>

      {/* ================= FLOATING LIGHTS ================= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">

        {/* LIGHT 1 */}
        <div className="absolute top-[12%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#D4AF37]/[0.03] blur-[120px] rounded-full"></div>

        {/* LIGHT 2 */}
        <div className="absolute top-[40%] right-[8%] w-[180px] md:w-[360px] h-[180px] md:h-[360px] bg-[#D4AF37]/[0.025] blur-[120px] rounded-full"></div>

        {/* LIGHT 3 */}
        <div className="absolute bottom-[18%] left-[18%] w-[220px] md:w-[440px] h-[220px] md:h-[440px] bg-[#D4AF37]/[0.02] blur-[140px] rounded-full"></div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        <Navbar />

        {/* ================= HERO ================= */}
        <section className="relative">

          {/* TRANSITION */}
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-[#080808]/80 to-[#080808] z-20"></div>

          <HeroSection />

        </section>

        {/* ================= EDITORIAL ================= */}
        <section className="relative">

          {/* TOP BLEND */}
          <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-[#080808] via-[#080808]/80 to-transparent z-20"></div>

          {/* BOTTOM BLEND */}
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-[#070707]/80 to-[#070707] z-20"></div>

          <EditorialSection />

        </section>

        {/* ================= ATMOSPHERE ================= */}
        <section className="relative">

          {/* TOP BLEND */}
          <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-[#070707] via-[#070707]/80 to-transparent z-20"></div>

          {/* BOTTOM BLEND */}
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-[#060606]/80 to-[#060606] z-20"></div>

          <AtmosphereSection />

        </section>

        {/* ================= SHOWCASE ================= */}
        <section className="relative">

          {/* TOP BLEND */}
          <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-[#060606] via-[#060606]/80 to-transparent z-20"></div>

          {/* BOTTOM BLEND */}
          <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-20"></div>

          <ShowcaseSection />

        </section>

        {/* ================= FOOTER ================= */}
        <section className="relative">

          {/* TOP BLEND */}
          <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-20"></div>

          <FooterSection />

        </section>

      </div>

    </div>

  )
}

export default App