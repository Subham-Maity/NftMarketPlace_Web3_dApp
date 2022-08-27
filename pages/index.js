import { useAddress, useMetamask } from '@thirdweb-dev/react'

const style = {
}
export default function Home() {
  const connectWithMetamask = useMetamask()
    const address = useAddress()
    console.log(address)
    return (
        <div className={style.wrapper}>
          <button onClick={connectWithMetamask} > Connect Metamask</button>
        </div>
    )
  }



