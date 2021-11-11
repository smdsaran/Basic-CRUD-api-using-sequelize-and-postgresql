const video = require("../models/Video.js");

exports.fetchVideo = async (req, res) => {
  const user_id = req.params.userId;

  const videos = await video.findAll({
    where: {
      user_id: user_id,
    },
  });

  // SELECT * FROM videos WHERE user_id = user_id;

  // console.log(videos);

  if (videos) {
    res.send(videos);
    console.log("Video Fetched .");
  } else {
    console.log("Video Not available .");
  }
};

///////////

exports.addVideo = (req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const user_id = req.body.user_id;

  console.log(req.body);

  video.sync().then(() => {
    video
      .create({
        video_name: name,
        video_url: url,
        user_id: user_id,
      })
      .then(() => {
        console.log("video Added .");
        res.send({ message: "Video Added ." });
      })
      .catch((err) => console.log("Video Not Added.", err));
  });
};

//////////////

exports.updateVideo = async (req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const user_id = req.body.user_id;

  const videos = await video.update(
    { video_name: name, video_url: url },
    {
      where: {
        user_id: user_id,
      },
    }
  );

  if (videos) {
    res.send({ message: "Video Updated ." });
    console.log("video Updated .");
  } else {
    console.log("Video not available .");
  }
};

/////////////

exports.deleteVideo = (req, res) => {
  const user_id = req.body.user_id;

  video
    .destroy({
      where: {
        user_id: user_id,
      },
    })
    .then(() => {
      console.log("Video Deleted .");
      res.send({ message: "Video Deleted ." });
    })
    .catch((err) => {
      console.log("Video not Available .");
    });
};
