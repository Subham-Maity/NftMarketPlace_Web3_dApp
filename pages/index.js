import { useAddress, useMetamask } from '@thirdweb-dev/react'

const style = {
    wrapper: `flex h-screen items-center justify-center`,
    connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white `,
}
export default function Home() {
    const connectWithMetamask = useMetamask()
    const address = useAddress()

    const Auth = () => {
        return (
            <div className={style.wrapper}>
                <button
                    onClick={connectWithMetamask}
                    className={style.connectWalletButton}
                >
                    Connect Metamask
                </button>
            </div>
        )
    }

    return <>{address ? <div>LOGGED IN</div> : Auth()}</>
}




