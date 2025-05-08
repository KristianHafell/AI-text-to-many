# Everything Bot

## Overview
The Everything Bot is a multi-functional chatbot designed to handle a variety of tasks, including text generation, text-to-speech conversion, and image generation. It leverages the Hugging Face Inference API to provide advanced AI capabilities, making it a versatile tool for creative and practical applications.

## Features
- **Text Generation**: Generate creative or informative text responses using AI models.
- **Text-to-Speech (TTS)**: Convert text into speech and save it as an audio file.
- **Image Generation**: Create images based on textual descriptions.
- **HTML Output**: Render responses in a user-friendly HTML format, including embedded images and audio.

## Project Structure
```
package.json
README.md
server.js
generators/
    text-generator.js
    text-to-image.js
    text-to-speech.js
public/
    index.css
    index.html
    resources/
        image.png
        speech.wav
search/
    main-output.js
text-with-stuff/
    text-with-stuff.js
    use-commands.js
    prompts/
        answer-with-stuff.txt
```

### Key Files
- **server.js**: Entry point for the server.
- **generators/**: Contains modules for text, image, and speech generation.
- **public/**: Static files for the web interface, including CSS and HTML.
- **search/main-output.js**: Handles the main logic for processing user queries and generating responses.
- **text-with-stuff/**: Contains logic for handling prompts and commands.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd everything-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Hugging Face API token:
     ```
     HF_TOKEN=your_huggingface_api_token
     ```

## Usage
1. Start the server:
   ```bash
   node server.js
   ```
2. Open `public/index.html` in your browser to interact with the bot.
3. Enter a query in the text area and click "Send" to receive a response.

## Examples
- **Generate an image**:
  Input: `Can you make an image of a cat?`
  Output: Displays an image of a cat.

- **Text-to-Speech**:
  Input: `Can you read this for me? Goodbye!`
  Output: Plays an audio clip saying "Goodbye!"

- **Text Generation**:
  Input: `What is the capital of France?`
  Output: "The capital of France is Paris."

## Dependencies
- [Hugging Face Inference API](https://huggingface.co/inference-api)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [dotenv](https://github.com/motdotla/dotenv)
