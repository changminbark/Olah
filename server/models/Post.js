import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        userPicturePath: String,
        locationPicturePath: String,
        users: {
            type: Map,
            of: Boolean,   
        },
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: []
        }
    },
    { timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;