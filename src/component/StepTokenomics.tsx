import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { getIsMobile } from '../hooks/useIsMobile';

const StepTokenomics = (props: any) => {
    const tokenomicsTxtRef1 = useRef<any>(null);
    const tokenomicsTxtRef2 = useRef<any>(null);
    const subTitleRef = useRef<any>(null);
    const descRef = useRef<any>(null);
    const iconRef = useRef<any>(null);
    const btnRef = useRef<any>(null);
    const scrollDownBtnRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({})
                .to(tokenomicsTxtRef1.current, { duration: 2, text: "Tokenomics:" })
                .to(tokenomicsTxtRef2.current, { duration: 2, text: "Add Fun to Play" })
                .to(subTitleRef.current, {
                    duration: 1, ease: "expo.out",
                    y: -20,
                    opacity: 1,
                })
                .to(descRef.current, {
                    duration: 1, ease: "expo.out",
                    y: -20,
                    opacity: 1,
                })
                .to(iconRef.current, {
                    duration: 1, ease: "expo.out",
                    y: -20,
                    opacity: 1,
                })
                .to(btnRef.current, {
                    duration: 1, ease: "expo.out",
                    y: -20,
                    opacity: 1,
                })
                .to(scrollDownBtnRef.current, {
                    duration: 1, ease: "expo.out",
                    y: -20,
                    opacity: 1,
                })
        }, 2000)
    }, [])

    return (
        <div className='flex flex-col items-center justify-center self-center h-[100vh]'>
            <span className='whitespace-pre-line text-center'>
                <span ref={tokenomicsTxtRef1} className='text-[24px] md:text-[42px] text-white font-bold text-center'></span>
                {getIsMobile() ? "\n" : <span className='mx-[6px]' />}
                <span ref={tokenomicsTxtRef2} className='text-[24px] md:text-[42px] text-white font-bold text-center'></span>
            </span>
            <span ref={subTitleRef} className='text-[13px] md:text-[25px] text-white mt-[17px] md:mt-[41px] text-center' style={{ opacity: 0 }}>Earn $JELLY as You Play</span>
            <div ref={descRef} className='text-[8px] md:text-[16px] text-white font-extralight mt-[17px] md:mt-[41px] text-center whitespace-pre-line' style={{ opacity: 0 }}>
                Victory tastes sweet, {getIsMobile() && "\n"}especially when you're crowned the winner of the battle!<br />
                As you climb the ranks, you'll be rewarded with Jelly tokens.<br />
                The higher your rank, the more Jelly you earn.
            </div>
            <div ref={iconRef} className='flex flex-row items-center justify-center space-x-[15px] md:space-x-[59px] mt-[55px]' style={{ opacity: 0 }}>
                <div className='flex flex-col'>
                    <img src='/img/img_jelly.png' className='w-[66px] h-[96px] md:w-[69px] md:h-[100px]' />
                    <div className='flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[14px] text-center'>
                        $Jelly
                    </div>
                </div>
                <div className='flex flex-col'>
                    <img src='/img/ic_exchange.png' className='w-[46px] h-[31px] md:w-[85px] md:h-[57px]' />
                    <div className='flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[14px] text-center'>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <img src='/img/img_gram.png' className='w-[82px] h-[82px] md:w-[93px] md:h-[93px]' />
                    <div className='flex items-center justify-center text-white text-[10px] md:text-[15px] mt-[14px] text-center'>
                        $GRAM
                    </div>
                </div>
            </div>

            <div ref={btnRef} style={{ opacity: 0 }}
                className='flex items-center justify-center w-[210px] h-[33px] md:w-[295px] md:h-[40px] text-white text-[11px] md:text-[15px] text-center bg-[#B9269E] rounded-[16px] md:rounded-[20px] mt-[76px] md:mt-[35px] cursor-pointer'>
                <span className='whitespace-pre-line leading-[11px] md:leading-[15px]'>
                    All about <span className='font-bold'>GRAM</span>{getIsMobile() && "\n"} ecosystem
                </span>
            </div>

            <div ref={scrollDownBtnRef} style={{ opacity: 0 }}
                className='fixed w-[50px] h-[50px] flex items-center justify-center bottom-[30px] cursor-pointer left-[50%]  ml-[-25px]' onClick={() => {
                }}>
                <img src='/img/ic_scroll_down.png' className='w-[45px] h-[45px]' />
            </div>
        </div>
    );
};
export default StepTokenomics;