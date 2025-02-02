import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  games: defineTable({
    code: v.string(),
    players: v.array(v.string()), // Assuming player IDs are stored as strings
    leaderboard: v.array(v.string()), // Assuming leaderboard stores player IDs or scores as strings
  }),

  events: defineTable({
    gameId: v.id("games"), // Fix reference type
    timestamp: v.number(),
    message: v.string(),
  }),

  players: defineTable({
    name: v.string(),
    avatar: v.string(),
    cows: v.number(),
    burgers: v.number(),
    gameId: v.id("games"), // Fix reference type
  }),
});
