import classes from "../projects/css/ProjectDetail.module.css";
import styles from "../../components/features/css/featureCardContainer.module.css";
import FeaturesCardBlack from "../projects/FeaturesCardBlack";

const FeatureTab = ({ features }) => {
  console.log("features >>>>> ", features);
  return (
    <div className={classes.featuresDescContainer}>
      <h3>Features</h3>
      <div
        className={`${styles.featureCardContainer} ${classes.blackFeatureCardContainer}`}
      >
        {features.map((feature, index) => {
          return (
            <FeaturesCardBlack
              key={index}
              icon={feature.icon}
              name={feature.name}
              text={feature.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeatureTab;
