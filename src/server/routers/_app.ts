import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { postRouter } from "./post";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async (opts) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  post: postRouter,
});

export type AppRouter = typeof appRouter;
