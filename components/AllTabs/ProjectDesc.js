import classes from "../projects/css/ProjectDetail.module.css";

const ProjectDescription = ({ description }) => {
  return (
    <div className={classes.projectDescContainer}>
      <div
        className={classes.projectDescContent}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ProjectDescription;
