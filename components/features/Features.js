import { useState } from "react";
import Image from "next/image";
import classes from "./css/Features.module.css";
import feature from "../../public/images/features/features.svg";

import featureRight from "../../public/images/features/designRight.svg";
import featureLeft from "../../public/images/features/designLeft.svg";
import FeatureCardContainer from "./FeatureCardContainer";
import ConnectForm from "../Form/ConnectForm";

const Features = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleContactForm = () => {
    setIsOpenForm((isOpenForm) => !isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <ConnectForm
          handleOnClick={handleContactForm}
          isOpenForm={isOpenForm}
        />
      ) : (
        ""
      )}
      <div className={classes.featureContainer}>
        {/* **********************
              FEATURE CONTENT
              *******************  */}
        <div className={classes.featureContentContainer}>
          <div className={classes.featureTextContainer}>
            <div className={classes.featuresHeading}>
              <h2>Top 6 Reasons to Choose React native</h2>
            </div>

            <div className={classes.featuresDesc}>
              <p>
                Vade replaces legacy parking infrastructure with wireless
                cameras, computer vision, and granular analytics. We make it
                easy for cities to monitor and manage curb space in real-time.
              </p>
            </div>

            <button onClick={handleContactForm}>Let’s connect & Discuss</button>
          </div>
          {/* **********************
                    FEATURE IMAGE
              ***************************  */}
          <div className={classes.featureImageContainer}>
            <Image src={feature} alt="designs" width={530} />
          </div>
        </div>
        <div className={classes.designRight}>
          <Image src={featureRight} alt="design" />
        </div>

        {/* **********************
                  FEATURE CARD
              *****************************  */}
        <div className={classes.designLeft}>
          <Image src={featureLeft} alt="designs" />
        </div>
        <FeatureCardContainer />
      </div>
    </>
  );
};

export default Features;
