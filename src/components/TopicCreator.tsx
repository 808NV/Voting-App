"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTopic } from "@/lib/actions";

const TopicCreator = () => {
  const [input, setInput] = useState("");

  const { mutate, error, isPending } = useMutation({ mutationFn: createTopic });

  return (
    <div className="mt-20 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          className="bg-white min-w-64"
          placeholder="inter topic here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          disabled={isPending}
          onClick={() => mutate({ topicName: input })}
        >
          Create
        </Button>
      </div>

      {error ? <p className="text-sm text-red-600">{error.message}</p> : null}
    </div>
  );
};

export default TopicCreator;
