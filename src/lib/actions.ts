"use server";

import { redirect } from "next/navigation";
import { redis } from "./redis";

export const createTopic = async ({ topicName }: { topicName: string }) => {
  const regex = /^[a-z-A-z-]+$/;

  if (!topicName || topicName.length > 50) {
    return { error: "Name must be between 1 and 50 characters" };
  }

  if (!regex.test(topicName)) {
    return { error: "Name can only contain letters and hyphens" };
  }

  await redis.sadd("existing-topics", topicName);

  redirect(`/${topicName}`);
};
