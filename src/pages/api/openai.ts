import { NextApiRequest, NextApiResponse } from "next";
import { Content } from "next/font/google";
import { Configuration, OpenAIApi } from "openai";


const OPENAI_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
){
  const completion = await openai.createChatCompletion({
    model:'gpt-3.5-turbo',
    messages:[{
      role:'user',
      content: 'Hello',
    }
    ]
  });
  const response = completion.data.choices[0].message?.content;
  res.status(200).json({response});
}

