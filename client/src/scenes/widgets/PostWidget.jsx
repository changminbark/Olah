import { 
    ChatBubbleOutlineOutlined, 
    FavoriteBorderOutlined, 
    FavoriteOutlined, 
    ShareOutlined,
    AccountCircleOutlined 
} from "@mui/icons-material";
import { 
    Box,
    Divider,
    IconButton,
    Typography,
    useTheme
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "componenets/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    locationPicturePath,
    userPicturePath,
    users,
    likes,
    comments,
}) => {
    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;
    const isJoined = Boolean(users[loggedInUserId]);
    const joinCount = Object.keys(users).length;
    
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;

    /* API call to update likes of a post. */
    const patchLike = async () => {
        const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: loggedInUserId })
        });
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }))
    }

    /* MIGHT NOT WORK... IF DOESN'T, CHECK FOR CONTROLLERS, MODELS, ROUTES... */
    const patchUsers = async () => {
        const response = await fetch(`http://localhost:3001/posts/${postId}/users`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: loggedInUserId })
        });
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }))
    };


    /* STOPPED AT 4:57:24, REMEMBER TO ADD ICON FOR USERS JOINED (USE ACCOUNTCIRCLEOUTLINED) */
    return (
        <WidgetWrapper m="2rem 0">

        </WidgetWrapper>
    )
};

export default PostWidget;