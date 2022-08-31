import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'

const Listings = () => {

    const style = {

    }

    const [listings, setListings] = useState([])

    const marketplace = useMarketplace("0x5B38c4f333A3BD53938a3d7298c51e8FcEc760dc")

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            setListings(list)

        } catch (error) {
            console.error(error)
        }
    }
    console.log(listings)
    return (
        <div className={style.wrapper}>
            {listings.length > 0 ? (
                <>
                {listings?.map((listing) => (
                    <div>NFT CARD HERE</div>
                ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}
export default Listings;