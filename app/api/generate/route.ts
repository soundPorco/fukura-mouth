import { NextResponse } from "next/server";

export async function POST() {
    // POST通信が来たら、、、
    return NextResponse.json({
        message: "API動いてます！",
    }); //上記のメッセージをブラウザに返す
}
