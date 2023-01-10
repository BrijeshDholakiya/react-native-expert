/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classes from "./Connect.module.css";
import whatsApp from "../public/images/whatsappMain.svg";
import skype from "../public/images/skypeMain.svg";
import ConnectForm from "./Form/ConnectForm";

const Connect = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleContactForm = () => setIsOpenForm((isOpenForm) => !isOpenForm);

  return {
    ...(isOpenForm ? (
      <ConnectForm handleOnClick={handleContactForm} isOpenForm={isOpenForm} />
    ) : (
      <div className={classes.connectContainer}>
        <div className={classes.wtsappContainer}>
          <Link href="https://api.whatsapp.com/send?phone=+917990369008">
            <span className="cp">
              <Image src={whatsApp} alt="" className={classes.image} />
            </span>
          </Link>
        </div>

        <div className={classes.quickConnect}>
          <button onClick={handleContactForm}>Quick Contact</button>
        </div>
        <div className={classes.skypeContainer}>
          <Link href="skype:live:.cid.444482468fe2e365?chat">
            <span className="cp">
              <Image src={skype} alt="" className={classes.image} />
            </span>
          </Link>
        </div>
      </div>
    )),
  };
};

export default Connect;
