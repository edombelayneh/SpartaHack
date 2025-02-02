import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createGame = mutation({
  args: {},
  handler: async ({ db }) => {
    const gameCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const gameId = await db.insert("gameTable", {
      code: gameCode,
      players: [],
      leaderboard: [],
    });

    return { gameId, gameCode };
  },
});

export const joinGame = mutation({
  args: { gameCode: v.string(), playerName: v.string(), avatar: v.string() },
  handler: async ({ db }, { gameCode, playerName, avatar }) => {
    // Find the game by its code
    const game = await db
      .query("gameTable")
      .filter((q) => q.eq("code", gameCode))
      .first();

    if (!game) {
      throw new Error("Game not found");
    }

    // Create a new player
    const playerId = await db.insert("playerTable", {
      name: playerName,
      avatar,
      cows: 0,
      burgers: 0,
      roadPoints: 0,
    });

    // Update the game to include the new player
    await db.patch(game._id, { players: [...game.players, playerId] });

    return { playerId, gameId: game._id };
  },
});
