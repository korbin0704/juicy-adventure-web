import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const Header = (props: any, ref: any) => {
    const [open, setOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        setOpen(true)
    }, [])
    return (
        <Collapse ref={ref} in={open} timeout={10000} appear={true} mountOnEnter={true}>
            <div id="example-collapse-text" >
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between items-center py-[21px] md:py-[16px]'>
                        <img src='/img/ic_menu.svg' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' onClick={() => { setShowMenu(!showMenu) }} />
                        <div className='flex flex-row items-center space-x-[26px]'>
                            <img src='/img/ic_white_paper.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                            <img src='/img/ic_x.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                            <img src='/img/ic_discord.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        </div>
                    </div>
                    {showMenu &&
                        <div className='flex flex-col space-y-[10px] px-[14px] w-fit'>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold'>Game Features</p>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold'>Tokenomics</p>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold'>NFT</p>
                        </div>
                    }
                </div>
            </div>
        </Collapse>
    );
};
export default Header;