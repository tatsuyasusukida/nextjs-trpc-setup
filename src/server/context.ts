import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = { userId: "userId" };
  return { session };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
