import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Loading from './component/Loading'
import Header from './component/Header';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import useIsMobile, { getIsMobile } from './hooks/useIsMobile';
import AnimatingButton from './component/AnimatingButton';

gsap.registerPlugin(useGSAP);

function App() {

  const step1Ref = useRef<any>(null);
  const step2Ref = useRef<any>(null);
  const videoRef = useRef<any>(null);
  const logoRef = useRef<any>(null);
  const sloganRef = useRef<any>(null);
  const [loadingEnd, setLoadingEnd] = useState(false)
  const [step, setStep] = useState(2)

  useEffect(() => {
  }, [])

  useEffect(() => {
    if (loadingEnd) {
      gsap.from(videoRef.current, {
        duration: 1,
        rotation: 0,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true
      });
      gsap.from(sloganRef.current, { rotate: 360, ease: "sine.in", y: -880, duration: 1, opacity: 0, delay: 2.5 })
      gsap.from(logoRef.current, { ease: "bounce.out", y: -550, duration: 1, opacity: 0, delay: 3.5 })
    }
  }, [loadingEnd])

  const onVideoReady = () => {
    setTimeout(() => {
      setLoadingEnd(true)
      videoRef.current.current
    }, 300)
  }

  const getButtonPositionX = (p_initPercent: number) => {
    const ratio = getIsMobile() ? 1080 / 1920 : 1920 / 1080
    let res = 0
    if (window.innerWidth / window.innerHeight > ratio) {
      res = p_initPercent
    } else {
      const desiredWidth = window.innerHeight * ratio
      const delta = (desiredWidth - window.innerWidth) / 2
      const a = desiredWidth * p_initPercent / 100
      const b = desiredWidth - a
      res = ((a - delta) / (desiredWidth - delta * 2)) * 100
      console.log("desiredWidth:", desiredWidth, "a:", a, "b:", b, "delta:", delta, "res:", res)
    }
    return res
  }

  const getButtonPositionY = (p_initPercent: number) => {
    const ratio = getIsMobile() ? 1920 / 1080 : 1080 / 1920
    let res = 0
    if (window.innerHeight / window.innerWidth > ratio) {
      res = p_initPercent
    } else {
      const desiredHeight = window.innerWidth * ratio
      const delta = (desiredHeight - window.innerHeight) / 2
      const a = desiredHeight * p_initPercent / 100
      const b = desiredHeight - a
      res = ((a - delta) / (desiredHeight - delta * 2)) * 100
      console.log("desiredHeight:", desiredHeight, "a:", a, "b:", b, "delta:", delta, "res:", res)
    }
    return res
  }

  const playFromTo = (startTime: number, endTime: number, callback: Function) => {
    const video = videoRef.current;
    if (video) {
      // Pause at a specific section
      const pauseAtEnd = () => {
        if (video.currentTime >= endTime) {
          video.pause();
          video.removeEventListener('timeupdate', pauseAtEnd);
          callback()
        }
      };

      // Register timeupdate event listener
      video.addEventListener('timeupdate', pauseAtEnd);

      // Go to start time and play
      video.currentTime = startTime;
      video.play();
    }
  };

  const onNextStep = () => {
    if (step == 1) {
      gsap.to(step1Ref.current, { opacity: 0, duration: 2 })
      playFromTo(0, 7, () => {
        setStep(step + 1)
      });
    }
  }

  return (
    <div className='flex flex-col'>
      <div className={loadingEnd ? 'fixed w-[100vw] h-[100vh]' : 'hidden'}>
        <video ref={videoRef} src={true ? '/vid/adventure-mo.mp4' : '/vid/adventure-pc.mp4'} className='w-[100%] h-[100%] object-cover' onCanPlay={onVideoReady} />
      </div>
      <div className='z-1 relative w-full max-w-[1171px] self-center'>
        {!loadingEnd ?
          <Loading />
          :
          <div className='flex flex-col'>
            <div className='absolute w-full z-[10]'>
              <Header />
            </div>
            {step == 1 &&
              <div ref={step1Ref}>
                <div className='mt-[72px] md:mt-[173px] flex flex-col items-center md:items-start'>
                  <img ref={logoRef} src='/img/img_juicy_logo.png' className='w-[242px] h-[128px] md:w-[448px] md:h-[237px] md:ml-[30px]' />
                  <p ref={sloganRef} className='text-[20px] md:text-[32px] font-[700] text-white w-fit mt-[15px] md:mt-[44px] md:ml-[19px]'>
                    Let's Make Some Juice!
                  </p>
                </div>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionX(getIsMobile() ? 69 : 59)}%`, top: `${getButtonPositionY(getIsMobile() ? 58 : 41)}%` }}>
                  <AnimatingButton onClick={() => {
                    onNextStep()
                  }} />
                </div>
              </div>
            }

            {step == 2 &&
              <div ref={step2Ref} className='flex flex-col items-start justify-center self-center'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>A Splash {getIsMobile() ? "\n" : ""} of Magic Unleashed!</span>
                <p className='text-[8px] md:text-[16px] font-light text-white whitespace-pre-line mt-[22px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>A magical juice mixer landed on a peaceful island. <br />
                  The juices from it are not just delicious—they turn <br />
                  animals into humans and even grant them special powers.<br />
                  <br />
                  Now, this mixer is the most sought-after treasure,<br />
                  and a fierce competition has started among the animals.<br />
                  <br />
                  The battle for the magical mixer is on,<br />
                  Knowing that a single sip can change the game.<br />
                  Are you ready to juice it up?!</p>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )

}

export default App
