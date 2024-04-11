import { useEffect, useState } from 'react';

const Loading = () => {

    const [clock, setClock] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setClock(prev => prev + 1)
        }, 500)
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row items-center space-x-[7px]'>
                {Array(6).fill(0).map((it, idx) => {
                    return (
                        <div key={idx} className={clock % 7 > idx ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                        </div>
                    )
                })}
            </div>
            <p className='text-[white] text-[20px] mt-[17px] w-[85px]'>
                Loading
                {Array(clock % 4).fill(0).map((it, idx) => (
                    <span key={idx}>.</span>
                ))}</p>
        </div>
    );
};
export default Loading;