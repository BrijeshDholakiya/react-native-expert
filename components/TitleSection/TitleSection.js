import Image from "next/image";
import classes from "./css/TitleSection.module.css";
import bigTitle from "../../public/images/bigTitle.svg";
import TitleLayout from "./TitleLayout";
import React, { useState } from "react";
import ConnectForm from "../Form/ConnectForm";
import { calendlyContext } from "../../constants/Context/Calendly-Context";

const TitleSection = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const { handleOnClickCalendly } = calendlyContext();

  const handleContactForm = () => {
    setIsOpenForm((isOpenForm) => !isOpenForm);
  };

  return (
    <React.Fragment>
      {isOpenForm ? <ConnectForm handleOnClick={handleContactForm} /> : ""}
      <TitleLayout className={classes.titleSectionContainer}>
        <div className={classes.titleContentContainer}>
          <div className={classes.bigTitle}>
            <h1 className={classes.titleName}>
              <span style={{ fontWeight: "300" }}>We are</span>
              <br />
              React Native Heroes
            </h1>
            <div className={classes.bigTitleDesc}>
              <p>
                We are React Native Community-trusted, extremly skilled
                Javascript developers ready to hire to your next React Native
                and React Projects, now.
              </p>
            </div>

            <div>
              <button
                className={classes.needAppBtn}
                onClick={() => handleContactForm()}
              >
                Develop an App?
              </button>
              <button
                className={classes.bookMeetingBtn}
                onClick={() => handleOnClickCalendly()}
              >
                Book A Meeting
              </button>
            </div>
          </div>

          <div className={classes.titleImg}>
            <Image src={bigTitle} alt="" />
          </div>
        </div>
      </TitleLayout>
    </React.Fragment>
  );
};

export default TitleSection;
