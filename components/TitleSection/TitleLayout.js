import Image from "next/image";
import classes from "./css/TitleLayout.module.css";
import design from "../../public/images/design.svg";
import designRight from "../../public/images/designTopRight.svg";
import React from "react";

const TitleLayout = (props) => {
  return (
    <div className={classes.titleSectionContainer}>
      <div className={classes.design}>
        <Image src={design} alt="design" />
      </div>
      {props.children}
      <div className={classes.designTwo}>
        <Image src={designRight} alt="design" />
      </div>
    </div>
  );
};

export default TitleLayout;
