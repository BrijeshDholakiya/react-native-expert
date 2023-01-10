/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import classes from "./css/Footer.module.css";
import footerLogo from "../../public/images/footer/footerLogo.svg";
import footerDesign from "../../public/images/footer/footer.svg";
import message from "../../public/images/footer/message.svg";
import skype from "../../public/images/footer/skype.svg";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div>
      <div className={classes.footerContainer}>
        <div className={classes.footerImg}>
          <Image src={footerDesign} alt="design" />
        </div>
        <div className={classes.footerContent}>
          <div className={classes.footertextContainer}>
            <Image src={footerLogo} alt="react-native-logo" />
            <h2>Try Rise and discover the growth opportunities</h2>
            <p>
              Experience a 10X reduction in bounce rate and join our clients in
              email list bliss.
            </p>
          </div>

          <div className={classes.skypeContainer}>
            <div className={classes.commonContainer}>
              <div className={classes.iconContainer}>
                <Link href="/">
                  <span>
                    <Image src={message} width={40} height={30} />
                  </span>
                </Link>
              </div>
              <div className={classes.linkText}>
                <Link href="/">
                  <span> hello@reactnativeexpert.com</span>
                </Link>
              </div>
            </div>

            {/* MESSAGE ICON CONTAINER */}
            <div className={classes.commonContainer}>
              <div className={classes.iconContainer}>
                {" "}
                <Link href="/">
                  <span>
                    <Image src={skype} width={40} height={25} />
                  </span>
                </Link>
              </div>
              <div className={classes.linkText}>
                <Link href="/">
                  <span>React Native Experts</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
