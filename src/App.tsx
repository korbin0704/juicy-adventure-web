import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Loading from './component/Loading'
import Header from './component/Header';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import useIsMobile, { getIsMobile } from './hooks/useIsMobile';
import AnimatingButton from './component/AnimatingButton';
import { TextPlugin } from './vendor/gsap/TextPlugin';
import StepTokenomics from './component/StepTokenomics';
import StepGrowNft from './component/StepGrowNft';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin)

function App() {

  const step1Ref = useRef<any>(null);
  const step2Ref = useRef<any>(null);
  const step3Ref = useRef<any>(null);
  const step4Ref = useRef<any>(null);
  const step5Ref = useRef<any>(null);
  const step6Ref = useRef<any>(null);
  const step7Ref = useRef<any>(null);

  const videoRef = useRef<any>(null);
  const logoRef = useRef<any>(null);
  const sloganRef = useRef<any>(null);

  const [loadingEnd, setLoadingEnd] = useState(false)
  const [step, setStep] = useState(1)

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

  useEffect(() => {
    if (step == 2) {
      gsap.from(step2Ref.current, { duration: 2, opacity: 0, delay: 1 })
    } else if (step == 3) {
      gsap.from(step3Ref.current, { duration: 2, opacity: 0, delay: 1 })
    } else if (step == 4) {
      gsap.from(step4Ref.current, { duration: 2, opacity: 0, delay: 1 })
    } else if (step == 5) {
      gsap.from(step5Ref.current, { duration: 2, opacity: 0, delay: 1 })
    } else if (step == 6) {
      gsap.from(step6Ref.current, { duration: 2, opacity: 0, delay: 1 })
    }
  }, [step])


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

  const playFromTo = (startTime: number, endTime: number, callback: Function | undefined) => {
    const video = videoRef.current;
    if (video) {
      // Pause at a specific section
      const pauseAtEnd = () => {
        if (video.currentTime >= endTime) {
          video.pause();
          video.removeEventListener('timeupdate', pauseAtEnd);
          callback?.()
        }
      };

      // Register timeupdate event listener
      video.addEventListener('timeupdate', pauseAtEnd);

      // Go to start time and play
      video.currentTime = startTime;
      video.play();
    }
  };

  const onVideoReady = () => { // TODO : Because of this function, cannot use hook inside loadingEnd state tree. Don't know why.
    setTimeout(() => {
      // setLoadingEnd(true)
      // videoRef.current.currentTime = 52
    }, 2000)
  }
  const onNextStep = () => {
    if (step == 1) {
      gsap.to(step1Ref.current, { opacity: 0, duration: 2 })
      playFromTo(0, 7, () => {
        setStep(step + 1)
      });
    } else if (step == 2) {
      gsap.to(step2Ref.current, { opacity: 0, duration: 2 })
      playFromTo(7, 16, () => {
        setStep(step + 1)
      });
    } else if (step == 3) {
      gsap.to(step3Ref.current, { opacity: 0, duration: 2 })
      playFromTo(16, 28, () => {
        setStep(step + 1)
      });
    } else if (step == 4) {
      gsap.to(step4Ref.current, { opacity: 0, duration: 2 })
      playFromTo(28, 44, () => {
        setStep(step + 1)
      });
    } else if (step == 5) {
      gsap.to(step5Ref.current, { opacity: 0, duration: 2 })
      playFromTo(44, 47, () => {
        setStep(step + 1)
      });
    } else if (step == 6) {
      gsap.to(step6Ref.current, { opacity: 0, duration: 2 })
      playFromTo(47, 50, () => {
        playFromTo(50, 56, undefined)
        setStep(step + 1)
      });
    }
  }

  return (
    <div className='flex flex-col'>
      <div className={loadingEnd ? 'fixed w-[100vw] h-[100vh]' : 'hidden'}>
        <video ref={videoRef} src={useIsMobile() ? '/vid/adventure-mo.mp4' : '/vid/adventure-pc.mp4'} className='w-[100%] h-[100%] object-cover' onCanPlay={() => { onVideoReady() }} />
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
                  <span ref={sloganRef} className='text-[20px] md:text-[32px] font-[700] text-white w-fit mt-[15px] md:mt-[44px] md:ml-[19px]'>
                    Let's Make Some Juice!
                  </span>
                </div>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionX(getIsMobile() ? 69 : 59)}%`, top: `${getButtonPositionY(getIsMobile() ? 58 : 41)}%` }}>
                  <AnimatingButton initDelay={3} onClick={() => {
                    onNextStep()
                  }} />
                </div>
              </div>
            }

            {step == 2 &&
              <div ref={step2Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100vh] md:pl-[220px] pt-[220px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>A Splash {getIsMobile() ? "\n" : ""} of Magic Unleashed!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[22px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>A magical juice mixer landed on a peaceful island. <br />
                  The juices from it are not just delicious—they turn <br />
                  animals into humans and even grant them special powers.<br />
                  <br />
                  Now, this mixer is the most sought-after treasure,<br />
                  and a fierce competition has started among the animals.<br />
                  <br />
                  The battle for the magical mixer is on,<br />
                  Knowing that a single sip can change the game.<br />
                  Are you ready to juice it up?!</span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 29)}%`, top: `${getButtonPositionY(getIsMobile() ? 30 : 50)}%` }}>
                  <AnimatingButton onClick={() => {
                    onNextStep()
                  }} />
                </div>
              </div>
            }

            {step == 3 &&
              <div ref={step3Ref} className='flex flex-col items-center md:items-end justify-center self-center h-[100vh] md:pr-[300px] pt-[220px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Be the last one {getIsMobile() ? "\n" : ""} survive in the battle!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[3px]' style={{ textAlign: getIsMobile() ? "center" : "right" }}>
                  It is your time to shine in the battle.<br />
                  Find your ultimate combination of shooter and weapons to win.
                </span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 71)}%`, top: `${getButtonPositionY(getIsMobile() ? 25 : 35)}%` }}>
                  <AnimatingButton onClick={() => {
                    onNextStep()
                  }} />
                </div>
                <div className='flex flex-row items-center mt-[34px] md:mt-[42px] space-x-[8px] md:space-x-[13px]'>
                  <div className='flex flex-col'>
                    <img src='/img/ic_shooter.png' className='w-[60px] h-[60px] md:w-[115px] md:h-[115px]' />
                    <div className='h-[35px] flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[10px] text-center'>
                      Shooter
                    </div>
                  </div>
                  <span className='text-[25px] font-bold text-white'>
                    +
                  </span>
                  <div className='flex flex-col'>
                    <img src='/img/ic_blaster.png' className='w-[60px] h-[60px] md:w-[115px] md:h-[115px]' />
                    <div className='h-[35px] flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[10px] text-center'>
                      Juice <br />Blaster
                    </div>
                  </div>
                  <span className='text-[25px] font-bold text-white'>
                    +
                  </span>
                  <div className='flex flex-col'>
                    <img src='/img/ic_smasher.png' className='w-[60px] h-[60px] md:w-[115px] md:h-[115px]' />
                    <div className='h-[35px] flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[10px] text-center'>
                      Smasher
                    </div>
                  </div>
                </div>

                <div className='flex flex-row items-center space-x-[-70px] md:space-x-[-150px] mt-[-20px] md:mr-[-100px]'>
                  <img src='/img/ic_character1.gif' className='w-[160px] h-[160px] md:w-[350px] md:h-[350px]' />
                  <img src='/img/ic_character2.gif' className='w-[160px] h-[160px] md:w-[350px] md:h-[350px]' />
                  <img src='/img/ic_character3.gif' className='w-[160px] h-[160px] md:w-[350px] md:h-[350px]' />
                </div>
              </div>
            }


            {step == 4 &&
              <div ref={step4Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100vh] md:pl-[220px] pt-[220px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Watch Your Step!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[22px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>
                  The battle's heating up, and it's not just about dodging enemies.<br />
                  You've got to keep an eye on where you're stepping too!<br />
                  <br />
                  Falling off the edge? That's a real risk.<br />
                  But hey, you can also use jumping boards to zip away from trouble.<br />
                  So,use the map to your advantage, and aim to be the last one standing.
                </span>
                <img src='/img/img_step4.png' className='w-[263px] h-[125px] md:w-[643px] md:h-[306px] mt-[34px]' />
                <span className='text-white text-[15px] mt-[12px] hidden md:flex self-center'>
                  It's all about being smart and quick on your feet!
                </span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 29)}%`, top: `${getButtonPositionY(getIsMobile() ? 30 : 33)}%` }}>
                  <AnimatingButton onClick={() => {
                    onNextStep()
                  }} />
                </div>
              </div>
            }


            {step == 5 &&
              <div ref={step5Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100vh] md:pl-[400px] pt-[220px] md:pt-0' onWheel={(e) => {
                if (e.deltaY > 0) {
                  onNextStep()
                }
              }}>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Your Juice is ready!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[22px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>
                  This juice can trn turn animals into humans<br />
                  and even grant them special powers...<br />
                  <br />
                  Now you are ready for the Juicy Adventure!
                </span>
                <div className='fixed w-[50px] h-[50px] flex items-center justify-center bottom-[30px] cursor-pointer' style={{}} onClick={() => {
                  onNextStep()
                }}>
                  <img src='/img/ic_scroll_down.png' className='w-[45px] h-[45px]' />
                </div>
              </div>
            }

            {step == 6 &&
              <div ref={step6Ref} onWheel={(e) => {
                if (e.deltaY > 0) {
                  onNextStep()
                }
              }}>
                <StepTokenomics onNextStep={() => {
                  onNextStep()
                }} />
              </div>
            }

            {step == 7 &&
              <div ref={step7Ref} onWheel={() => {
                onNextStep()
              }}>
                <StepGrowNft onNextStep={() => {
                  onNextStep()
                }} />
              </div>
            }

          </div>
        }
      </div>
    </div>
  )

}

export default App
