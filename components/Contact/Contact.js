/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";
import classes from "./css/Contact.module.css";
import facebook from "../../public/images/fb.svg";
import instagram from "../../public/images/instagram.svg";
import twitter from "../../public/images/twit.svg";
import linkedIn from "../../public/images/linkedIn.svg";
import Image from "next/image";

function Contact() {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.facebookContainer}>
        <Link href="/">
          <span className="cp">
            <Image src={facebook} alt="" width={30} height={30} />
          </span>
        </Link>
      </div>
      <div className={classes.facebookContainer}>
        <Link href="/">
          <span className="cp">
            <Image src={instagram} alt="" width={30} height={30} />
          </span>
        </Link>
      </div>
      <div className={` ${classes.facebookContainer} ${classes.twitContainer}`}>
        <Link href="/">
          <span className="cp">
            <Image src={linkedIn} alt="" width={30} height={30} />
          </span>
        </Link>
      </div>
      <div className={classes.facebookContainer}>
        <Link href="/">
          <span className="cp">
            <Image src={twitter} alt="" width={30} height={30} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
