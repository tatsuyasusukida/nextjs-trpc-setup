import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const postRouter = router({
  get: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query((opt) => {
      return {
        id: opt.input.id,
        content: "content",
        userId: opt.ctx.session.userId,
      };
    }),
});
