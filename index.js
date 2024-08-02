'use client';

import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
  
const App = () => {
  return (
    <OnchainKitProvider apiKey={process.env.PUBLIC_ONCHAINKIT_API_KEY} chain={base}>
      <YourKit />
    </OnchainKitProvider>
  );
};