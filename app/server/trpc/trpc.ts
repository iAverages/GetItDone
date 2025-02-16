import { initTRPC } from "@trpc/server";

import { TRPCError } from "@trpc/server";
import type { Context } from "./context";
//import superjson from "superjson";
import { z } from "zod";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
export const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

// export const t = initTRPC.context<Context>().create({
//   //transformer: superjson,
//   errorFormatter({ shape }) {
//     return shape;
//   },
// });

// export const authedProcedure = t.procedure.use(({ ctx, next }) => {
//   if (!ctx.session || !ctx.session.user) {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }
//   return next({
//     ctx: {
//       ...ctx,
//       // infers that `session` is non-nullable to downstream resolvers
//       session: { ...ctx.session, user: ctx.session.user },
//     },
//   });
// });

// export const userNoteProcedure = t.procedure
//   .input(z.object({ noteId: z.string() }))
//   .use(async ({ ctx, next, input }) => {
//     if (!ctx.session || !ctx.session.user) {
//       throw new TRPCError({ code: "UNAUTHORIZED" });
//     }
//     const note = await ctx.prisma.notes.findUnique({
//       where: {
//         id: input.noteId,
//       },
//     });
//     if (!note) {
//       throw new TRPCError({ code: "NOT_FOUND" });
//     }
//     if (note.userId !== ctx.session.user.id) {
//       throw new TRPCError({ code: "UNAUTHORIZED" });
//     }
//     return next();
//   });
