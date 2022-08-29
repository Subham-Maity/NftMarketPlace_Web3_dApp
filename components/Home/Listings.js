import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'

const Listings = () => {
    const marketplace = useMarketplace("0x5B38c4f333A3BD53938a3d7298c51e8FcEc760dc")

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            console.log(list)

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            LISTINGS
        </div>
    )
}
export default Listings;