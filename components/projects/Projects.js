import classes from "./css/Projects.module.css";
import ProjectCard from "./ProjectCard";
import cover_image from "../../public/images/projects/mainPrjct.svg";

const Projects = ({ projectData }) => {
  return (
    <div className={classes.projectContainer} id="project-section">
      {/***********************
              TITLE SECTION 
                    ********************/}

      <div className="commonTitle">
        <h3>Our Developed Projects</h3>
        <p>
          We have helped a multitude of businesses expand their horizons by
          offering streamlined services for multiple iOS platforms with the
          right blend of experience and technology.
        </p>
      </div>
      {/* **********************
              PROJECTS CARD SECTION 
              *******************  */}
      <div className={classes.projectCardContainer}>
        {projectData.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              slug={project.slug}
              _id={project._id}
              image={project.image}
              name={project.name}
              about={project.about}
              cover_image={cover_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
