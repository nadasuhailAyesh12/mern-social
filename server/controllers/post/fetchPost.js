const expressAsyncHandler = require("express-async-handler");

const Post = require("../../models/post/Post");
const validateID = require("../../utils/ValidateMongoID");

const fetchPost = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        validateID(id);

        const post = await Post.findById(id).populate("user");
        await Post.findByIdAndUpdate(
            id,
            {
                $inc: { numOfViews: 1 },
            },
            { new: true }
        );

        res.status(200).json({ message: "success", post });
    }

    catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = fetchPost;
