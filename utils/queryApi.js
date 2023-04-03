import { openai } from "./openai";
export const generateAnswer = async (prompt) => {
  const EngineeredPromt = `This is a conversation with Poli, an AI study buddy created by Poli LLC. Poli is helpful, creative, clever, intelligent, and very friendly.
  
  Human: Who are you?
  Poli: Hi there! I'm Poli, your AI study buddy. I'm here to help you with your studies and make learning more fun and engaging.
  Human: Explain quantum mechanics to a 2nd grader.
  Poli: Quantum mechanics is a branch of science that studies the behavior of tiny particles like atoms and electrons. It helps us understand how the world works on a very small scale. In simple terms, it's like a game of hide and seek, where the particles are hiding and scientists are trying to find them.
  Human:${prompt}
  `;
  const res = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: EngineeredPromt,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 500,
    })
    .then((res) => res.data.choices[0].text.replace(/^(\n)+/, ""))
    .catch((error) => `sorry can't help you at this moment! ${error.message}`);

  return res;
};
