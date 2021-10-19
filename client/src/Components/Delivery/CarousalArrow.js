import React from "react";

export const NextArrow = (props) => {
  return (
    <div className={props.className}
         style={{...props.style,
           backgroundColor: "rgb(102, 102, 102)",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           position: "absolute",
           width: "40px",
           height: "40px",
           borderRadius: "20px ",
           cursor: "pointer",
           right: "-20px",
           top: "100px"
         }}
         onClick={props.onClick}
    />
  );
};


export const PrevArrow = (props) => {
  return (
    <div className={props.className}
         style={{...props.style,
           backgroundColor: "rgb(102, 102, 102)",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           position: "absolute",
           width: "40px",
           height: "40px",
           borderRadius: "20px ",
           cursor: "pointer",
           right: "-20px",
           top: "100px"
           }}
           onClick={props.onClick}
    />
  );
};
