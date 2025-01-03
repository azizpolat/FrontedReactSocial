import "./post.css";
import { IoMdMore } from "react-icons/io";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">Aziz Polat</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <IoMdMore />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Heyy! Its my first post :))</span>
          <img className="postImg" src="./assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/like.png" alt="" />
            <img src="./assets/heart.png" alt="" />
            <span className="likeCounter">33 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCoomentText">19 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
