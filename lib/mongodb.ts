import { MongoClient } from "mongodb";

const g = globalThis as unknown as { _mongo?: Promise<MongoClient> };

export function getClient() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not set");
  return (g._mongo ??= new MongoClient(process.env.MONGODB_URI).connect());
}
