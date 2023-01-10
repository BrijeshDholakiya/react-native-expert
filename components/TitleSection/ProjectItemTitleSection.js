import { Fragment } from "react";
import classes from "./css/ProjectItemTitleSection.module.css";

const ProjectItemTitleSection = ({ name, about }) => {
  return (
    <Fragment>
      <div
        className={`${classes.blogTitleContainer} ${classes.secondBlogContainer}`}
      >
        <h1>{name}</h1>
        <p>{about}</p>
      </div>
    </Fragment>
  );
};

export default ProjectItemTitleSection;
