import TitleLayout from "../../components/TitleSection/TitleLayout";
import ProjectTitleSection from "../../components/TitleSection/ProjectTitleSection";
import ProjectCardsPage from "../../components/projects/ProjectCardsPage";
import Footer from "../../components/footer/Footer";
import Layout from "../../components/Layout";
import { projectData } from "../../constants/ProjectCardData";

import { getProjectCardData } from "../../Api/projects";

export async function getStaticProps() {
  const allProjectData = await getProjectCardData();
  const projectData = JSON.stringify(allProjectData);

  return {
    props: {
      projectData,
    },
    revalidate: 10,
  };
}

const ProjectSection = () => {
  return (
    <Layout>
      <div className="topContainer">
        <TitleLayout>
          <ProjectTitleSection />
        </TitleLayout>
      </div>
      <ProjectCardsPage projectData={projectData} />
      <Footer />
    </Layout>
  );
};

export default ProjectSection;
