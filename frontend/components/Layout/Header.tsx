import {FC} from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const Header: FC = () => {
    return(
        <header className="bg-header-bg bg-opacity-50 w-full h-[100px] backdrop-blur-[100px] fixed top-0 shadow-2xl">
            <div className='w-full h-full relative flex items-center justify-center '>
                <div className='absolute left-5 top-5'>---</div>
                <h1 className='font-markPro text-white tracking-wider shadow-sm text-xl'><span className='text-primary-color text-[1.40rem]'>3</span>LANCE</h1>
                <WalletMultiButton />
            </div>
        </header>
    )
}