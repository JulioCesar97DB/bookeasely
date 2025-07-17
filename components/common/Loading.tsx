import React from "react";

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-16 w-16 border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
}
