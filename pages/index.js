import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import TitleSection from "../components/TitleSection/TitleSection";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import { getServiceData } from "../Api/services";
import { getProjectCardData } from "../Api/projects";
import { projectData } from "../constants/ProjectCardData";
import { serviceData } from "../constants/serviceCardData";

// export async function getStaticProps() {
//   const allServiceData = await getServiceData();
//   const allProjectData = await getProjectCardData();
//   const serviceData = JSON.stringify(allServiceData);
//   const projectData = JSON.stringify(allProjectData);

//   return {
//     props: {
//       serviceData,
//       projectData,
//     },
//     revalidate: 10,
//   };
// }

export default function Home() {
  /////////////////// CALENDLY APP CODE  /////////////////////////
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="main-container">
      <div className={styles.container}>
        <Head>
          <title>React Native Experts</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>

        <Layout>
          <div className={styles.topContainer}>
            <TitleSection />
          </div>
          <Services serviceData={serviceData} />
          <Projects projectData={projectData} />
          <Features />
          <Footer />
        </Layout>
      </div>
    </div>
  );
}
