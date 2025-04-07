import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-12">
      <h2 className="text-2xl text-orange-500 font-bold animate-bounce">
        おいしい投稿を料理中...　🍴
      </h2>
      <div className="flex justify-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-orange-200 animate-bounce delay-0"></div>
        <div className="w-3 h-3 rounded-full bg-orange-400 animate-bounce delay-150"></div>
        <div className="w-3 h-3 rounded-full bg-orange-600 animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
