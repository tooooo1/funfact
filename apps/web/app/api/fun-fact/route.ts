import { NextResponse } from "next/server";

export async function GET() {
  const fact = {
    fact: "Did you know? Honey never spoils.",
  };

  return NextResponse.json(fact);
}
