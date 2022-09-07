import {createContext, FC} from 'react'
import {AnchorWallet, useAnchorWallet} from '@solana/wallet-adapter-react'


interface Workspace {
    wallet: AnchorWallet
}

export const WorkspaceContext = createContext<Workspace | null>(null)

export const WorkspaceProvider: FC<any> = ({children}) => {
    const wallet: any = useAnchorWallet()

    return (
        <WorkspaceProvider 
            value={{
                wallet
            }}
        >
            {children}
        </WorkspaceProvider>
    )
}