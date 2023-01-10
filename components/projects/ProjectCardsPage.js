import classes from "./css/ProjectCardsPage.module.css";
import ProjectCard from "./ProjectCard";
import cover_image from "../../public/images/projects/mainPrjct.svg";

const ProjectCardsPage = ({ projectData }) => {
  return (
    <div>
      <div className={classes.projectTitle}>
        <div>
          <h2>Our Projects</h2>
        </div>
      </div>

      <div className={classes.projectCardContainer}>
        {projectData?.map?.((project, index) => {
          return (
            <ProjectCard
              key={index}
              slug={project.slug}
              image={project.image}
              name={project.name}
              about={project.about}
              _id={project._id}
              cover_image={cover_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCardsPage;
