// ADD/MODIFY ROUTES HERE (and modify controllers) FOR OTHER POST FUNCTIONS IN WEBSITE (LIKE BOOKING?)
import express from "express";
import { getFeedPosts, getUserPosts, joinPost, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);


/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/join", verifyToken, joinPost);

export default router;
