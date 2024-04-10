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
                <div className={clock % 7 > 0 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
                <div className={clock % 7 > 1 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
                <div className={clock % 7 > 2 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
                <div className={clock % 7 > 3 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
                <div className={clock % 7 > 4 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
                <div className={clock % 7 > 5 ? 'w-[24px] h-[24px] border-[3px] bg-[white] border-[white]' : 'w-[24px] h-[24px] border-[3px] border-[white]'}>
                </div>
            </div>
            <p className='text-[white] text-[20px] mt-[17px] w-[85px]'>
                Loading
                {new Array(clock % 4).fill(0).map(it => (
                    <span>.</span>
                ))}</p>
        </div>
    );
};
export default Loading;