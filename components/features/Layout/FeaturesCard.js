import Image from "next/image";
import classes from "../css/FeaturesCard.module.css";

const FeaturesCard = (props) => {
  return (
    <div className={classes.featureCard}>
      <div className={classes.featuresLogo}>
        <Image src={props.logo} alt="features-logo" />
      </div>
      <div className={classes.featureCardTitle}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.featureCardDesc}>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
