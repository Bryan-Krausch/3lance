import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Layout/Header'
import WalletContextProvider from '../context/WalletContextProvider'
import {WorkspaceProvider} from "../context/WorkspaceProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WalletContextProvider>
        <WorkspaceProvider>
          <Header />
          <div className='mt-[101px]'>
            <Component {...pageProps} />
          </div>
        </WorkspaceProvider>
      </WalletContextProvider>
    </div>
  ) 
}

export default MyApp
