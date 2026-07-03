"use client";

import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button title="Click me" onClick={() => console.log("clicked")} />
    </div>
  );
}
