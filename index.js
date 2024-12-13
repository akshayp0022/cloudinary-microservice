const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 4001;

const image = require("./routes/image");

app.use(express.json());
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve API routes
app.use("/api/image", image);

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
