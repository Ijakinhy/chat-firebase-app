import React, { useEffect } from "react";
import "./userInfo.css";
import { useSelector } from "react-redux";
import { auth } from "../../../lib/firebase";
const UserInfo = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "/public/avatar.png"} alt="profile" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="rightside" style={{
        display:"flex",
        alignItems:"center",
        gap:"20px"
      }}>
        <div className="icons">
        <img src="/public/more.png" alt="icon" />
        <img src="/public/video.png" alt="icon" />
        <img src="/public/edit.png" alt="icon" />
          
      </div>
      <button onClick={()=> auth.signOut()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>

      </button>
      </div>
    </div>
  );
};

export default UserInfo;
