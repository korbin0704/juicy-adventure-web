import { useEffect, useRef, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { getIsMobile } from '../hooks/useIsMobile';
import gsap from 'gsap';
import { DISCORD_LINK, WHITE_PAPER_LINK, X_LINK } from '../common/constant';

type Props = {
    remainedAirdropSeconds: number
    onGoToStep: Function
}

const Header = ({ remainedAirdropSeconds, onGoToStep }: Props) => {
    const [showPcMenu, setShowPcMenu] = useState(false)
    const [showMobMenu, setShowMobMenu] = useState(false)
    const menuRef = useRef<any>(null);

    useEffect(() => {
        gsap.from(menuRef.current, { rotation: 0, y: -80, duration: 1, delay: 1.5 })
    }, [])

    const onMenu = () => {
        if (getIsMobile()) {
            setShowMobMenu(!showMobMenu)
        } else {
            setShowPcMenu(!showPcMenu)
        }
    }

    return (
        <div>
            <div className='flex flex-col'>
                {(showPcMenu || showMobMenu) &&
                    <div className='fixed left-0 w-full h-[100dvh] bg-transparent max-w-[100vw] md:bg-black/40 backdrop-blur-[4px] -z-10' onClick={onMenu}>
                    </div>
                }

                <div ref={menuRef} className='flex flex-row justify-between items-center px-[20px] md:px-0 py-[11px] md:py-[16px]'>
                    <div className='flex flex-row items-center'>
                        <img src='/img/ic_menu.svg' className='w-[40px] h-[40px] md:w-[40px] md:h-[40px] cursor-pointer' onClick={onMenu} />
                        <img src='/img/img_juicy_logo.png' className='hidden md:flex w-[90px] h-[48px] ml-[20px] cursor-pointer' onClick={() => { location.reload() }} />
                    </div>
                    <div className='hidden md:flex flex-row items-center space-x-[26px]'>
                        <a target='_blank' href={WHITE_PAPER_LINK}>
                            <img src='/img/ic_white_paper.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        </a>
                        <a target='_blank' href={X_LINK}>
                            <img src='/img/ic_x.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        </a>
                        <a target='_blank' href={DISCORD_LINK}>
                            <img src='/img/ic_discord.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                        </a>
                    </div>
                </div>
                <Collapse in={showPcMenu}>
                    <div className='flex flex-col px-[14px] w-fit space-y-[10px]'>
                        <div onClick={() => {
                            onMenu()
                            onGoToStep(2)
                        }}>
                            <span className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>Game Features</span>
                        </div>
                        <div onClick={() => {
                            onMenu()
                            onGoToStep(6)
                        }}>
                            <span className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>Tokenomics</span>
                        </div>
                        <div onClick={() => {
                            onMenu()
                            onGoToStep(7)
                        }}>
                            <span className='text-[white] text-[16px] cursor-pointer hover:font-bold mb-0'>NFT</span>
                        </div>
                    </div>
                </Collapse>

                <Collapse in={showMobMenu} dimension={"width"}>
                    <div className='absolute'>
                        <div className='flex flex-col h-[100dvh] px-[14px] py-[12px] bg-[#1D1D1D] rounded-tr-[9px] w-[200px]'>
                            <img src='/img/ic_arrow_left.svg' className='w-[24px] h-[24px] cursor-pointer' onClick={onMenu} />
                            <img src='/img/img_juicy_logo.png' className='w-[130px] h-[70px] mt-[22px] self-center' onClick={() => { location.reload() }} />
                            <div
                                className={remainedAirdropSeconds > 0
                                    ?
                                    'flex flex-row mt-[25px] bg-[#ADADAD] rounded-[30px] w-[114px] h-[17px] items-center justify-center self-center'
                                    :
                                    'flex flex-row mt-[25px] bg-[#B9269E] rounded-[30px] w-[114px] h-[17px] items-center justify-center self-center'}>
                                {remainedAirdropSeconds > 0 &&
                                    <img src='/img/ic_lock.png' className='w-[9px] h-[9px]' />
                                }
                                <span className='text-[6px] text-white ml-[4px]'>
                                    Go to Airdrop Event
                                </span>
                            </div>
                            <div className='flex flex-col mt-[42px] space-y-[10px]'>
                                <div onClick={() => {
                                    onMenu()
                                    onGoToStep(2)
                                }}>
                                    <span className='text-[white] text-[15px] cursor-pointer mb-0'>Game Features</span>
                                </div>
                                <div onClick={() => {
                                    onMenu()
                                    onGoToStep(6)
                                }}>
                                    <span className='text-[white] text-[15px] cursor-pointer mb-0'>Tokenomics</span>
                                </div>
                                <div onClick={() => {
                                    onMenu()
                                    onGoToStep(7)
                                }}>
                                    <span className='text-[white] text-[15px] cursor-pointer mb-0'>NFT</span>
                                </div>
                            </div>

                            <div className="flex-1" />

                            <div className='flex flex-row items-center space-x-[26px]'>
                                <a target='_blank' href={WHITE_PAPER_LINK}>
                                    <img src='/img/ic_white_paper.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                                </a>
                                <a target='_blank' href={X_LINK}>
                                    <img src='/img/ic_x.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                                </a>
                                <a target='_blank' href={DISCORD_LINK}>
                                    <img src='/img/ic_discord.png' className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] cursor-pointer' />
                                </a>
                            </div>
                            <span className='text-[6px] font-[300] text-white mt-[10px]'>
                                ⓒ 2024 by GRAMPUS CWC PTE. LTD.<br />
                                All rights reserved.<br />
                                <br />
                                Terms of Condition  I  Private Policy
                            </span>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};
export default Header;