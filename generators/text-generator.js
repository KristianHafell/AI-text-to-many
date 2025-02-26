const axios = require('axios');
require('dotenv').config();

async function generateText(query, model = "google/gemma-2-9b-it") {
    try {
        const response = await axios.post(`https://api-inference.huggingface.co/models/${model}`, {
            inputs: query
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.HF_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        // Extract generated text from the response
        const generatedText = response.data[0].generated_text;

        return generatedText.replace(query, '').trim();

    } catch (error) {
        console.error('Error generating text:', error);
    }
} module.exports = { generateText };

if (require.main === module) {
    generateText("can you write a haiku of a cat?").then(console.log);
}
