import React from "react";

import avatar from "../../assets/rayb.png";

import "./Avatar.styles.scss";

const Avatar = ({ size }) => {
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <img src={avatar} alt="Ray Blandford" className="avatar" style={styles} />
  );
};

export default Avatar;
