import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

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
    // Fetch all game codes in lowercase for case-insensitive matching
    const games = await db.query("gameTable").collect();

    // Convert game codes to lowercase and search for a match
    const game = games.find(
      (g) => g.code.toLowerCase() === gameCode.toLowerCase()
    );

    if (!game) {
      console.log(`Here is the game code you entered: ${gameCode}`);
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

export const updateCowCount = mutation({
  args: {
    playerId: v.id("playerTable"),
    cowCountChange: v.number(),
  },
  handler: async ({ db }, { playerId, cowCountChange }) => {
    const player = await db.get(playerId);

    if (!player) {
      throw new Error("Player not found");
    }
    const newCowCount = player.cows + cowCountChange;

    await db.patch(playerId, { cows: newCowCount });

    return { cowCount: newCowCount };
  },
});

export const updateBurgerCountMutation = mutation({
  args: {
    playerId: v.id("playerTable"),
    burgersChange: v.number(),
  },
  handler: async ({ db }, { playerId, burgersChange }) => {
    const player = await db.get(playerId);

    if (!player) {
      throw new Error("Player not found");
    }
    const newBurgerCount = player.burgers + burgersChange;

    await db.patch(playerId, { burgers: newBurgerCount });

    return { burgerCount: newBurgerCount };
  },
});
