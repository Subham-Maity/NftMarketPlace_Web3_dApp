import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({Component, pageProps }) {
    return (
        <ThirdwebProvider
            desiredChainId = {ChainId. Rinkeby}
                chainRpc={{
                [ChainId. Rinkeby]: `https://rinkeby.infura.io/v3/d6fabfa49c954b4cae22d2adea0386fd`
            }}
            >
                <Component {...pageProps} />
        </ThirdwebProvider>
    )
}

export default MyApp
