import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
};

export default Online;
