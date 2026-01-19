import { useState, useEffect } from 'react';
import { NFTStorage, File } from 'nft.storage'
// import { Buffer } from 'buffer';
import { ethers } from 'ethers';

import { PinataSDK } from 'pinata'

// Components
import Spinner from 'react-bootstrap/Spinner';
import Navigation from './components/Navigation';

// ABIs
import NFT from './abis/NFT.json'

// Config
import config from './config.json';

const pinata = new PinataSDK({
  pinataJwt: "",
  pinataGateway: process.env.PINATA_GATEWAY_URL
})


console.log("process.env.PINATA_GATEWAY_URL",  process.env.PINATA_GATEWAY_URL)
function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [url, setURL] = useState(null)

  const [message, setMessage] = useState("")
  const [isWaiting, setIsWaiting] = useState(false)

    // Convert blob URL to base64
  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const loadBlockchainData = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask")
      return
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' })

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
    setProvider(provider)

    console.log('provider', provider)

    const network = await provider.getNetwork()

    console.log('network', network)

    if (!config[network.chainId]) {
      alert(`Unsupported network: ${network.chainId}, please connect to the Hardhat network`)
      return
    }

    const nft = new ethers.Contract(
      config[network.chainId].nft.address,
      NFT,
      provider
    )
    setNFT(nft)

    /* --- test if Smart Contract is deployed. --- */
    // const name = await nft.name()
    // console.log('name', name) 

  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (name === "" || description === "") {
      window.alert("Please provide a name and description")
      return
    }

    setIsWaiting(true)

    // Call AI API to generate a image based on description
    const imageData = await createImage()

    // Upload image to IPFS (NFT.Storage)
    const url = await uploadImage(imageData)

    // Mint NFT
    await mintImage(url)

    setIsWaiting(false)
    setMessage("")
  }

  const createImage = async () => {
    setMessage("Generating Image...");

    const prompt = `${name} ${description}`;

    try {
      const response = await fetch(
        `http://localhost:5050/api/generate-image?prompt=${encodeURIComponent(
          prompt
        )}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Convert response to blob
      const blob = await response.blob();
      // Create a temporary URL to display
      const url = URL.createObjectURL(blob);
      setImage(url);
      return url;
    } catch (err) {
      console.error("Fetch error:", err);
      // setError("Failed to generate image. Check console for details.");
    } finally {
      setIsWaiting(false);
    }

  }

  console.log("process.env.REACT_SERVER_URL", process.env.REACT_SERVER_URL)

  const uploadImage = async (imageData) => {
    setMessage("Uploading Image...")

  //   // Create instance to NFT.Storage
  //   const nftstorage = new NFTStorage({
  //     token: process.env.REACT_APP_NFT_STORAGE_API_KEY?.replace(/"/g, "").trim(),
  //   });
  //   console.log("NFTStorage store:", typeof nftstorage.store);

  //    try {
  //   const res = await fetch("http://localhost:5050/api/upload-nft", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ imageData, name, description }),
  //   });

  //   const data = await res.json();
  //   if (!res.ok) throw new Error(data.error || "Upload failed");

  //   console.log("NFT CID:", data.ipnft);
  //   console.log("Metadata URL:", data.url);
  //   return data;
  // } catch (err) {
  //   console.error("Upload error:", err);
  //   alert("Failed to upload NFT: " + err.message);
  // }

    // // Send request to store image
    // const { ipnft } = await nftstorage.store({
    //   image: new File([imageData], "image.jpeg", { type: "image/jpeg" }),
    //   name: name,
    //   description: description,
    // })

    //   if (!imageData) return

    // try {
    //   // setUploadStatus('Getting upload URL...')
    //   const urlResponse = await fetch(`http://localhost:5050/presigned_url`, {
    //     method: "GET",
    //     headers: {
    //       // Handle your own server authorization here
    //     }
    //   })
    //   const data = await urlResponse.json()

    //   // setUploadStatus('Uploading file...')

    //   const upload = await pinata.upload.public
    //     .file(imageData)
    //     .url(data.url)

    //   if (upload.cid) {
    //     // setUploadStatus('File uploaded successfully!')
    //     const ipfsLink = await pinata.gateways.public.convert(upload.cid)
    //     // setLink(ipfsLink)
    //   } else {
    //     // setUploadStatus('Upload failed')
    //   }
    // } catch (error) {
    //   // setUploadStatus(`Error: ${error instanceof Error ? error.message : String(error)}`)
    // }

if (!imageData) return;

  try {
    // 1️⃣ Get presigned URL from your server
    const urlResponse = await fetch("http://localhost:5050/presigned_url");
    const { url: presignedUrl } = await urlResponse.json();

    // 2️⃣ Convert base64 / dataURL to Blob
    const blob = await (await fetch(imageData)).blob();
console.log("presignedUrl", presignedUrl)

const formData = new FormData();
formData.append("file", blob, "image.jpeg"); 
    // 3️⃣ Upload the image via fetch POST
    const uploadResponse = await fetch(presignedUrl, {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data" // adjust if PNG
      // }
    });

    if (!uploadResponse.ok) {
      throw new Error(`Upload failed: ${uploadResponse.statusText}`);
    }

    console.log("Upload successful!");

    // 4️⃣ Generate a permanent gateway URL for NFT metadata
    // You can extract the CID from the presigned URL
    const urlObj = new URL(presignedUrl);
    const cid = urlObj.pathname.split("/")[3]; // example: /v3/files/<CID>
    const ipfsLink = `https://gateway.pinata.cloud/ipfs/${cid}`;
    console.log('ipfsLink', ipfsLink)

    setURL(ipfsLink);
    return ipfsLink;
  } catch (err) {
    console.error(err);
    console.log(`Upload failed: ${err.message}`);
  }


    // Save the URL
    // const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
    // setURL(url)

    // return url
  }

  const mintImage = async (tokenURI) => {
    setMessage("Waiting for Mint...")

    const signer = await provider.getSigner()
    const transaction = await nft.connect(signer).mint(tokenURI, { value: ethers.utils.parseUnits("1", "ether") })
    await transaction.wait()
  }

  useEffect(() => {
    if (account) {
      loadBlockchainData()
    }

    console.log('account', account)

    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })

      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners()
      }
    }
  }, [account])

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />

      <div className='form'>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Create a name..." onChange={(e) => { setName(e.target.value) }} />
          <input type="text" placeholder="Create a description..." onChange={(e) => setDescription(e.target.value)} />
          <input type="submit" value="Create & Mint" />
        </form>

        <div className="image">
          {!isWaiting && image ? (
            <img src={image} alt="AI generation" />
          ) : isWaiting ? (
            <div className="image__placeholder">
              <Spinner animation="border" />
              <p>{message}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {!isWaiting && url && (
        <p>
          View&nbsp;<a href={url} target="_blank" referrerPolicy="no-referrer">Metadata</a>
        </p>
      )}
    </div>
  );
}

export default App;