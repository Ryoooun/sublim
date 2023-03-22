import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  return NextResponse.json({ data });
}
