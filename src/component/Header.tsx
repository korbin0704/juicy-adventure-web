import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import useIsMobile, { getIsMobile } from '../hooks/useIsMobile';

const Header = (props: any) => {
    const [showMenu, setShowMenu] = useState(false)

    const onMenu = () => {
        if (getIsMobile()) {

        } else {
            setShowMenu(!showMenu)
        }
    }

    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center px-[20px] md:px-0 py-[11px] md:py-[16px]'>
                    <img src='/img/ic_menu.svg' className='w-[40px] h-[40px] md:w-[40px] md:h-[40px] cursor-pointer' onClick={onMenu} />
                    <div className='hidden md:flex flex-row items-center space-x-[26px]'>
                        <img src='/img/ic_white_paper.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        <img src='/img/ic_x.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        <img src='/img/ic_discord.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                    </div>
                </div>
                <Collapse in={showMenu}>
                    <div className='flex flex-col px-[14px] w-fit space-y-[10px]'>
                        <div>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>Game Features</p>
                        </div>
                        <div>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>Tokenomics</p>
                        </div>
                        <div>
                            <p className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>NFT</p>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};
export default Header;