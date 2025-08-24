const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const results = [];

// Your CSV file here
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => results.push(row))
  .on("end", () => {
    console.log("CSV loaded");
  });

app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Query missing" });

  const byNumber = results.find(u => u.Number === query);
  if (byNumber) return res.json(byNumber);

  const byCarrier = results.filter(u => u.Carrier.toLowerCase() === query.toLowerCase());
  if (byCarrier.length > 0) return res.json(byCarrier);

  res.status(404).json({ error: "No results found" });
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  results.push(newUser);
  res.json({ message: "User added", newUser });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));