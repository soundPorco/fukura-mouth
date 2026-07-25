import OpenAI from "openai";
import { NextResponse } from "next/server";

// clientというOpenAIと通信するためのオブジェクト
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    // requestはPOST通信の内容を受け取るための引数、ブラウザから送られてきたデータが入る
    // POST通信が来たら、、、
    const body = await request.json(); // requestの中身をjson形式で取得する

    // OpenAIのAPIを使って、文章を膨らませる処理
    const response = await client.responses.create({
        model: "gpt-5-mini",
        input: `
            以下の文章を自然に膨らませてください。ただし以下のルールを守ってください。

            - 元の文章の雰囲気を保つ
            - 新しい事実は作らない
            - 自然な日本語で書く
            - 文字数は2倍程度に増やす


${body.text}
`,
    });

    return NextResponse.json({
        result: response.output_text, // 上記のメッセージをブラウザに返す
    }); //上記のメッセージをブラウザに返す
}
