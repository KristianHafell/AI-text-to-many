const fs = require('fs');
const axios = require('axios');

require('dotenv').config();

// Function to generate an image and save it locally
async function generateImage(query) {
    const url = 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2';

    try {
        // Make the request to Hugging Face Inference API
        console.log('Make image: ' + query);
        const response = await axios.post(url, {
            inputs: query,
            parameters: {
                negative_prompt: "blurry",  // You can customize this based on your requirements
            }
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.HF_TOKEN}`,
                'Content-Type': 'application/json',
            },
            responseType: 'arraybuffer',  // To handle binary image response
        });

        // Get image data from response
        const imageBuffer = response.data;

        // Specify the path to save the image
        const savePath = 'public/resources/image.png';

        // Save the image to the file system
        fs.writeFileSync(savePath, imageBuffer);

        console.log(`Image saved to ${savePath}`);
    } catch (error) {
        console.error('Error generating image:', error);
    }
} module.exports = { generateImage };

if (require.main === module) {
    generateImage("a photo of a bird");
}
