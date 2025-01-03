import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineEvent } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarItem">
            <MdOutlineRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarItem">
            <BsChatSquareTextFill className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarItem">
            <MdOutlineSlowMotionVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarItem">
            <MdGroups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarItem">
            <FaRegQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarItem">
            <IoBagOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarItem">
            <MdOutlineEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarItem">
            <FaConciergeBell className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarFriendName">Monte Cristo</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
