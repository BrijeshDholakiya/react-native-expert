import Image from "next/image";
import classes from "./css/ProjectDetail.module.css";
import ProjectDescription from "../AllTabs/ProjectDesc";
import FeatureTab from "../AllTabs/FeatureTab";
import { useState } from "react";

const ProjectDetail = ({ description, features, cover_image }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className={classes.projectDetailsContainer}>
      <div className={classes.projectImageContainer}>
        <Image
          src={cover_image}
          alt="Project Image"
          layout="responsive"
          className={classes.image}
        />
      </div>

      {/*  PROJECT DETAILS CONTENT */}

      <div className={classes.projectDetailContainer}>
        <div className={classes.detailbarContainer}>
          <div
            className={`${classes.projectDesc} ${classes.description} ${
              activeTab === "tab1" ? classes.active : ""
            }`}
            onClick={handleTab1}
          >
            <span>Project description</span>
          </div>
          <div
            className={`${classes.projectDesc} ${
              activeTab === "tab2" ? classes.active : ""
            }`}
            onClick={handleTab2}
          >
            <span>Features</span>
          </div>
        </div>
      </div>

      <div className={classes.outlet}>
        {activeTab === "tab1" ? (
          <ProjectDescription description={description} />
        ) : activeTab === "tab2" ? (
          <FeatureTab features={features} />
        ) : (
          <ProjectDescription />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
