import {FC} from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export const MenuOpen: FC<{setIsOpenMenu: boolean}> = ({setIsOpenMenu}) => {
    return(
        <div className="bg-black bg-opacity-50 w-screen h-screen top-0 left-0">
            <div className='w-[70%] h-full bg-header-bg flex flex-col items-center p-5 text-center relative'>
                <div className='text-white text-lg font-markPro'>
                    <div className='text-primary-color'>Whitelist Collab</div>
                    <div>Tool</div>
                </div>
                <div className='absolute top-2 right-4 text-lg text-white'>
                    <FontAwesomeIcon icon={faClose} onClick={()=> {setIsOpenMenu(false)}}/>
                </div>
                <div className='absolute bottom-0 w-full flex justify-center'>
                    <WalletMultiButton />
                </div>
            </div>
        </div>
    )
}