<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">NFT AI Generator</h3>

  <p align="center">
   A Blockchain NFT Minting DApp with AI-generated assets and production-grade mint UX!
    <br />
    <a href="https://github.com/am-ramona/NFT-AI-Generator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/am-ramona/NFT-AI-Generator">View Demo</a>
    &middot;
    <!-- <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot; -->
    <a href="https://github.com/am-ramona/NFT-AI-Generator/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#why-this-project-matters">Why This Project Matters</a></li>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#architecture-overview">Architecture Overview</a></li>
        <li><a href="#example-workflow">Example Workflow</a></li>
        <li><a href="#what-i-learned">What I Learned</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
![Product Name Screen Shot][product-screenshot]
<!-- ![Product Architecture Screen Shot][architecture-screenshot] -->
<p>Full-stack production-grade Web3 dApp that lets users generate AI artwork and mint it as NFTs on Ethereum with a smooth, scalable, secure and user-friendly minting experience.

Built to demonstrate production-level Web3 architecture, wallet integration, and mint-flow UX optimization.</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Why This Project Matters

NFT minting UX is often slow, confusing, and error-prone.

This project explores how to:

• Simplify wallet interactions
• Reduce mint friction
• Improve transaction clarity
• Integrate AI asset generation with blockchain minting

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Key Features

• AI-generated NFT assets using Pollinations AI
• Smart contract minting with Solidity + Hardhat
• Wallet interaction via Ethers.js
• IPFS storage via Pinata
• Full-stack architecture (frontend + backend + smart contracts)
• Scalable minting workflow with clear user feedback

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![Javascript][javascript.com]][Javascript-url]
* [![Web3 UX flows][web3uxflows.js]][Web3UXFlows-url] 
* [![Solidity][Soliditylang.org]][Solidity-url]
* [![Hardhat][Hardhat.org]][Hardhat-url]
* [![Ethers.js][Ethers.io]][Ethers-url]
* [![Pinata][Pinata.cloud]][Pinata-url]
* [![Pollinations AI][Pollinations.ai]][Pollinations-url]
* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Architecture Overview

![Product Architecture Screen Shot][architecture-screenshot]

• Frontend → Smart Contract interaction
• Backend → IPFS + AI generation
• Wallet → Transaction signing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Example Workflow

1. User connects wallet
2. AI generates NFT image
3. Metadata uploaded to IPFS
4. Smart contract mints NFT
5. Transaction confirmation shown in UI
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### What I Learned

• Designing low-friction Web3 mint UX
• Handling async blockchain transactions
• Integrating AI + IPFS + Ethereum pipeline
• Structuring full-stack Web3 apps

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- Install [NodeJS](https://nodejs.org/en/)

### Installation

1. Clone/Download the Repository

2. Install Dependencies:
   ```sh
   npm install
   ```
3. Run tests
   ```sh
   $ npx hardhat test
   ```
4. Start Hardhat node
   ```js
   $ npx hardhat node
   ```
5. Run deployment script in a separate terminal execute:
   ```sh
   $ npx hardhat run ./scripts/deploy.js --network localhost
   ```
6. Start backend
   ```sh
   $ nodemon server.js
   ```
7. Start frontend
   ```sh
   $ npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
## Roadmap

<!-- - [x] Add Changelog -->
- [ ] Change message notifications for

    - [ ] Connect Wallet
    - [ ] Form inputs ( name and Description || Prompt )
- [ ] Gas optimization strategies
- [ ] Multi-chain minting (Polygon / zkSync)
- [ ] Batch minting
- [ ] Improved error handling

See the [open issues](https://github.com/am-ramona/NFT-AI-Generator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
<!-- ## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
<!-- ## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[product-screenshot]: src/assets/images/ai-nft-generator.png
[architecture-screenshot]: src/assets/images/Miro_design-architecture.png

[React.js]: https://img.shields.io/badge/React%20-%20Frontend%20Framework-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[web3uxflows.js]: https://img.shields.io/badge/UX-8A2BE2?style=for-the-badge&logo=ux&logoColor=61DAFB&label=Web3%20UX%20flows
[Web3UXFlows-url]: https://coinbound.io/web3-ux-design-guide/
[Javascript.com]: https://img.shields.io/badge/JavaScript-React%20and%20Testing-F7DF1E?style=for-the-badge&logo=javascript
[Javascript-url]: https://javascript.com
[Hardhat.org]: https://img.shields.io/badge/Hardhat%20-%20Development%20Framework-8C8C8C?style=for-the-badge&logo=hardhat
[hardhat-url]: https://hardhat.org/
[Ethers.io]:  https://img.shields.io/badge/Ethers.js%20-%20Blockchain%20Interaction-2B2B2B?style=for-the-badge&logo=ethers
[Ethers-url]: https://docs.ethers.io/v5/
[Soliditylang.org]: https://img.shields.io/badge/Solidity%20-%20Smart%20Contracts-3DDC84?style=for-the-badge&logo=solidity
[Solidity-url]: https://soliditylang.org/
[Pinata.cloud]:  https://img.shields.io/badge/Pinata%20-%20IPFS-4A90E2?style=for-the-badge&logo=ipfs
[Pinata-url]: https://pinata.cloud/
[Pollinations.ai]: https://img.shields.io/badge/Pollinations%20AI%20-%20AI%20Models-6A5ACD?style=for-the-badge&logo=ai
[Pollinations-url]: https://pollinations.ai/
[Node.js]: https://img.shields.io/badge/Node-Server-58a846?style=for-the-badge&logo=node.js&logoColor=58a846
[Node-url]: https://nodejs.org/


<!-- # NFT-AI-Generator

Production-grade Web3 dApp that lets users generate AI artwork and mint it as NFTs with a smooth, secure minting experience.

---

## 🚀 Live Demo
👉 <add-demo-link-here>

---

## ✨ Features

• AI-generated NFT assets  
• Production-grade mint UX with wallet connection  
• Gas estimation & transaction status handling  
• Secure smart-contract interaction  
• Responsive UI with loading/error states  
• Clean architecture ready for scaling  

---

## 🛠 Tech Stack

Frontend  
• Next.js • React • TypeScript • TailwindCSS  

Web3  
• Wagmi • Viem / Ethers.js • WalletConnect • SIWE  

Smart Contracts  
• Solidity • Hardhat • OpenZeppelin  

Backend / Infra  
• Node.js APIs  
• IPFS / NFT metadata storage  
• CI/CD ready  

---

## 🧠 Architecture Highlights

• Optimized RPC calls and error handling  
• Modular smart-contract interaction layer  
• Component-driven UI design  
• Secure environment variable handling  
• Ready for multi-chain expansion  

---

## 📦 Setup

```bash
git clone https://github.com/am-ramona/NFT-AI-Generator
cd NFT-AI-Generator
npm install
cp .env.example .env
npm run dev -->
