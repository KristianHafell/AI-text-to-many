const { generateImage } = require('../generators/text-to-image.js');
const { textToSpeech } = require('../generators/text-to-speech.js');

async function use_commands(text) {
    try {
        if (text.includes('[IMAGE:')) {
            const image_query = text.split('[IMAGE:')[1].split(']')[0];
            await generateImage(image_query);
            text = text.replace('[IMAGE:' + image_query + ']', '[IMAGE: image.png]')
        }
        if (text.includes('[TTS:')) {
            const tts_query = text.split('[TTS:')[1].split(']')[0];
            await textToSpeech(tts_query);
            text = text.replace('[TTS:' + tts_query + ']', '[TTS: speech.wav]')
        }
        return text
    } catch (error) {
        console.error('Error using commands:', error);
        return text;
    }

} module.exports = { use_commands };