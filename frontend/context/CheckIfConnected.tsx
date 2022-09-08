import {FC, ReactNode} from 'react'
import {useWallet} from "@solana/wallet-adapter-react"
require('@solana/wallet-adapter-react-ui/styles.css')


const WalletContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const {publicKey} = useWallet()

    return(
        <div>
            {publicKey ?
                <div>{children}</div>
            :
                <div className='bg-black w-2/4 h-2/4 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-[200] text-white'>
                    test
                </div>
            }
        </div>
    )
}

export default WalletContextProvider