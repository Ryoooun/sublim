"use client";

import { useRouter } from "next/navigation";

export default function page(params) {
  const router = useRouter();
  router.push("/");
}
