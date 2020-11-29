import React from "react";

const Header = () => {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#EAF6F8",
        position: 'sticky',
        boxShadow: '-4px -3px 45px 21px rgba(0,0,0,0.35)',
        top: '0',
        zIndex: '40'
      }}
    ></div>
  );
};

export default Header;
