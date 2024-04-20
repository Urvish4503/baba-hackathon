import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyBzzInLBsy3CiexwjmYBsZ_f8ZlqD3y49o");

export const run = async  ({promt}:{promt:string})=>
 { // For text-only input, use the gemini-pro model

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const prompt = `give me twenty five multiple choice question of below paragraph in json object:${promt} `

const result = await model.generateContent (prompt);

const response = await result.response;

const text = response.text();

console.log(text);
return text

}

// run();