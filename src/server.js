const express = require("express");
const cors = require("cors");
const axios = require("axios");// for process.env.HUGGING_FACE_API_KEY
const { NFTStorage, File } = require("nft.storage");
const { PinataSDK } = require('pinata');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','OPTIONS']
}));
app.use(express.json());

const fs = require("fs");
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env") // adjust path to your .env
});
const fetch = require("node-fetch");


const client = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_API_KEY?.trim() });
app.get("/api/generate-image", async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
    }

    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
    )}?width=1024&height=1024&seed=42`;

    try {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();

        res.set("Content-Type", "image/png");
        res.send(Buffer.from(buffer));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to generate image" });
    }
});

// app.post("/api/upload-nft", async (req, res) => {
//     const { imageData, name, description } = req.body;

//     if (!imageData || !name || !description) {
//         return res.status(400).json({ error: "Missing image, name, or description" });
//     }

//     try {
//         // Convert base64 string to Blob
//         let base64Data;
//         if (imageData.startsWith("data:")) {
//             base64Data = imageData.split(",")[1]; // remove data:image/png;base64,
//         } else {
//             base64Data = imageData; // if plain base64
//         }

//         const buffer = Buffer.from(base64Data, "base64");
//         const file = new File([buffer], "image.jpeg", { type: "image/jpeg" });

//         // Upload to NFT.Storage
//         const metadata = await client.store({
//             image: file,
//             name,
//             description,
//         });

//         // Return IPFS CID and metadata URL
//         res.json({
//             ipnft: metadata.ipnft,
//             url: metadata.url,
//         });
//     } catch (err) {
//         console.error("NFT.Storage error:", err);
//         res.status(500).json({ error: "Failed to upload to NFT.Storage" });
//     }
// });

app.get('/presigned_url', async (req, res) => {
  try {
    const pinata = new PinataSDK({
      pinataJwt: process.env.PINATA_JWT,
      pinataGateway: process.env.PINATA_GATEWAY_URL
    })

    const url = await pinata.upload.public.createSignedURL({
      expires: 60 // seconds
    })

    console.log("url", url)

    res.status(200).json({ url }) // ✅ Express response
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to generate presigned URL" })
  }
})

app.listen(5050, () => {
    console.log("Server running on port 5050");
});
