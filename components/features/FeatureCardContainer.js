import classes from "./css/featureCardContainer.module.css";

import FeaturesCard from "./Layout/FeaturesCard";
import { featuresData } from "../../constants/featureCardData";

const FeatureCardContainer = () => {
  return (
    <div className={classes.featureCardContainer}>
      {featuresData.map((data, index) => {
        return (
          <FeaturesCard
            logo={data.logo}
            title={data.name}
            desc={data.text}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FeatureCardContainer;
