import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Users } from "../../dummyData"
import { useState } from 'react';

export default function Post({ post }) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postProfileName">{Users.filter((u) => u.id === post?.userId)[0].userName}</span>
                        <span className="postProfileDate">{post.date}</span>
                    </div>
                    <div className="postTopRight"> <MoreVertIcon/></div>
                </div>
                <div className="postCenter"></div>
                    <span className="postText">{post.desc}</span>
                    <img src={post.posts} alt="" className="postImage" />
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorderIcon className="postBottomLeftIcon" onClick={likeHandler} />
                        <ShareIcon className="postBottomLeftIcon"/>
                        <span className="postBottomText">{like} likes</span>
                    </div>
                   <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                   </div>
                </div>
            </div>
            
        </div>
    )
}
