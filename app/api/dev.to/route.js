import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request, response) {
  console.time("devTo");
  const url = "https://dev.to/api/articles?";
  const res = await axios.get(`${url}?top=7`);
  const result = await res.data;
  console.timeEnd("devTo");
  return NextResponse.json(result);
}
