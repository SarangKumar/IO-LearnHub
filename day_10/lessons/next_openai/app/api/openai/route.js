import { NextResponse } from "next/server";
// import { OpenAI } from "openai";

// const openai = new OpenAI("your-api-key");

// async function generatePrompts(engine, prompt) {
// 	const response = await openai.createCompletion({
// 		engine: engine,
// 		prompt: prompt,
// 		max_tokens: 1024,
// 		temperature: 0.5,
// 	});

// 	return response.choices[0].text.trim();
// }

export async function POST(req, res){
    try{
        await const { query } = req.body;
        // console.log(JSON.parse(req.body))
        const response = {
            prompt: query,
        };
        console.log(response)
        
        const prompt = `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.`
        return NextResponse.json({response})
    } catch(error){
        return NextResponse.json({error})

    }
}