"use client"; //client componentとして扱うための宣言

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    // ユーザーの入力値を保持するためのstate
    const [inputValue, setInputValue] = useState("");
    // APIからのレスポンスを保持するためのstate
    const [result, setResult] = useState("");

    // APIルートの実験用関数
    const handleClick = async () => {
        const response = await fetch("/api/generate", {
            method: "POST", // POST通信を行う
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: inputValue }), // 入力値をJSON形式で送信
        });

        const data = await response.json();
        setResult(data.result); // APIのレスポンスをresultに格納

        console.log("APIからのレスポンス:", data.result); // APIからの結果をコンソールに表示
    };

    return (
        <main className="flex flex-col gap-4 min-h-screen items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-pink-500">ふくらマウス</h1>
            <Image
                src="/rip-img1.jpeg"
                alt="口の画像"
                width={300}
                height={300}
            />
            <textarea
                placeholder="入力してください"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 w-[80%] rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md"
                // onClick={() => {
                //     setInputValue("");
                //     // ここに膨らます処理を追加する
                //     console.log("膨らますボタンがクリックされました");
                // }}
                onClick={handleClick}
            >
                膨らます
            </button>
        </main>
    );
}
