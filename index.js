const express = require("express");
const path = require('path');
const helper = require("./helper.js")

const app = express();
app.use(express.json());
app.use(express.json({limit: '10mb'}))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api/ping", async(req, res) => {
  const stuff = await helper.search()
  res.status(200).json(stuff)
})

app.get("/api/injury", async(req, res) => {
  const stuff = await helper.searchInjuryInfoCache()
  res.status(200).json(stuff)
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});