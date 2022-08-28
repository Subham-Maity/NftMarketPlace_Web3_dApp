import { useAddress, useMetamask } from '@thirdweb-dev/react'

const style = {
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




