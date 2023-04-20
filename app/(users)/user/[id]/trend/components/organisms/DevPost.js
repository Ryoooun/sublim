import { NextResponse } from "next/server";

export async function DevPost(params) {
  console.time("dev");
  const url = "https://dev.to/api/articles?";
  const res = await fetch(`${url}?top=7`, {
    next: {
      revalidate: 86400,
    },
  }).catch((err) => console.error(err));
  const data = await res.json();
  console.timeEnd("dev");

  return NextResponse.json(data);
}
