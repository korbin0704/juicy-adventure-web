import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const AnimatingButton = () => {

    const btnRef = useRef<any>(null);
    const masterTimeline = gsap.timeline({ repeat: -1 })

    useEffect(() => {
        masterTimeline.to(btnRef.current, { rotation: 0, scale: 1.3, duration: 2, delay: 0.5, opacity: 0.5, }).to(btnRef.current, { rotation: 0, scale: 1, duration: 2, delay: 0.5, opacity: 1, })
    }, [])

    return (
        <div className='relative flex items-center justify-center w-fit cursor-pointer'>
            <div ref={btnRef} className='border-[1px] border-white rounded-[50%] w-[85px] h-[85px] p-[2px]'>
                <div className='border-[5px] border-white rounded-[50%] w-full h-full'></div>
            </div>
            <span className='absolute text-white text-[13px] font-medium rotate-[-12deg]'>Click</span>
        </div>
    );
};
export default AnimatingButton;