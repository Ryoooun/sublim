import { Suspense } from "react";

export default function TrendLayout({ children }) {
  return (
    <>
      <Suspense fallback={<h1>loading trend page</h1>}>{children}</Suspense>
    </>
  );
}
