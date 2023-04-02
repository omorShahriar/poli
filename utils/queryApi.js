import { openai } from "./openai";
export const generateAnswer = async (prompt) => {
  const res = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.1,
      max_tokens: 1000,
    })
    .then((res) => res.data.choices[0].text)
    .catch((error) => `sorry can't help you at this moment! ${error.message}`);

  return res;
};
