const { Configuration, OpenAIApi } = require("openai");

const openApi = class openai {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });
  }

  static textCompletion() {
    return {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    };
  }
};

module.exports = openApi;
