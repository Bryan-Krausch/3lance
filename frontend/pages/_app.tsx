import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Layout/Header'
import WalletContextProvider from '../context/WalletContextProvider'
import {WorkspaceProvider} from "../context/WorkspaceProvider"
import CheckIfConnected from "../context/CheckIfConnected"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WalletContextProvider>
        <WorkspaceProvider>
          <CheckIfConnected>
            <Header />
            <div className='mt-[101px]'>
              <Component {...pageProps} />
            </div>
          </CheckIfConnected>
        </WorkspaceProvider>
      </WalletContextProvider>
    </div>
  ) 
}

export default MyApp
