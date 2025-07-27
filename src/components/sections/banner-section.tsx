"use client";

import { NewsCards } from "../blocks/news-cards";
import { useState } from "react";

export default function BannerSection() {
  const [enableAnimations, setEnableAnimations] = useState<boolean>(true);

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-48 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Banner+1')" }}>
            <span className="text-white text-lg font-bold">Banner 1</span>
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Banner+2')" }}>
            <span className="text-white text-lg font-bold">Banner 2</span>
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center bg-cover bg-center hidden sm:hidden md:block" style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Banner+3')" }}>
            <span className="text-white text-lg font-bold">Banner 3</span>
          </div>
          <div className="bg-gray-300 h-48 flex items-center justify-center bg-cover bg-center hidden sm:hidden md:block" style={{ backgroundImage: "url('https://via.placeholder.com/300x200?text=Banner+4')" }}>
            <span className="text-white text-lg font-bold">Banner 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}