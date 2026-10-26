// Optional standalone Express API (same contract as app/api/contact). Run: npm run api
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const mongo = new MongoClient(process.env.MONGODB_URI);
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000" }), express.json({ limit: "10kb" }));

app.post("/api/contact", async (req, res) => {
  const { name, email, message, website } = req.body ?? {};
  if (website) return res.json({ ok: true });
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) return res.status(400).json({ error: "Invalid input" });
  const doc = { name, email, message, createdAt: new Date().toISOString() };
  try {
    await mongo.db().collection("messages").insertOne({ ...doc });
    if (process.env.N8N_WEBHOOK_URL) {
      fetch(process.env.N8N_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json", "x-webhook-secret": process.env.N8N_WEBHOOK_SECRET || "" }, body: JSON.stringify({ source: "portfolio-contact", ...doc }) }).catch(console.error);
    }
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Delivery failed" });
  }
});

app.listen(process.env.PORT || 4000, () => console.log("API on :" + (process.env.PORT || 4000)));
