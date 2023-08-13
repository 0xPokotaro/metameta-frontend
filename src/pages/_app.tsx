import { appWithTranslation } from 'next-i18next'
import { APP_NAME } from '@/config'
// RainbowKit
import '@rainbow-me/rainbowkit/styles.css'
import {
  createAuthenticationAdapter,
  getDefaultWallets,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { publicProvider } from 'wagmi/providers/public'
// Wagmi
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
// SIWE
import { SiweMessage } from 'siwe'
// Type
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const AUTHENTICATION_STATUS = 'unauthenticated'

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce')
    return await response.text()
  },

  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    })
  },

  getMessageBody: ({ message }) => {
    return message.prepareMessage()
  },

  verify: async ({ message, signature }) => {
    const verifyRes = await fetch('/api/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature }),
    })

    return Boolean(verifyRes.ok)
  },

  signOut: async () => {
    await fetch('/api/logout')
  },
})

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const { chains, publicClient } = configureChains(
    [sepolia],
    [publicProvider()]
  )

  const { connectors } = getDefaultWallets({
    appName: APP_NAME,
    projectId: '200bf0dd6d61436811aee137f3c399b9',
    chains,
  })

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitAuthenticationProvider
        adapter={authenticationAdapter}
        status={AUTHENTICATION_STATUS}
      >
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          theme={lightTheme({
            accentColor: '#2196f3',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'none',
          })}
        >
          {getLayout(<Component {...pageProps} />)}
        </RainbowKitProvider>
      </RainbowKitAuthenticationProvider>
    </WagmiConfig>
  )
}

export default appWithTranslation(App)
