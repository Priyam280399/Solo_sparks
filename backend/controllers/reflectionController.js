const Reflection = require('../models/Reflection');
const cloudinary = require('../utils/cloudinary');

exports.addReflection = async (req, res) => {
  try {
    let content = req.body.content;
    if (req.file) {
      cloudinary.uploader.upload_stream({ resource_type: 'auto' }, async (error, result) => {
        if (error) return res.status(500).json({ error });
        const reflection = new Reflection({
          userId: req.user.userId,
          questId: req.body.questId,
          type: req.body.type,
          content: result.secure_url,
        });
        await reflection.save();
        res.status(201).json(reflection);
      }).end(req.file.buffer);
    } else {
      const reflection = new Reflection({
        userId: req.user.userId,
        questId: req.body.questId,
        type: req.body.type,
        content,
      });
      await reflection.save();
      res.status(201).json(reflection);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// const cloudinary = require("cloudinary").v2;

// exports.createReflection = async (req, res) => {
//   try {
//     const { questId, text } = req.body;
//     const userId = req.user._id;

//     let photoUrl = "";
//     let audioUrl = "";

//     if (req.files?.photo?.[0]) {
//       const result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
//         if (error) throw error;
//         photoUrl = result.secure_url;
//       });
//       result.end(req.files.photo[0].buffer);
//     }

//     if (req.files?.audio?.[0]) {
//       const result = await cloudinary.uploader.upload_stream({ resource_type: "video" }, (error, result) => {
//         if (error) throw error;
//         audioUrl = result.secure_url;
//       });
//       result.end(req.files.audio[0].buffer);
//     }

//     const reflection = new Reflection({
//       questId,
//       userId,
//       text,
//       photoUrl,
//       audioUrl
//     });

//     await reflection.save();
//     res.status(201).json({ message: "Reflection saved successfully" });

//   } catch (error) {
//     console.error("Reflection submission error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
