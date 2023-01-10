/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import classes from "./css/Copyright.module.css";

const Copyright = () => {
  return (
    <div className={classes.copyrightContainer}>
      <div className={classes.designCopyrightContainer}>
        <span>© Copyright 2022 - React Native Experts.</span>
      </div>

      <div className={classes.designPrivacyContainer}>
        <div className={classes.innerPrivacyContainer}>
          <Link href="/">
            <span>Privacy Policy</span>
          </Link>
        </div>

        <div className={classes.innerPrivacyContainer}>
          <Link href="/">
            <span>
              <li>Terms & Conditions</li>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
