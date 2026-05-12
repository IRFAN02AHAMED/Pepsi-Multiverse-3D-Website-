import { Suspense } from "react";
import ViewerClient from "./ViewerClient";

export default function ViewerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="font-technical-label text-tertiary animate-pulse tracking-widest">
            LOADING DIMENSION...
          </div>
        </div>
      }
    >
      <ViewerClient />
    </Suspense>
  );
}
