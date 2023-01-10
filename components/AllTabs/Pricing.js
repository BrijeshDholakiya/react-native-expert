import classes from "../projects/css/ProjectDetail.module.css";
import { ServiceCardData } from "../../constants/serviceCardData";
import ServicesCard from "../../components/services/ServicesCard";

const PricingTab = () => {
  const cut = ServiceCardData.slice(0, 3);

  return (
    <div className={classes.serviceDescContainer}>
      <div className={classes.serviceCardContainer}>
        {cut.map((data, index) => {
          return (
            <ServicesCard
              key={index}
              image={data.image}
              heading={data.title}
              desc={data.desc}
              priceOne={data.priceOne}
              priceTwo={data.priceTwo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PricingTab;
