import {
    EditOutlined,
    DeletOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material";
import { 
    Box, 
    Divider, 
    Typography, 
    InputBase, 
    useTheme, 
    Button, 
    IconButton, 
    useMediaQuery 
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    /* The below represents the switch of whether someone pressed the image button to drop an image. */
    const [isImage, setIsImage] = useState(false);
    /* Another state that represents the actual image if someone drops the image. */
    const [image, setImage] = useState(null)
    /* Representation of actual post content description. */
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    /* This hook API (useSelector) extracts data from the Redux store state. In this case, the API is called to determine the user and their id. */
    const { _id } = useSelector((state) => state.user);
    /* Authorizes user to call API using a token. */
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(mind-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    /* Function that handles post and makes API call */
    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }
        /* Sends info to back-end. */
        const response = await fetch(`http://localhost:3001/posts`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`},
            body: formData,
        });
        /* Back-end return lists of updated posts. */
        const posts = await response.json();
        /* Keeps/sets our list of posts */
        dispatch(setPosts({ posts }));
        /* Resets state after API call is done. */
        setImage(null);
        setPost("");
    };


};
