"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useState } from "react";

type ClientPage = {
  topicName: string;
  initialData: { text: string; value: number }[];
};

const ClientPage = ({ topicName, initialData }: ClientPage) => {
  const [words, setWords] = useState(initialData);
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-grid-zinc-50 pb-20">
      <MaxWidthWrapper className="flex flex-col items-center gap-6 pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-center -tracking-tight text-balance">
          What people think about{" "}
          <span className="text-blue-600">{topicName}</span>
        </h1>
      </MaxWidthWrapper>
    </div>
  );
};

export default ClientPage;
