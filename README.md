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

***************************
<h1 align="center"> Together, we'll build a Innovative and Advanced Blockchain(web3) based project, I'll teach you how 😊👇 </h1>

<u> written by Subham 📜 </u> 

```Note: Always check commits with description 💥```

## Steps 👇



* [**0. Tools Used 🔨**](#tools-used-)
* [**1. Third web Login and Setup. 🕸️**](#1-third-web-login-and-setup)
* [**2.NFT mint (Using ThirdWeb) 🙈**](#2-nft-mint-using-thirdweb)
* [**3.Deploy in Marketplace(Using ThirdWeb) 🧑‍💻**](#3-deploy-in-marketplaceusing-thirdweb)
* [**4.Showcases List in Our Marketplace(Using ThirdWeb) 🚿**](#4-showcases-list-in-our-marketplaceusing-thirdweb)
* [**5.Create a component for connect our API ⚙️**](#5-create-a-component-for-connect-our-api)
* [**6.Connect Metamask Function Create and Check 🔮**](#6-connect-metamask-function-create-and-check)
* [**7.Ternary Statement Use ❓**](#7-ternary-statement-use)
* [**8.Style our object 🌃**](#8-style-our-object)
* [**9.Home Page Setup 🌈**](#9-home-page-setup)
* [**10. Temporary Change The Footer Area and Change Some Color 🔼**](#10-temporary-change-the-footer-area-and-change-some-color)
* [**11. Listing Page Setup 📃**](#11-listing-page-setup)
     * [11.1. getListings Setup and useEffect](#111-getlistings-setup-and-useeffect-address-as-an-array-format)
     * [11.2 Display Our NFTs(useState Setup & Style Object)](#112-display-our-nftsusestate-setup--style-object)

******************
## Tools Used 🛠️

- [**Next.js**](https://nextjs.org/) - Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications
- [**thirdweb**](https://thirdweb.com/) - Build web3 apps easily. Implement web3 features with powerful SDKs for developers. Drop NFTs with no code.
- [**Webstorm**](https://www.jetbrains.com/webstorm/) - WebStorm is an integrated development environment for JavaScript and related technologies. Like other JetBrains IDEs
- [**Infura**](https://infura.io/) - The world's most powerful suite of high availability blockchain APIs and developer tools
- [**Tailwind CSS**](https://tailwindcss.com/) -A utility-first CSS framework for rapidly building custom user interfaces
____________________________
*******************
### 1. Third web Login and Setup
Open the link and [click here](https://thirdweb.com/contracts) to see the third web dashboard and connect to the metamask wallet.

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
### 11. Listing Page Setup

#### 11.1 getListings Setup and useEffect (Address as an Array Format)


1. Inside components Open ```Home``` folder and create ```Listings.js ``` you can check my commit(13)  and add this basic syntax
```jsx
const Listings = () => {
  return (
      <div>
        LISTINGS
      </div>
  )
}
export default Listings;
```
2. Then go to index.js inside Home folder and add ```<Listings />``` tag (in my case i'm going to uncomment it) You can see Listing text top left corner of the footer part

3. Now create some Hook and use it in the Listings.js file you can check my commit(13)
```jsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
```
* import { useState, useEffect } from 'react'- useState -> to store the data and useEffect -> to fetch the data
* import Link from 'next/link' - Link -> to navigate to different page 
* import { useMarketplace } from '@thirdweb-dev/react' - useMarketplace -> to get the marketplace data from third web 
    * basically It's gonna allow us to get the marketplace we created and add it to our app and then we can use it to get the data from the marketplace.

4. Now in index.js file add this code If you add this and open your console in the browser you can see undefined because use marketplace is a hook that's gonna take in a contract address 
```jsx
    const marketplace = useMarketplace()
        console.log(marketplace)
```
5. So open your thirdweb marketplace website and copy the address [Click Here](https://thirdweb.com/rinkeby/marketplace)

 <p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-29 215358.png?raw=true"/>
        </p>

```note: don't copy my address ```

6. Now open your console you can see something like this now you can remove the  ```console.log(marketplace)```
```jsx
    const marketplace = useMarketplace("your address 🤙")
        console.log(marketplace)
```
<p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-29 220127.png?raw=true"/>
        </p>

7.We are gonna make getListing function and that's gonna grab the marketplace data and get the active listing (our cryptopunks NFTs) and store it in state
```jsx
    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            console.log(list)
             
        } catch (error) {
            console.error(error)
        }
    }

```
```try catch``` - catch is going to take in an error and if there is an error we're going to console that log there and then for the try ```const list = weight``` which means we're going to wait for this function or method to finish before moving on to the next step ```marketplace.getActiveListings()``` it's gonna be a method within marketplace. 

* **You know why we are gonna running the function?** 

   * This is just me creating the instructions but I haven't told my computer when to run that's where the ```useEffect``` is going to come in handy if you don't know it's a react hook that lets you perform side effects or functions at any point during the component's life cycle basically when do you want to run a function if you want to run a function when the component loads you can use effect for that.

8.   ```useEffect(() => {)``` as an argument it's going to take in two parameters so we're going to take in a anonymous function here that's the first one and this function is going to represent what do you want to do or again like what i said the side effect and for the side effect i'm going to call  ```getListings()``` if i'm calling getListings() i'm going to have a second parameter then  useEffect() which is this array ```[]``` this is called a dependency module basically it says when the page first loads run this and don't run it any other time.

```jsx
  useEffect(() => {
    getListings()
  }, [])
```

9. Let's see inspect element console logging list we got an array of eight now i can literally see each asset or each nft.If you can see all your NFTs that you minted.

<p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-29 232657.png?raw=true"/>
        </p>

#### 11.2 Display Our NFTs(useState Setup & Style Object)

1. How do we bring it outside and into our app ?
   
That's where the other comes in ```useState``` so lets set up our UseSets

const [] = useState([]) -> ```[]``` t's not a traditional like array that we're used to basically it's destructuring the array that comes from ```useState``` If you do console.log ```useState``` is going to show you an array undefined and a function. You can take those two things out by giving it a placeholder or name.

so I'm going to call that first item in the array listing and the function i'm going to give the name i'm going to call it set listing.
```jsx
const [listings, setListings] = useState([])
```
2. const [listings, setListings] = useState([]) - >```listings``` is undefined if you do console.log(listings) It will show you undefined in the console of the browser.

- Reasons undefined is because we didn't do something called initializing our state which is going to come here so if I say number ```4``` here look at that listings has the value of four I defined
```jsx
const [listings, setListings] = useState([4])
console.log(listings)
```
3. but I want the ```useState``` to be an empty array reason being is because the type that I'm expecting this to actually be is an empty array and when we map through something it wouldn't cause any errors if the array is empty.
So do this again
```jsx
const [listings, setListings] = useState([])
```
4. Listings is in an array now how do we set that listing we can do that by instead of console logging list here what if I use that function that I was talking about ```setListings``` so if you look it's no longer an empty array.

```jsx
    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            setListings(list)

        } catch (error) {
            console.error(error)
        }
    }
```
5. Style - conditional rendering
* Get started though is our style object we'll come to the top ```const style = {}``` const style is equal to object. Now first div is going to be ```style.wrapper```  like this  ```<div className={style.wrapper}>``` . 
* What i want to do with this wrapper is something like we did before, and it's going to be called **conditional rendering** because depending on the condition i'm going to render different jsx so basically ```if the listings.length``` is ```greater than zero``` if I ask you when is the ```listings.length``` zero ? when you look at this array  ```[]``` int this const..-> ```const [listings, setListings] = useState([])```  when it first loads we had the empty array. So what's the length of that it's gonna be zero. 
* When is the length greater than zero that's when ```useEffect``` runs our function and we load it with our seven(7 NFTs) listings 
* So basically what I'm saying is once we have our listings loaded in what do we wanna do ? a question mark ```?```  then jsx so temporarily i'll put a fragment ```<>  </>``` here and i'll say ```put listings here```  just for now 
* but once that's done I'll close off that parentheses and then I'll say if listings.length is zero then we can have this little loading ```<div>Loading...</div>``` screen 
* So which one do you think is loaded put listings here or loading and if you said put listings here you'd be correct that's because the listing loaded.

<p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-31 152551.png?raw=true"/>
        </p>

```jsx
    const style = {}
```

```jsx
    return (
        <div className={style.wrapper}>
            {listings.length > 0 ? (
                <>
                    put listing here !
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}
```

6. What i want to do is obviously make this a lot nicer we don't want this text ``` put listing here !```  what i want to do is 
* remove ``` put listing here !``` and replace ```listings?.map((listing, index) =>``` I want to make the return implied of an error function
* ```listings?.map``` if you don't know what map is it's going to iterate through an array ,and you can give each item in that array a name so I could call it item but really each item is a listing this is just the variable name and what I'm saying here is for every listing I'm going to make Nft card Component.
```jsx
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
```
**It'll be like this**

<p align="center">
        <img src="https://github.com/Subham-Maity/NftMarketPlace_Web3_dApp/blob/main/ImagesForCollection/Screenshot 2022-08-31 191106.png?raw=true"/>
        </p>

you can see total eight NFTs Card here text because we have eight NFTs in our array and for every item in the array I'm making NFT card.