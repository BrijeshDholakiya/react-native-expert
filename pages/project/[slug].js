import { Fragment } from "react";
import TitleLayout from "../../components/TitleSection/TitleLayout";
import Footer from "../../components/footer/Footer";
import ProjectItemTitleSection from "../../components/TitleSection/ProjectItemTitleSection";
import ProjectDetail from "../../components/projects/ProjectDetail";
import Layout from "../../components/Layout";
import cover_image from "../../public/images/projects/mainPrjct.svg";
import { description, projectData } from "../../constants/ProjectCardData";
import { featuresData as features } from "../../constants/featureCardData";
// import { getProjectDetailsById } from "../../Api/projects";

// export const getServerSideProps = async (context) => {
//   const data = await getProjectDetailsById(context.query.slug);
//   const projectDataById = JSON.stringify(data);

//   return {
//     props: {
//       projectDataById: projectDataById || null,
//     },
//   };
// };

const ProjectItemDetail = () => {
  const project = projectData[0];

  return (
    <Fragment>
      <Layout>
        <div className="topContainer">
          <TitleLayout>
            <ProjectItemTitleSection
              name={project.name}
              about={project.about}
            />
          </TitleLayout>
        </div>
        <div>
          <ProjectDetail
            cover_image={cover_image}
            image={project.image}
            description={description}
            features={features}
          />
        </div>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default ProjectItemDetail;
