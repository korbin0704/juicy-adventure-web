import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { getIsMobile } from '../hooks/useIsMobile';

type Props = {
    onNextStep: Function
}

const StepGrowNft = ({ onNextStep }: Props) => {
    const tokenomicsTxtRef1 = useRef<any>(null);
    const tokenomicsTxtRef2 = useRef<any>(null);
    const subTitleRef = useRef<any>(null);
    const descRef = useRef<any>(null);
    const mickey1Ref = useRef<any>(null);
    const mickey2Ref = useRef<any>(null);
    const mickey3Ref = useRef<any>(null);
    const mickey4Ref = useRef<any>(null);
    const mickey5Ref = useRef<any>(null);
    const mickey6Ref = useRef<any>(null);
    const mickey7Ref = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline({})
                .to(tokenomicsTxtRef1.current, { duration: 1, text: "Grow Along" })
                .to(tokenomicsTxtRef2.current, { duration: 1, text: " with Your NFT" }).then(() => {
                    gsap.timeline().to(subTitleRef.current, { duration: 3, ease: "expo.out", opacity: 1, });
                    gsap.timeline().to(descRef.current, { duration: 3, ease: "expo.out", opacity: 1, });
                    gsap.timeline()
                        .to(mickey1Ref.current, { duration: 1, ease: "expo.out", opacity: 1, })
                        .then(() => {
                            gsap.timeline().to(mickey2Ref.current, { duration: 1, ease: "expo.out", opacity: 1, });
                            gsap.timeline().to(mickey3Ref.current, { duration: 1, ease: "expo.out", opacity: 1, })
                                .then(() => {
                                    gsap.timeline().to(mickey4Ref.current, { duration: 1, ease: "expo.out", opacity: 1, });
                                    gsap.timeline().to(mickey5Ref.current, { duration: 1, ease: "expo.out", opacity: 1, })
                                        .then(() => {
                                            gsap.timeline().to(mickey6Ref.current, { duration: 1, ease: "expo.out", opacity: 1, });
                                            gsap.timeline().to(mickey7Ref.current, { duration: 1, ease: "expo.out", opacity: 1, });
                                        })
                                })
                        })
                })
        }, 2000)
    }, [])

    return (
        <div className='flex flex-col items-center justify-center self-center h-[100dvh]'>
            <span className='whitespace-pre-line text-center'>
                <span ref={tokenomicsTxtRef1} className='text-[24px] md:text-[42px] text-[#B9269E] font-bold text-center'></span>
                {getIsMobile() ? "\n" : <span className='mx-[6px]' />}
                <span ref={tokenomicsTxtRef2} className='text-[24px] md:text-[42px] text-[#B9269E] font-bold text-center'></span>
            </span>
            <span ref={subTitleRef} className='text-[13px] md:text-[25px] text-white mt-[37px] md:mt-[41px] text-center' style={{ opacity: 0 }}>Level Up Your Shooter NFT for Higher Stats</span>
            <div ref={descRef} className='text-[8px] md:text-[16px] text-white font-extralight mt-[17px] md:mt-[41px] text-center whitespace-pre-line' style={{ opacity: 0 }}>
                In the world of our game,{getIsMobile() && "\n"} victory brings more than just glory—it brings growth.<br />
                Each Shooter NFT will have its own{getIsMobile() && "\n"} $JELLY earning capabilities.<br />
                By securing $JELLY through your battles, upgrade your Shooter NFTs.<br />
                <br />
                Upgrade it to boost its earning capabilities{getIsMobile() && "\n"} and unlock exclusive in-game advantages.<br />
                Dive in, level up, and watch both you{getIsMobile() && "\n"} and your NFTs thrive in the game's ecosystem.
            </div>
            <div className='flex flex-row items-start justify-center space-x-[-75px] md:space-x-[-100px] mt-[18px] md:mt-[10px] overflow-hidden'>
                <img ref={mickey6Ref} src='/img/img_mickey.png' className='w-[91px] h-[105px] md:w-[176px] md:h-[201px]' style={{ opacity: 0 }} />
                <img ref={mickey4Ref} src='/img/img_mickey.png' className='w-[114px] h-[131px] md:w-[219px] md:h-[253px] mt-[27px] md:mt-[38px] z-30' style={{ opacity: 0 }} />
                <img ref={mickey2Ref} src='/img/img_mickey.png' className='w-[136px] h-[156px] md:w-[262px] md:h-[301px] mt-[67px] md:mt-[64px] z-40' style={{ opacity: 0 }} />
                <img ref={mickey1Ref} src='/img/img_mickey.png' className='w-[178px] h-[205px] md:w-[292px] md:h-[335px] mt-[82px] md:mt-[99px] z-50' style={{ opacity: 0 }} />
                <img ref={mickey3Ref} src='/img/img_mickey.png' className='w-[136px] h-[156px] md:w-[262px] md:h-[301px] mt-[67px] md:mt-[64px] z-40' style={{ opacity: 0 }} />
                <img ref={mickey5Ref} src='/img/img_mickey.png' className='w-[114px] h-[131px] md:w-[219px] md:h-[253px] mt-[27px] md:mt-[38px] z-30' style={{ opacity: 0 }} />
                <img ref={mickey7Ref} src='/img/img_mickey.png' className='w-[91px] h-[105px] md:w-[176px] md:h-[201px]' style={{ opacity: 0 }} />
            </div>
        </div>
    );
};
export default StepGrowNft;