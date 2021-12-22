import React from "react";
import { AvatarData } from "../Utils/AvatarData";
import "../App.css";
// import '../Index.css'

const Avatar = () => {
  return (
    <div className='avatar-bar'>
      Avatars
      {AvatarData.map((avatar, index) => {
        return <img src={avatar.image} alt='lost' className='guild' />;
      })}
    </div>
  );
};

export default Avatar;
