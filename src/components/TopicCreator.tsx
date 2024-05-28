"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TopicCreator = () => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="mt-20 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          className="bg-white min-w-64"
          placeholder="inter topic here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default TopicCreator;
