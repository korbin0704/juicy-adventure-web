import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Loading from './component/Loading'
import Header from './component/Header';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import useIsMobile from './hooks/useIsMobile';

gsap.registerPlugin(useGSAP);

function App() {

  const headerRef = useRef<any>(null);
  const videoRef = useRef<any>(null);
  const logoRef = useRef<any>(null);
  const sloganRef = useRef<any>(null);
  const [loadingEnd, setLoadingEnd] = useState(false)

  useEffect(() => {
  }, [])

  useEffect(() => {
    if (loadingEnd) {
      gsap.from(headerRef.current, { rotation: 0, y: -50, duration: 1 })
      gsap.from(videoRef.current, {
        duration: 1,
        rotation: 360,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true
      });
      gsap.from(sloganRef.current, { rotate: 360, ease: "sine.in", y: -880, duration: 1, opacity: 0, delay: 1 })
      gsap.from(logoRef.current, { ease: "bounce.out", y: -550, duration: 1, opacity: 0, delay: 2 })
    }
  }, [loadingEnd])

  const onVideoReady = () => {
    setTimeout(() => {
      setLoadingEnd(true)
    }, 1000)
  }

  return (
    <div className='flex flex-col'>
      <div className='z-[100] relative w-full max-w-[1171px] self-center'>
        {!loadingEnd ?
          <Loading />
          :
          <div className='flex flex-col'>
            <div ref={headerRef} className='absolute w-full'>
              <Header />
            </div>
            <div className='mt-[72px] md:mt-[173px] flex flex-col items-center md:items-start'>
              <img ref={logoRef} src='/img/img_juicy_logo.png' className='w-[242px] h-[128px] md:w-[448px] md:h-[237px] md:ml-[30px]' />
              <p ref={sloganRef} className='text-[20px] md:text-[32px] font-[700] text-white w-fit mt-[15px] md:mt-[44px] md:ml-[19px]'>
                Let's Make Some Juice!
              </p>
            </div>
          </div>
        }
      </div>
      <div className={loadingEnd ? 'fixed w-[100vw] h-[100vh]' : 'hidden'}>
        <video ref={videoRef} src={useIsMobile() ? '/vid/adventure-mo.mp4' : '/vid/adventure-pc.mp4'} className='w-[100%] h-[100%] object-cover' onCanPlay={onVideoReady} />
      </div>
    </div>
  )
}

export default App
