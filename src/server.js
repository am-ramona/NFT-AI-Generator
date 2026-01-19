const express = require("express")
const cors = require("cors")
const fetch = require("node-fetch")
const { PinataSDK } = require('pinata')
const path = require("path")
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});
const app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS']
}));
app.use(express.json())

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


app.get('/presigned_url', async (req, res) => {
    try {
        const pinata = new PinataSDK({
            pinataJwt: process.env.PINATA_JWT,
            pinataGateway: process.env.PINATA_GATEWAY_URL
        })

        const url = await pinata.upload.public.createSignedURL({
            expires: 60
        })

        console.log("url", url)

        res.status(200).json({ url })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to generate presigned URL" })
    }
})


app.listen(5050, () => {
    console.log("Server running on port 5050");
});
