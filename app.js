const express = require("express");
const cors = require("cors");
const video = require("./routes/Video");
const sequelize = require(__dirname + "/config/DB");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/fetch-video/:userId", video.fetchVideo);

app.post("/add-video", video.addVideo);

app.put("/update-video", video.updateVideo);

app.delete("/delete-video", video.deleteVideo);

app.listen(3000, () => {
  console.log("Server Running on Port 3000 .");
});
