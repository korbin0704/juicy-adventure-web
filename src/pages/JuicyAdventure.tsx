import { useEffect, useRef, useState } from 'react'
import Loading from '../component/Loading'
import Header from '../component/Header';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import useIsMobile, { getIsMobile } from '../hooks/useIsMobile';
import AnimatingButton from '../component/AnimatingButton';
import { TextPlugin } from '../vendor/gsap/TextPlugin';
import StepTokenomics from '../component/StepTokenomics';
import StepGrowNft from '../component/StepGrowNft';
import dayjs from 'dayjs';
import { leftPad } from '../common/utils';
import { AIRDROP_EVENT_LINK, EVENT_STARTS_AT } from '../common/constant';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin)

function JuicyAdventure() {

  const step1Ref = useRef<any>(null);
  const step2Ref = useRef<any>(null);
  const step3Ref = useRef<any>(null);
  const step4Ref = useRef<any>(null);
  const step5Ref = useRef<any>(null);
  const step6Ref = useRef<any>(null);
  const step7Ref = useRef<any>(null);
  const step8Ref = useRef<any>(null);
  const footerRef = useRef<any>(null);

  const videoRef = useRef<any>(null);
  const timerRef = useRef<any>(null);
  const logoRef = useRef<any>(null);
  const sloganRef = useRef<any>(null);

  const [loadingEnd, setLoadingEnd] = useState(false)
  const [step, setStep] = useState(1)
  const [showFooter, setShowFooter] = useState(false)
  const [remainedAirdropSeconds, setRemainedAirdropSeconds] = useState<number>(0)
  let timer: any = null;
  let touchStartYPos: number = 0

  useEffect(() => {
    startAirDropTimer()
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])

  useEffect(() => {
    if (loadingEnd) {
      if (true) {
        gsap.from(videoRef.current, {
          duration: 1,
          rotation: 0,
          opacity: 0,
          delay: 0.5,
          stagger: 0.2,
          ease: "sine.out",
          force3D: true
        });
        gsap.from(sloganRef.current, { rotate: 0, ease: "sine.in", y: 0, duration: 1, opacity: 0, delay: 3.5 })
        gsap.from(logoRef.current, { ease: "bounce.out", y: -550, duration: 1, opacity: 0, delay: 2 })
        gsap.from(timerRef.current, { duration: 1, opacity: 0, delay: 1 })
      } else { // for test only
        moveToStep(3)
      }
    }
  }, [loadingEnd])

  useEffect(() => {
    if (step == 2) {
      gsap.from(step2Ref.current, { duration: 2, opacity: 0, delay: 0 })
    } else if (step == 3) {
      gsap.from(step3Ref.current, { duration: 2, opacity: 0, delay: 0 })
    } else if (step == 4) {
      gsap.from(step4Ref.current, { duration: 2, opacity: 0, delay: 0 })
    } else if (step == 5) {
      gsap.from(step5Ref.current, { duration: 2, opacity: 0, delay: 0 })
    } else if (step == 6) {
      gsap.from(step6Ref.current, { duration: 2, opacity: 0, delay: 0 })
    } else if (step == 8) {
      gsap.from(step8Ref.current, { duration: 1, opacity: 0, delay: 0 })
    }
  }, [step])

  useEffect(() => {
    if (showFooter)
      gsap.from(footerRef.current, { y: 20, duration: 1, opacity: 0, delay: 0 })
  }, [showFooter])

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
      // console.log("desiredWidth:", desiredWidth, "a:", a, "b:", b, "delta:", delta, "res:", res)
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
      // console.log("desiredHeight:", desiredHeight, "a:", a, "b:", b, "delta:", delta, "res:", res)
    }
    return res
  }

  const playFromTo = (startTime: number, endTime: number, callback: Function | undefined) => {
    const video = videoRef.current;
    video.playbackRate = 2
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
      setLoadingEnd(true)
    }, 2000)
  }
  const moveToStep = (p_step: number) => {
    gsap.to(step1Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step2Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step3Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step4Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step5Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step6Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step7Ref.current, { opacity: 0, duration: 1 })
    gsap.to(step8Ref.current, { opacity: 0, duration: 1 })

    if (p_step == 2) {
      playFromTo(0, 7, () => {
        setStep(p_step)
      });
    } else if (p_step == 3) {
      playFromTo(7, 17, () => {
        setStep(p_step)
      });
    } else if (p_step == 4) {
      playFromTo(17, 28, () => {
        setStep(p_step)
      });
    } else if (p_step == 5) {
      playFromTo(28, 41, () => {
        setStep(p_step)
        playFromTo(41, 43, () => {
        })
      });
    } else if (p_step == 6) {
      playFromTo(43, 47, () => {
        setStep(p_step)
      });
    } else if (p_step == 7) {
      playFromTo(47, 50, () => {
        playFromTo(50, 56, undefined)
        setStep(p_step)
      });
    } else if (p_step == 8) {
      playFromTo(56, 56, () => {
        setStep(p_step)
      });
    }
  }

  const startAirDropTimer = () => {
    if (timer) {
      clearInterval(timer)
    }
    timer = setInterval(() => {
      const secs = Math.round(dayjs(EVENT_STARTS_AT).diff(dayjs(), "seconds"))
      setRemainedAirdropSeconds(Math.max(0, secs))
    }, 1000);
  }

  return (
    <div className='flex flex-col'>
      <div className={loadingEnd ? 'fixed w-[100vw] h-[100dvh]' : 'hidden'}>
        <video ref={videoRef} autoplay={getIsMobile() ? "" : false} playsinline="" className='w-[100%] h-[100%] object-cover' src={useIsMobile() ? '/vid/adventure-mo.mp4' : '/vid/adventure-pc.mp4'} onLoadedMetadata={() => { onVideoReady() }} />
      </div>
      <div className='z-1 relative w-full max-w-[1171px] self-center'>
        {!loadingEnd ?
          <Loading />
          :
          <div className='flex flex-col'>
            <div className='absolute w-full z-[10]'>
              <Header remainedAirdropSeconds={remainedAirdropSeconds} onGoToStep={(step: number) => { moveToStep(step); }} />
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
                    moveToStep(2)
                  }} />
                </div>
              </div>
            }

            {step == 2 &&
              <div ref={step2Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100dvh] md:pl-[220px] pt-[160px] md:pt-0'>
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
                    moveToStep(3)
                  }} />
                </div>
              </div>
            }

            {step == 3 &&
              <div ref={step3Ref} className='flex flex-col items-center md:items-end justify-center self-center h-[100dvh] md:pr-[300px] pt-[160px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Be the last one {getIsMobile() ? "\n" : ""} survive in the battle!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[3px]' style={{ textAlign: getIsMobile() ? "center" : "right" }}>
                  It is your time to shine in the battle.<br />
                  Find your ultimate combination of shooter and weapons to win.
                </span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 71)}%`, top: `${getButtonPositionY(getIsMobile() ? 25 : 35)}%` }}>
                  <AnimatingButton onClick={() => {
                    moveToStep(4)
                  }} />
                </div>
                <div className='flex flex-row items-center mt-[20px] md:mt-[42px] space-x-[8px] md:space-x-[13px]'>
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

                <div className='flex flex-row items-center space-x-[-70px] md:space-x-[-150px] mt-[-30px] md:mr-[-130px]'>
                  <img src='/img/ic_character3.gif' className='w-[160px] h-[160px] md:w-[420px] md:h-[420px]' />
                  <img src='/img/ic_character2.gif' className='w-[160px] h-[160px] md:w-[420px] md:h-[420px]' />
                  <img src='/img/ic_character1.gif' className='w-[160px] h-[160px] md:w-[420px] md:h-[420px]' style={{}} />
                </div>
                <span className='w-full text-center text-[10px] md:text-[16px] text-white md:mr-[-60px] mt-[-10px] md:mt-[-40px]'>
                  Design your shooter & Squuze your way to victory
                </span>
              </div>
            }


            {step == 4 &&
              <div ref={step4Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100dvh] md:pl-[220px] pt-[100px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Watch Your Step!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[4px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>
                  The battle's heating up, and it's not just about dodging enemies.<br />
                  You've got to keep an eye on where you're stepping too!<br />
                  <br />
                  Falling off the edge? That's a real risk.<br />
                  But hey, you can also use jumping boards to zip away from trouble.<br />
                  So,use the map to your advantage, and aim to be the last one standing.
                </span>
                <Carousel controls={false} indicators={false} interval={1000}
                  className='w-[263px] h-[125px] md:w-[643px] md:h-[306px] mt-[12px] md:mt-[34px] rounded-[12px] overflow-hidden'>
                  {['https://d3u2pnu58u70ht.cloudfront.net/Announcement/jungle.gif', 'https://d3u2pnu58u70ht.cloudfront.net/Announcement/historic.gif'].map((it) => {
                    return (
                      <Carousel.Item>
                        <img src={it} className='' />
                      </Carousel.Item>)
                  })}
                </Carousel>
                <span className='text-white text-[15px] mt-[12px] hidden md:flex self-center'>
                  It's all about being smart and quick on your feet!
                </span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 29)}%`, top: `${getButtonPositionY(getIsMobile() ? 23 : 33)}%` }}>
                  <AnimatingButton onClick={() => {
                    moveToStep(5)
                  }} />
                </div>
              </div>
            }


            {step == 5 &&
              <div ref={step5Ref} className='flex flex-col items-center md:items-start justify-center self-center h-[100dvh] md:pl-[400px] pt-[160px] md:pt-0'>
                <span className='text-[24px] md:text-[32px] font-bold text-white whitespace-pre-line text-center md:text-start'>Your Juice is ready!</span>
                <span className='text-[8px] md:text-[16px] font-extralight text-white whitespace-pre-line mt-[22px] md:mt-[40px]' style={{ textAlign: getIsMobile() ? "center" : "left" }}>
                  This juice can trn turn animals into humans<br />
                  and even grant them special powers...<br />
                  <br />
                  Now you are ready for the Juicy Adventure!
                </span>
                <div className='fixed w-[10px] h-[10px] flex items-center justify-center' style={{ left: `${getButtonPositionY(getIsMobile() ? 50 : 29)}%`, top: `${getButtonPositionY(getIsMobile() ? 30 : 33)}%` }}>
                  <AnimatingButton onClick={() => {
                    moveToStep(6)
                  }} />
                </div>
              </div>
            }

            {step == 6 &&
              <div ref={step6Ref} onWheel={(e) => {
                if (e.deltaY > 0) {
                  moveToStep(7)
                }
              }}
                onTouchStart={(e) => {
                  touchStartYPos = e.changedTouches[0].clientY
                }}
                onTouchEnd={(e) => {
                  // alert(e.changedTouches[0].clientY - touchStartYPos)
                  if (e.changedTouches[0].clientY - touchStartYPos < -80) {
                    moveToStep(7)
                  }
                }}
              >
                <StepTokenomics onNextStep={() => {
                  moveToStep(7)
                }} />
              </div>
            }

            {step == 7 &&
              <div ref={step7Ref}
                onWheel={() => {
                  moveToStep(8)
                }}
                onTouchStart={(e) => {
                  touchStartYPos = e.changedTouches[0].clientY
                }}
                onTouchEnd={(e) => {
                  // alert(e.changedTouches[0].clientY - touchStartYPos)
                  if (e.changedTouches[0].clientY - touchStartYPos < -80) {
                    moveToStep(8)
                  }
                }}
              >
                <StepGrowNft onNextStep={() => {
                  moveToStep(8)
                }} />
              </div>
            }

            {step == 8 &&
              <div ref={step8Ref}
                onWheel={() => {
                  setShowFooter(true)
                }}
                onTouchStart={(e) => {
                  touchStartYPos = e.changedTouches[0].clientY
                }}
                onTouchEnd={(e) => {
                  if (e.changedTouches[0].clientY - touchStartYPos < -80) {
                    setShowFooter(true)
                  }
                }}>
                <div className='flex flex-col items-center justify-center self-center h-[100dvh]'>
                  <span className='text-white text-[24px] md:text-[32px] font-bold whitespace-pre-line text-center mt-[-150px] md:mt-0'>
                    Upgrade your{getIsMobile() && "\n"} shooter NFTs<br />
                    Squeeze your way{getIsMobile() && "\n"} to victory
                  </span>
                  <span className='text-white text-[48px] leading-[48px] md:text-[100px] md:leading-[124px] font-bold whitespace-pre-line text-center mt-[77px] md:mt-[68px]'>
                    <span className='text-[#FFE900]'>
                      {parseInt((Math.max(0, remainedAirdropSeconds) / (24 * 3600)).toString())}D&nbsp;
                    </span>
                    {getIsMobile() ? <br /> : ""}
                    {leftPad(parseInt(((Math.max(0, remainedAirdropSeconds) % (24 * 3600)) / 3600).toString()), 2)}
                    :
                    {leftPad(parseInt(((Math.max(0, remainedAirdropSeconds) % 3600) / 60).toString()), 2)}
                    :
                    {leftPad(parseInt((Math.max(0, remainedAirdropSeconds) % 60).toString()), 2)}
                  </span>
                  <div
                    onClick={() => {
                      if (remainedAirdropSeconds <= 0) {
                        window.open(AIRDROP_EVENT_LINK, "_blank")
                      }
                    }}
                    className={remainedAirdropSeconds > 0
                      ?
                      'flex flex-row bg-[#ADADAD] rounded-[20px] w-[250px] h-[40px] items-center justify-center self-center mt-[18px]'
                      :
                      'flex flex-row bg-[#B9269E] rounded-[20px] w-[250px] h-[40px] items-center justify-center self-center cursor-pointer mt-[18px]'
                    }>
                    {remainedAirdropSeconds > 0 &&
                      <img src='/img/ic_lock.png' className='w-[25px] h-[25px]' />
                    }
                    <span className='text-[15px] text-white ml-[4px] leading-[18px]'>
                      Go to Airdrop Event
                    </span>
                  </div>
                  {showFooter &&
                    <div ref={footerRef} className='absolute bottom-[40px] hidden md:flex flex-col items-center'>
                      <span className='text-white text-[13px]'>Copyright ⓒ 2023 by GRAMPUS CWC PTE. LTD. All rights reserved. </span>
                      <span className='text-white text-[13px] mt-[10px]'>
                        <a target="_blank" className='text-white no-underline' href='https://cdn.norma.land/policy/TermsofUse_EN.html'>Terms of service</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a target="_blank" className='text-white no-underline' href='https://cdn.norma.land/policy/PrivacyPolicy_EN.html'>Privacy policy</a>
                      </span>
                    </div>
                  }
                </div>
              </div>
            }

            <div ref={timerRef} className='fixed bottom-[00px] right-0 md:right-[30px] z-[100]'>
              {remainedAirdropSeconds ?
                <img src={'img/ic_countdown.png'} className='w-[294px] h-[166px] md:w-[812px] md:h-[458px]' />
                :
                <img src={'img/ic_eventopen.png'} className='w-[294px] h-[166px] md:w-[406px] md:h-[229px] cursor-pointer' onClick={() => {

                }} />
              }
              {remainedAirdropSeconds > 0 &&
                <div className='absolute inset-0 whitespace-pre-line'>
                  <span className='absolute right-[67px] top-[84px] md:right-[217px] md:top-[232px] w-[30px] text-center text-black text-[10px] md:text-[26px] font-bold'>
                    {parseInt((Math.max(0, remainedAirdropSeconds) / (24 * 3600)).toString())}
                  </span>
                  {getIsMobile() ? <br /> : ""}
                  <span className='absolute right-[13px] top-[86px] md:right-[106px] md:top-[238px] w-[58px] md:w-[78px] text-center text-black text-[9px] md:text-[24px] font-bold'>
                    {leftPad(parseInt(((Math.max(0, remainedAirdropSeconds) % (24 * 3600)) / 3600).toString()), 2)}
                    :
                    {leftPad(parseInt(((Math.max(0, remainedAirdropSeconds) % 3600) / 60).toString()), 2)}
                    :
                    {leftPad(parseInt((Math.max(0, remainedAirdropSeconds) % 60).toString()), 2)}
                  </span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )

}

export default JuicyAdventure
