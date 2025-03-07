import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { BiSolidTagAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="./assets/person/2.jpeg" alt="" />
          <input placeholder="What's in your mind Aziz" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia color="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <BiSolidTagAlt color="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FaLocationDot color="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <FaFaceSmile color="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
