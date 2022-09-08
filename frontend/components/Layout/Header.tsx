import {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MenuOpen } from './MenuOpen'
import {useState} from 'react'

export const Header: FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    return(
        <header className="bg-header-bg bg-opacity-50 w-full h-[100px] backdrop-blur-[100px] fixed top-0 shadow-2xl">
            {isOpenMenu && <MenuOpen setIsOpenMenu={setIsOpenMenu}/>}
            <div className='w-full h-full relative flex items-center justify-center '>
                <div className='absolute left-5 top-5 text-white text-xl'>
                    <FontAwesomeIcon icon={faBars} onClick={() => {setIsOpenMenu(true)}}/>
                </div>

                <div className='text-center'> 
                    <h1 className='font-markPro tracking-wider shadow-sm text-xl text-primary-color'>Whitelist Collab</h1>
                    <h1 className='font-markPro text-white tracking-wider shadow-sm text-xl'>Tool</h1>
                </div>
                {/* <WalletMultiButton /> */}
            </div>
        </header>
    )
}