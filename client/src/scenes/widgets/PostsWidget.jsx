import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);

    /* Make two API calls where one gets all the feed posts and one that gets all of a certain user's posts. */
    const getPosts = async() => {
        const response = await fetch(
            "http://localhost:3001/posts", 
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`},
            }
        );
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
    };

    const getUserPosts = async() => {
        const response = await fetch(
            `http://localhost:3001/posts/${userId}/posts`, 
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}`},
            }
        );
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
    };

    useEffect(() => {
        if (isProfile) {
            getUserPosts();
        } else {
            getPosts();
        }
    }, []); // eslint-disable-likne react-hooks/exhaustive-deps

    return (
        <>
            {posts.map(
                ({
                    _id,
                    userId,
                    firstName,
                    lastName,
                    description,
                    location,
                    locationPicturePath,
                    userPicturePath,
                    users,
                    likes,
                    comments,
                }) => (
                    <PostWidget 
                        key={_id}
                        postId={_id}
                        postUserId={userId}
                        name={`${firstName} ${lastName}`}
                        description={description}
                        location={location}
                        locationPicturePath={locationPicturePath}
                        userPicturePath={userPicturePath}
                        users={users}
                        likes={likes}
                        comments={comments}
                    />
                )
            )}
        </>
    )
};


export default PostsWidget;