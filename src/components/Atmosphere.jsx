import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Atmosphere() {

  const orb1 = useRef(null)
  const orb2 = useRef(null)
  const orb3 = useRef(null)

  useEffect(() => {

    // ORB 1
    gsap.to(orb1.current, {
      x: 120,
      y: -80,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // ORB 2
    gsap.to(orb2.current, {
      x: -100,
      y: 120,
      duration: 24,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    // ORB 3
    gsap.to(orb3.current, {
      x: 80,
      y: 60,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

  }, [])

  return (

    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* ORB 1 */}
      <div
        ref={orb1}
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#8A6A2F]/8 blur-[180px] rounded-full"
      ></div>

      {/* ORB 2 */}
      <div
        ref={orb2}
        className="absolute bottom-[5%] right-[5%] w-[700px] h-[700px] bg-[#D4AF37]/6 blur-[220px] rounded-full"
      ></div>

      {/* ORB 3 */}
      <div
        ref={orb3}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#F0D18A]/5 blur-[160px] rounded-full"
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]"></div>

    </div>
  )
}

export default Atmosphere