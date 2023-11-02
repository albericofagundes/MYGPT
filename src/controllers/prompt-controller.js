const InputPrompt = require("../models/input.prompt");
const openai = require("../configs/openai");

module.exports = {
  async sendText(req, res) {
    // Remova a chamada para openai.configuration() e use diretamente a instância openai

    // const inputModel = new InputPrompt(req.body);    // const inputModel = "Hello there"
    const { prompt } = req.body; // Assumindo que o prompt é enviado no corpo da solicitação
    console.log("prompt",prompt);

    try {
      const response = await openai.textCompletion(prompt);

    //   console.log("response",response);

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content,
      });
    } catch (error) {
        // console.log("error",error);
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : "There was an issue on the server",
      });
    }
  },
};
