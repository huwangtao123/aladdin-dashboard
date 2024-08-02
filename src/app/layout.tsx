import OnchainProviders from './OnchainProviders'
import '@coinbase/onchainkit/styles.css';
 

export default function RootLayout({ children }) {
  return (
    <OnchainProviders>
      { children }
    </OnchainProviders> 
  )
}  