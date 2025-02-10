const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

app.post("/", (req, res) => {
  const { area, bullshit } = req.body;


  if (!area || area.length < 5) {
    return res.status(400).send("Error: 'area' must be at least 5 characters long.");
  }

  res.status(200).send("All OK");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
