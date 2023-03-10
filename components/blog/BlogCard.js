/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import classes from "./css/BlogCard.module.css";

const BlogCard = (props) => {
  return (
    <Link href="/" className={classes.cardLinkContainer}>
      <div className={classes.blogCard}>
        <div className={classes.blogCardBody}>
          <div className={classes.blogImgContainer}>
            <Image
              src={props.image}
              className={classes.image}
              layout="responsive"
              alt=""
            />
          </div>
          <div className={classes.blogFeatures}>
            <span>
              <Link href="/">{props.btn1}</Link>
              <Link href="/">{props.btn2}</Link>
            </span>
          </div>
          <div className={classes.blogCardTitle}>
            <h3>{props.title}</h3>
          </div>
          <div className={classes.blogCardDesc}>
            <p>{props.desc}</p>
          </div>
          <div className={classes.reactLogoWithDate}>
            <div className={classes.rnExpertLogo}>
              <Image src={props.reactNative} alt="react native experts" />
            </div>
            <div>
              <span>May 20, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
