import { useState } from "react";
import ConnectForm from "../Form/ConnectForm";
import classes from "./css/Services.module.css";
import ServicesCard from "./ServicesCard";

const Services = ({ serviceData }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleContactForm = () => setIsOpenForm((isOpenForm) => !isOpenForm);

  return (
    <>
      {isOpenForm ? <ConnectForm handleOnClick={handleContactForm} /> : ""}
      <div className={classes.servicesContainer} id="service-section">
        <div className="commonTitle">
          <h3>Our Services</h3>
          <p>
            We have helped a multitude of businesses expand their horizons by
            offering streamlined services for multiple iOS platforms with the
            right blend of experience and technology.
          </p>
        </div>
        <div className={classes.serviceCardContainer}>
          {serviceData?.map?.((service) => {
            return (
              <ServicesCard
                key={service._id}
                logo={service.logo}
                name={service.name}
                features={service.features}
                description={service.description}
                price={service.price}
                actual_price={service.actual_price}
              />
            );
          })}
        </div>

        <div className={`moreBtn ${classes.customizeBtn}`}>
          <button onClick={handleContactForm}>Customize Service</button>
        </div>
      </div>
    </>
  );
};

export default Services;
