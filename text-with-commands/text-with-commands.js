const { generateText } = require('../generators/text-generator.js');
const fs = require('fs');

async function get_text(query) {
    try {
        const prompt = fs.readFileSync('text-with-commands/prompts/answer-with-commands.txt', 'utf8');
        const userQuery = prompt.replace('${query}', query);
        const out = await generateText(userQuery);
        const answer = out.replace(userQuery, '').trim(); 
        return answer;
    } catch (error) {
        console.error('Error occurred:', error);
        return query;
    }
}

module.exports = { get_text };
