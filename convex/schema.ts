import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  gameTable: defineTable({
    code: v.string(),
    players: v.array(v.id("playerTable")),
    leaderboard: v.array(
      v.object({
        playerId: v.id("playerTable"),
        cows: v.number(),
        burgers: v.number(),
      })
    ),
  }),

  playerTable: defineTable({
    name: v.string(),
    avatar: v.string(),
    cows: v.number(),
    burgers: v.number(),
    roadPoints: v.number(),
  }),

  roadHazardLog: defineTable({
    gameId: v.id("gameTable"),
    playerId: v.id("playerTable"),
    timestamp: v.number(),
    hazardType: v.string(),
    pointChange: v.number(),
    message: v.string(),
  }),

  myCowsLog: defineTable({
    gameId: v.id("gameTable"),
    playerId: v.id("playerTable"),
    timestamp: v.number(),
    actionType: v.string(),
    cowChange: v.number(),
    burgerChange: v.number(),
    message: v.string(),
  }),
});
