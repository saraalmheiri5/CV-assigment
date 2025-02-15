const express = require("express");
const app = express();

// Azure provides the PORT dynamically
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Azure!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
