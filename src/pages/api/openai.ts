import { Configuration, OpenAIApi} from "openai";
import { NextApiRequest, NextApiResponse } from "next";


const api = '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'
const configuration = new Configuration({
  apiKey:api,
});

if (!configuration.apiKey) {
  throw new Error("No OPENAI_API_KEY environment variable found");
}

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  console.log("req.body", req.body.messages)
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: req.body.messages,
  })
  console.log("req.body", req.body.messages)
  res.status(200).json({result: completion.data})
} 