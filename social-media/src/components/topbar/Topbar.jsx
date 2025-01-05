import React from "react";
import "./topbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">AzizSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <IoSearchOutline className="searchIcon" />
          <input
            placeholder="Search for Friend , post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topvarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoPersonSharp />
            <span className="topbarIconBadge">3</span>
          </div>

          <div className="topbarIconItem">
            <IoChatboxEllipses />

            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <IoNotificationsSharp />

            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/2.jpeg
        "
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;
