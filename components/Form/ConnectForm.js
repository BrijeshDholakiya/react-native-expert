/* eslint-disable @next/next/link-passhref */
import React, { useState, useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";
import classes from "./ConnectForm.module.css";
import india from "../../public/images/indian_flag.png";
import Link from "next/link";
import whatsapp from "../../public/images/whatsapp2.svg";
import skype from "../../public/images/skypeFormImg.svg";
import CustomInput from "./CustomInput";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import { calendlyContext } from "../../constants/Context/Calendly-Context";
// import { postRequestApi } from "../../Api/contact";

function ConnectForm(props) {
  const [isStatus, setIsStatus] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const { handleOnClickCalendly } = calendlyContext();

  ///////////////// CODE FOR POST REQUEST /////////////////
  var handleSubmit;
  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      description,
      phone_no: phone,
    };
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setIsMessage("Your details are submitted!!!");
    setIsStatus("success");
    setIsOpen(false);
  };

  const wrapperRef = useRef();
  useOutsideAlerter(wrapperRef);
  // ///////////////
  //   FUNCTION   FOR   CLOSE   OUTSIDE    THE   FORM
  //               ////////////////
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.handleOnClick();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className={`${classes.contactFormContainer}`} ref={wrapperRef}>
      <div className={classes.closeIconContainer} onClick={props.handleOnClick}>
        <CloseIcon />
      </div>
      <div className={classes.contactTitle}>
        <span>Contact Us</span>
      </div>

      {/*//////////////// CONTACT FROM ///////////////////////////*/}
      <form className={classes.connectForm} onSubmit={handleSubmit}>
        <CustomInput
          InputFieldtype="text"
          InputFieldname="name"
          InputFieldplaceholder="*Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required="required"
        />
        <CustomInput
          InputFieldtype="email"
          InputFieldname="email"
          InputFieldplaceholder="*Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required="required"
        />
        <CustomInput
          InputFieldtype="tel"
          InputFieldname="phone"
          InputFieldplaceholder="*Contact no."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required="required"
        />
        <div className={classes.textAreaContainer}>
          <textarea
            placeholder="*Project Details"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = `*Project Details`)}
            required="required"
            autoComplete="off"
          />
        </div>

        <div style={{ display: `${isOpen ? "block" : "none"}` }}>
          {isMessage ? <Alert severity={isStatus}>{isMessage}</Alert> : null}
        </div>
        <div className={classes.submitBtnContainer}>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className={classes.orContainer}>
        <span>
          <hr />
          <span>OR</span>
          <hr />
        </span>
      </div>

      <div>
        <div className={classes.indianContainer}>
          <div className={classes.mobileNumContainer}>
            <Link href="tel:+917990369008">
              <Image src={india} alt="" className={classes.image} />
            </Link>
          </div>
          <div>
            <Link href="tel:+917990369008">
              <span className="cp">+91 7990369008</span>
            </Link>
          </div>
        </div>

        <div className={classes.whatsappNumContainer}>
          <div className={classes.mobileNumContainer}>
            <Link href="https://api.whatsapp.com/send?phone=+917990369008">
              <Image
                src={whatsapp}
                alt=""
                className={classes.image}
                width={20}
                height={20}
              />
            </Link>
          </div>
          <div>
            <Link href="https://api.whatsapp.com/send?phone=+91">
              <span>+91 7990369008</span>
            </Link>
          </div>
        </div>
        <div className={classes.skypeContainer}>
          <div>
            <Link href="skype:live:.cid.a9276ca7fde6c5aa?chat">
              <span className={classes.mobileNumContainer}>
                <Image
                  src={skype}
                  alt=""
                  width={20}
                  height={20}
                  className={classes.image}
                />
              </span>
            </Link>
          </div>
          <div>
            <Link href="skype:live:.cid.a9276ca7fde6c5aa?chat">
              <span style={{ color: "#000" }}>React Native Experts</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.bookMeetBtn}>
        <button onClick={handleOnClickCalendly}>Book A Meeting</button>
      </div>
    </div>
  );
}

export default ConnectForm;

// postRequestApi(userData)
//   .then((response) => {
//     if (response.data) {
//       setName("");
//       setEmail("");
//       setPhone("");
//       setDescription("");
//       setIsMessage("Your details are submitted!!!");
//       setIsStatus("success");
//     } else {
//       setIsMessage("Please Check your details and try again...");
//       setIsStatus("error");
//     }
//     setIsOpen(false);
//     return response;
//   })
//   .catch((err) => setIsOpen(false));
