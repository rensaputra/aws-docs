import React from "react";
import type { ReactNode } from "react";

export default function ImageRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-4">
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}
