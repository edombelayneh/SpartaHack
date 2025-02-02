import { query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const getPlayerCount = query(
  async ({ db }, { gameCode }: { gameCode: string }) => {
    // Ensure gameCode is a string
    if (typeof gameCode !== "string") {
      console.log("gameCode must be a string");
      throw new Error("Invalid gameCode format");
    }

    console.log(`Here is the gameCode: ${gameCode}`);
    // Find the game document
    const game = await db
      .query("gameTable") // Ensure this matches your actual table name
      .filter((q) => q.eq(q.field("code"), gameCode as string)) // Explicitly typecast
      .first();

    if (!game) return 0; // If no game exists with this code, return 0
    // If a game exists, return the number of players in that game
    console.log(`Number of players from functions: ${game.players.length}`);

    return game.players.length; // Return the number of players in the game
  }
);

export const getPlayers = query(
  async ({ db }, { gameCode }: { gameCode: string }) => {
    if (typeof gameCode !== "string") {
      console.log("gameCode must be a string");
      throw new Error("Invalid gameCode format");
    }

    console.log(`Fetching players for gameCode: ${gameCode}`);

    // Find the game document
    const game = await db
      .query("gameTable") // Ensure this matches your actual table name
      .filter((q) => q.eq(q.field("code"), gameCode as string)) // Filter by gameCode
      .first();

    if (!game) {
      console.log("No game found with this gameCode.");
      return [];
    }

    // Fetch player details using the stored player IDs
    const players = await Promise.all(
      game.players.map(async (playerId: Id<"playerTable">) => {
        return await db.get(playerId); // Fetch full player document
      })
    );

    console.log(`Found players: ${JSON.stringify(players)}`);
    return players; // Return array of player objects
  }
);

export const getPlayerById = query(
  async ({ db }, { playerId }: { playerId: Id<"playerTable"> }) => {
    const player = await db.get(playerId);
    return player || null;
  }
);
