

const { get_text } = require('../text-with-commands/text-with-commands.js')
const { use_commands } = require('../text-with-commands/use-commands.js');

async function getOutput(query) {
    try {
        const text = await get_text(query);
        const text_used_commands = await use_commands(text);

        console.log('text_used_commands', text_used_commands);

        htmlify = text_used_commands.replace(/\n/g, "</p><p>");  
        htmlify = htmlify.replace("[IMAGE: image.png]", "</p><img src='resources/image.png' alt='image'><p>");
        htmlify = htmlify.replace("[TTS: speech.wav]", "</p><audio controls><source src='resources/speech.wav' type='audio/wav'></audio><p>");
        queryResponse = `<div><p>${htmlify}</p></div>`;
        return queryResponse;
      
    } finally {
       // end
      
    }
} module.exports = { getOutput };
  
  