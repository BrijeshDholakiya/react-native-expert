import classes from "./css/BlogTitleSection.module.css";

const ProjectTitleSection = () => {
  return (
    <div
      className={`${classes.blogTitleContainer} ${classes.secondBlogContainer}`}
    >
      <h1>Our Developed Projects</h1>
      <p>
        We have helped a multitude of businesses expand their horizons by
        offering streamlined services for multiple iOS platforms with the right
        blend of experience and technology.
      </p>
    </div>
  );
};

export default ProjectTitleSection;
