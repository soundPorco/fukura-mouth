"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

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
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md">
                膨らます
            </button>
        </main>
    );
}
