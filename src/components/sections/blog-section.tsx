"use client";

import { NewsCards } from "../blocks/news-cards";
import { useState } from "react";

export default function BlogSection() {
  const [enableAnimations, setEnableAnimations] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <NewsCards
          enableAnimations={enableAnimations}
        />
      </div>
    </div>
  );
} 