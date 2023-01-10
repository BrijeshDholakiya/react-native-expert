import Image from "next/image";
import classes from "./css/FeatureCardBlack.module.css";

const FeaturesCardBlack = ({ icon, text, name }) => {
  return (
    <div className={classes.featureCard}>
      <div className={classes.featuresLogo}>
        <Image src={icon} alt="features-logo" />
      </div>
      <div className={classes.featureCardTitle}>
        <h3>{name}</h3>
      </div>
      <div className={classes.featureCardDesc}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeaturesCardBlack;
