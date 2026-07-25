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
    return NextResponse.json({
        request: body.text, // 上記のメッセージをブラウザに返す
    }); //上記のメッセージをブラウザに返す
}
