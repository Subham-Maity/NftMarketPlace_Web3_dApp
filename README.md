<h1 align="center"><u> Project Developer -  <a href="https://subham-maity.github.io/subham/" target="_blank"><strong>Subham (Xam)</strong></a></u> </h1>
 <div align="center"><h2>contact me at: </h2></div>
<div align="center"><a href="https://twitter.com/code_xam" target="_blank"><img alt="Twitter"
                src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a>
        <a href="https://www.linkedin.com/in/subham-xam/" target="_blank"><img alt="LinkedIn"
                src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
        <a href="mailto:maitysubham4041@gmail.com" target="_blank"><img alt="Gmail"
                src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white" /></a>
       <a href="https://www.youtube.com/channel/UCztgfCRJci6nx0VPVZcFstw/featured" target="_blank"><img alt="Youtube"
                src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" /> </a> </div>

## Tools Used 🛠️

- [**Next.js**](https://nextjs.org/) - Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications
- [**thirdweb**](https://thirdweb.com/) - Build web3 apps easily. Implement web3 features with powerful SDKs for developers. Drop NFTs with no code.
- [**Webstorm**](https://www.jetbrains.com/webstorm/) - WebStorm is an integrated development environment for JavaScript and related technologies. Like other JetBrains IDEs
- [**Infura**](https://infura.io/) - The world's most powerful suite of high availability blockchain APIs and developer tools
- [**Tailwind CSS**](https://tailwindcss.com/) -A utility-first CSS framework for rapidly building custom user interfaces
***************************
<h2 align="center"> Discussing a few workflows with development 😊👇 </h2>

<u> written by Subham </u> 

```Note: Always check commits with description```

* [**1.Third web dashboard and connect to the metamask wallet.**](#1-open-the-link-and-click-herehttpsthirdwebcomcontracts-to-see-the-third-web-dashboard-and-connect-to-the-metamask-wallet)
* [**2.NFT mint (Using ThirdWeb)**](#2-nft-mint-using-thirdweb)
* [**3.Deploy in Marketplace(Using ThirdWeb)**](#3-deploy-in-marketplaceusing-thirdweb)
* [**4.Showcases List in Our Marketplace(Using ThirdWeb)**](#4-showcases-list-in-our-marketplaceusing-thirdweb)
* [**5.Create a component for connect our API**](#5-create-a-component-for-connect-our-api)
* [**6.Connect Metamask Function Create and Check**](#6-connect-metamask-function-create-and-check)
* [**7.Ternary Statement Use**](#7-ternary-statement-use)
* [**8.Style our object**](#8-style-our-object)
* [**9.Home Page Setup**](#9-home-page-setup)


### 1. Open the link and [click here](https://thirdweb.com/contracts) to see the third web dashboard and connect to the metamask wallet.
**what is third web ?**
```text
thirdweb is a platform that provides a suite of tools for creators, artists, and entrepreneurs to easily build,
launch and manage a Web3 project. It enables users to add features such as NFTs, marketplaces, and social tokens
to their Web3 projects without writing a line of code.
```

**what is MetaMask ?**
```text
MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. 
It allows users to access their Ethereum wallet through a browser extension or mobile app, 
which can then be used to interact with decentralized applications
```
* ```note if you haven't metamask installed, you can install it by following the link below:``` click [here](https://metamask.io/). 
* ```you can check my guide if you are a complete newbie to metamask.``` click [here](https://github.com/Subham-Maity/solidity-tutorial#what-is-metamask-).
* ```for rinkeby testETH``` click [here](https://faucets.chain.link/rinkeby).  [ working date : 8/24/2022 ]



### 2. NFT mint (Using ThirdWeb)
```for this process you can check this website too``` [here](https://www.quicknode.com/guides/solidity/how-to-mint-an-nft-collection-using-thirdweb).


1. In thirdweb , simple go to NFT collection and press deploy or Thirdweb will deploy the contract for you.
2. Add unique image for now I'm gonna collect the image from [OpenSea](https://opensea.io/collection/cryptopunks)
3. Give it a name and a description and Symbol and you can see the recipient address , royalties and platform fee.
* recipient address - the address where the NFT will be sent.(this is me for now)
* royalties - the amount of ETH that will be sent to the recipient address. 
  *  Percentage - the percentage of the royalties that will be sent to the platform fee. (For now I add 10%)
* Platform fees - the amount of ETH that will be sent to the platform fee.
  *  Percentage - platform fee is the percentage of the royalties that will be sent to the platform fee. (For now I add 10%)
* Network / Chain - the network that the NFT will be deployed on. (For now I add Rinkeby testnet)

4. Click on the deploy and you will see the metamask popup and click on the confirm button that will take minimal amount of fees.
5. Done! Now go to NFTs and mint more NFTs.
 * click on the mint upload nft image (I took that image from [here](https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/6039) )
 * add description properties (I set accessory and small shade) 
   * you can simply copy from the image description and paste it in the description field.
   * then copy properties and also add row and add more properties like type - male so on.
   * you can also add advance metadata like background color and so on.
   * you can see your metamask will open and you have to pay some fees and there we go nft minted successfully.
   * Now you can transfer it or mint it to another address.
   * And do this same process for more NFTs As much as you can.


### 3. Deploy in Marketplace(Using ThirdWeb)
1. Go to marketplace and click on the deploy and then click on the marketplace and press thirdweb/deploy. [learn More about this](https://portal.thirdweb.com/pre-built-contracts/marketplace)
2. Give a image and description , choose network(testnet) and then deploy.
3. Done ! Now you can see your marketplace in the marketplace section. Successfully deployed the contract.

### 4. Showcases List in Our Marketplace(Using ThirdWeb)
1. We want to showcase our NFTs in our marketplace so we have to add our NFTs in the showcase list.
2. Now you can see ```New Listing``` in the marketplace section. click on that . [Link](https://thirdweb.com/rinkeby/marketplace/)
3. Click on Direct Listing Type 
4. Listing Currency - ETH
5. Listing Price - 0.01 ETH/0.02/ anythings
6. Quantity - 1
7. Create Listing
8. do this for all NFTs and you can see your NFTs in the marketplace section.

### 5. Create a component for connect our API
1. We need to wrap our app with this ThirdWeb provider so we need to import the ThirdWebprovider.
2. ChaindId - the address of the contract that we want to use.(Here we use our rainkeby testnetwork) 
```jsx
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
```
3. We need to create a component (check commit and you can find all changes in ```(pages/app.js)``` ) but we need to give a chain Id with you have to specify the network(renkeby in my case) .
 <h3><u> infura.io </u> </h3> 
4. In order to get connected to the network we're gonna be needing to set up some sort of rpc node and to do that yourself would take a lot of work on infrastructure in creating it. Luckily there is a service that isn't going to allow us to connect directly to the network to do that we're gonna be using something called infuria.

 * so go to the link and create account and set up your project.[Click Here](https://infura.io/dashboard)

 * make your own API key and copy it. Don't copy my KEY. 😡

```jsx
//inside Return/ _app.js
<ThirdwebProvider
    desiredChainId = {ChainId. Rinkeby}
    chainRpc={{
        [ChainId. Rinkeby]: `YOUR API KEY 😡`
    }}
>
    <Component {...pageProps} />
</ThirdwebProvider>
```

### 6. Connect Metamask Function Create and Check

1.useAdress() - this hook will return the address of the connected wallet.
2.useThirdweb() - this hook will return the thirdweb object.

```note: These are two hooks that third web provided for us to make user authetication a lot simpler.```

```jsx
import { useAddress, useMetamask } from '@thirdweb-dev/react'
```

3. Connect Metamask - this function will connect the metamask wallet.(index.js)
```jsx
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
```

* How do we know it's connected ?
  before connect your metamask wallet open your browser and open console , you can see it'll show you undefined.
* when you click on the connect metamask button it'll show you your address in the console like this 

<p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-27 162445.png?raw=true"/>
        </p>


  * ```note: if you don't see your address then you have to refresh the page.```

### 7. Ternary Statement Use

```Note``` **Class vs function component**

A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components.

1. This is functional component so within this same function we can have another function ```const Auth``` and this will return connect metamask button 
2. Create a fragment a place here input Hello you can see hello in you website.
```jsx
//index.js
export default function Home() {
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    console.log(address)
    const Auth = () => {
        return (
            <div className={style.wrapper}>
                <button onClick={connectWithMetamask}> Connect Metamask</button>
            </div>
        )
    }
    return <>Hello</>
}
```

3. You can see even though I have auth here we're not seeing to connect metamask one that's because I'm not calling the function anywhere.
4. ```Ternary Statement```  - > if address is true then show auth else show hello/Logged In.
```jsx
    return <>{address ? <div>LOGGED IN</div> : Auth()}</>
```
* ```const address = useAddress()``` .... be undefined till I logged  in or in other words If I say address here I'm basically using the address as a condition if ```address``` exist then question mark I want to load a div here that says we are logged in if address doesn't exist and it's undefined then we should load the ```Auth```. And what is auth - Auth is a function that returns a button that says connect metamask.

*  Now you can see when I connect my metamask wallet It'll show you ```LOGGED IN``` in the website. Like This.
 <p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/gif1.gif?raw=true"/>
        </p>

### 8. Style our object 
```jsx
const style = {
    wrapper: `flex h-screen items-center justify-center`,
    connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white `,
}
```
1. ```wrapper: `flex h-screen items-center justify-center`,``` - > this is flexbox and this is going to center our content vertically and horizontally.

2. ```connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white `,``` - > this is a button style (for now do that I'll change it later when I add dark mode)


3. Add Button style in our button.
```jsx
                <button
                    onClick={connectWithMetamask}
                    className={style.connectWalletButton}
                >
                    Connect Metamask
                </button>
```
```className={style.connectWalletButton}``` - > this is a button style and you have to add this in your button.

 <p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/gif2.gif?raw=true"/>
        </p>


### 9. Home Page Setup
1. If you open home folder you can see there is a ```index.js``` file and this is our home page and CollectionStats.js file and this is our collection stats component.
2. You can see some css work is done in ```index.js``` file and ```CollectionStats.js``` file no need to worry about just read comment lines we mention all of these .
```jsx
//home/index.js
import { useState, useEffect } from 'react' //useState -> to store the data and useEffect -> to fetch the data
import Image from 'next/image' //next/image -> to load the image
import { useRouter } from 'next/router' //next/router -> to navigate to different page
import { useAddress } from '@thirdweb-dev/react'//useAddress -> to get the address of the connected wallet
import { MdVerified } from 'react-icons/md'//react-icons -> to get the icon
import TopNavbarLayout from '../../layouts/TopNavbarLayout'//TopNavbarLayout -> to get the navbar
import CollectionStats from './CollectionStats'//CollectionStats -> to get the collection stats
import { collectionData } from '../../static/collections'//collectionData -> to get the collection data
// import Listings from './Listings'//Listings -> to get the listings

const style = {//css work  -> to style our object
    wrapper: `flex flex-col dark:bg-[#202226] relative flex flex-col`,//flex -> to make it flexbox and flex-col -> to make it column and dark:bg-[#202226] -> to make it dark mode 
    container: `relative flex h-[650px] flex-col`,//container -> to make it container relative -> to make it relative and h-[650px] -> to make it height 650px and flex-col -> to make it column 
    bannerContainer: `absolute h-1/3 w-full`,//bannerContainer -> to make it banner container and h-1/3 -> to make it height 1/3 and w-full -> to make it width full
    banner: `rounded-t-lg object-cover`,//banner -> to make it banner and rounded-t-lg -> to make it rounded and object-cover -> to make it cover
    collectionInfoWrapper: `absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-16`,//collectionInfoWrapper -> to make it collection info wrapper and inset-0 -> to make it inset 0 and top-1/3 -> to make it top 1/3 and z-10 -> to make it z-index 10 and h-2/3 -> to make it height 2/3 and -translate-y-16 -> translate y we use this to move the element up and down
    collectionInfoContainer: `flex flex-col items-center space-y-4`,//collectionInfoContainer -> to make it collection info container and flex-col -> to make it column and items-center -> to make it center and space-y-4 -> to make it space y 4
    collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,//collectionLogoContainer -> to make it collection logo container and flex -> to make it flexbox and items-center -> to make it center and justify-center -> to make it center and rounded-full -> to make it rounded and border-4 -> to make it border 4 and border-gray-100 -> to make it border gray 100
    collectionLogo: `rounded-full object-cover`,//collectionLogo -> to make it collection logo and rounded-full -> to make it rounded and object-cover -> to make it cover
    collectionInfo: `flex flex-col items-center space-y-6`,//collectionInfo -> to make it collection info and flex-col -> to make it column and items-center -> to make it center and space-y-6 -> to make it space y 6
    creatorInfoContainer: `flex items-center space-x-1`,//creatorInfoContainer -> to make it creator info container and flex -> to make it flexbox and items-center -> to make it center and space-x-1 -> to make it space x 1
    creator: `text-sm font-medium text-gray-500`,//creator -> to make it creator and text-sm -> to make it text small and font-medium -> to make it font medium and text-gray-500 -> to make it text gray 500
    creatorName: `cursor-pointer text-blue-500`,//creatorName -> to make it creator name and cursor-pointer -> to make it cursor pointer and text-blue-500 -> to make it text blue 500
    verified: `h-5 w-5 text-blue-500`,//verified -> to make it verified and h-5 -> to make it height 5 and w-5 -> to make it width 5 and text-blue-500 -> to make it text blue 500
    descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,//descriptionContainer -> to make it description container and max-w-3xl -> to make it max width 3xl and py-2 -> to make it padding y 2 and px-10 -> to make it padding x 10 and text-center -> to make it center and text-gray-500 -> to make it text gray 500
}

export default function Home() {//export default function Home() -> to export our function
    const address = useAddress()//address -> to get the address of the connected wallet
    const [collection] = useState(collectionData)//collection -> to store the collection data and useState -> to store the data
    const router = useRouter()//router -> to navigate to different page
    const { slug } = router.query//slug -> to get the slug

    useEffect(() => {//useEffect -> to fetch the data
        if (!address) router.replace('/')//if address is not there then navigate to home page
    }, [address])//if address is change then run this useEffect

    useEffect(() => {//useEffect -> to fetch the data
        if (!slug) return//if slug is not there then return
            ;(async () => {
            const collectionData = await getCollection()//collectionData -> to store the collection data and getCollection -> to get the collection data

            setCollection(collectionData)//setCollection -> to set the collection data
        })()//async function
    }, [slug])//if slug is change then run this useEffect

    return (//return -> to return the data
        <div> 
            <TopNavbarLayout> 
                <div className={style.wrapper}>
                    <div className={style.container}>
                        <div className={style.bannerContainer}>
                            <Image
                                className={style.banner}
                                src={collection?.banner_image_url}
                                layout='fill'
                                alt='banner'
                            />
                        </div>

                        <div className={style.collectionInfoWrapper}>
                            <div className={style.collectionInfoContainer}>
                                <div className={style.collectionLogoContainer}>
                                    <Image
                                        className={style.collectionLogo}
                                        src={collection?.image_url}
                                        height={128}
                                        width={128}
                                        alt='logo'
                                    />
                                </div>

                                <div className={style.collectionInfo}>
                                    <div className={style.title}>{collection?.name}</div>

                                    <div className={style.creatorInfoContainer}>
                                        <div className={style.creator}>
                                            Created by{' '}
                                            <span className={style.creatorName}>
                        {collection?.creator}
                      </span>
                                        </div>
                                        <MdVerified className={style.verified} />
                                    </div>
                                </div>

                                <CollectionStats stats={collection?.stats} />

                                <div className={style.descriptionContainer}>
                                    {collection?.description}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Listings /> */}
                </div>
            </TopNavbarLayout>
        </div>
    )
}

```

3. Now go to pages and import home in index.js file

```jsx
import Main from '../components/Home'
```
4. And if there is an account connected load that very same main component so change it account to main

```jsx
return <>{address ? <Main /> : Auth()}</>
```
5. Now you can see some error like this in your page so just do this
```text
Module not found: Can't resolve '../../layouts/TopNavbarLayout'
4 | import { useAddress } from '@thirdweb-dev/react'
5 | import { MdVerified } from 'react-icons/md'
> 6 | import TopNavbarLayout from '../../layouts/TopNavbarLayout'
7 | import CollectionStats from './CollectionStats'
8 | import { collectionData } from '../../static/collections'
9 | // import Listings from './Listings'
```
* inside home folder go to index.js and comment out the ```import TopNavbarLayout from '../../layouts/TopNavbarLayout'``` 
* and now comment out TopNavbarLayout tag ```{/*<TopNavbarLayout>*/}``` like this you can check my commit also.(11 no commit)
6. Now connect metaMask you can see the design of the home page like this

 <p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/gif3.gif?raw=true"/>
        </p>

7. You're probably like whoa where did all this come from ? Basically this is part of that home index and all of that is set up it's getting static information so don't worry this isn't coming from third web It's just a placeholder.
8. I add some images like eth-logo , hero-banner.jpeg .....and so on in the public folder [Here](https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/tree/main/public)

### 10. Temporary Change The Footer Area and Change Some Color
1. You can see a folder styles go to global.css and add this code (temporary change)
```css
background: black;
```
2. Now go to Home inside Home folder you can see index.js file and add this to the style you can check my commit(12)


```jsx
title: `text-4xl font-bold text-white`, 
creator: `text-sm font-medium text-gray-500 text-white`,
```




