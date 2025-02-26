const fs = require('fs');
const { HfInference } = require('@huggingface/inference');

require('dotenv').config();

const hf = new HfInference(process.env.HF_TOKEN);

// Text to speech function
async function textToSpeech(text, model = "facebook/mms-tts-eng") {
    try {
        const response = await hf.textToSpeech({
            model,
            inputs: text,
        });

        // Save the output as a WAV file
        const outputPath = "public/resources/speech.wav";
        fs.writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));

        console.log(`Audio saved to ${outputPath}`);
    } catch (error) {
        console.error("Error:", error);
    }
} module.exports = { textToSpeech };

if (require.main === module) {
    textToSpeech("Hello, this is a test of the Hugging Face TTS model.");
}