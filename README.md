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