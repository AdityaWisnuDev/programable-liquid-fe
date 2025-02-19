import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from './configs/wagmi.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'
import '@rainbow-me/rainbowkit/styles.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={base}
          theme={darkTheme({
            accentColor: "white",
            accentColorForeground: "black"
          })}
        >
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
