/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import classes from "./css/ProjectCard.module.css";

const ProjectCard = (props) => {
  const aboutDescription = props?.about?.substring?.(0, 95);

  return (
    <Link href="/project/[slug]" as={"/project/" + props.slug}>
      <div className={`${classes.projectCard} cp`}>
        <div className={classes.projectCardBody}>
          {/* **********************
                PROJECT CARD IMAGE  
                *******************  */}
          <div className={classes.projectImgContainer}>
            <Image
              src={props.image}
              alt="mobile-screens-with different screenshots"
              className={classes.image}
            />
          </div>

          {/* **********************
                PROJECTS CARD CONTENT
                *******************  */}
          <div className={classes.projectContentContainer}>
            <div className={classes.projectTitle}>
              <h3>{props.name}</h3>
            </div>
            <div className={classes.projectDesc}>
              <p>{aboutDescription}...</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
