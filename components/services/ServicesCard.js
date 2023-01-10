import Image from "next/image";
import classes from "./css/ServicesCard.module.css";
import tickMark from "../../public/images/Services/tickMark.svg";

export default function ServicesCard(props) {
  const service = props;
  return (
    <div className={classes.servicesCard}>
      <div className={classes.sCardbody}>
        <div>
          <Image src={service.logo} alt="logo" />
        </div>
        <div className={classes.serviceCardHeading}>
          <h3>{service.name}</h3>
        </div>

        <div className={classes.serviceDesc}>
          <p>{service.description}</p>
        </div>
        <div className={classes.serviceFeaturesContainer}>
          {service.features.map((feature, index) => {
            return (
              <div className={classes.serviceFeatures} key={index}>
                {/* <div> */}
                <Image src={tickMark} alt="green-tick-mark" />
                {/* </div> */}
                <div>
                  <span>{`${feature.slice(0, 1).toUpperCase()}${feature
                    .slice(1, feature.length)
                    .toLowerCase()}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
