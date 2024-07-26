# React Chatbot

A simple React chatbot that answers predefined questions with exact matches. It provides an option to start a live chat via email if the question is not recognized.

## Features

- **Exact Question Matching**: Answers only if the question matches a predefined one exactly.
- **Live Chat Option**: Redirects to email support if no match is found.
- **Simple UI**: Clean and user-friendly interface.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/react-chatbot.git
   cd Javascript_Chatbot

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Server**

   ```bash
   npm start
   ```

## Usage

- **Ask Questions**: Type a predefined question and press `Enter` or click `Send`.
- **Live Chat**: Follow the email link if the chatbot doesn't recognize your question.

## Supported Questions

- "What is your name?"
- "How can you help me?"
- "What is JavaScript?"
- "What is a chatbot?"

## Customization

- **Add Questions**: Update the `qaPairs` array in `Chatbot.js`.
- **Change Email**: Update the mailto link in `Chatbot.js`.
- **Styling**: Edit `Chatbot.css` and `App.css`.


