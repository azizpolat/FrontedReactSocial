import "./closeFriend.css";

const CloseFriend = ({ item }) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={item.profilePicture} alt="" />
      <span className="sidebarFriendName">{item.username}</span>
    </li>
  );
};

export default CloseFriend;
