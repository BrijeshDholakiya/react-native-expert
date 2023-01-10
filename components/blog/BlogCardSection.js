// import styles from "./css/BlogCardSection.module.css";
// import BlogCard from "./BlogCard";
// import { blogCardsData } from "../../constants/blogCardData";
// import { Fragment, useState } from "react";
// import CustomPagination from "../CustomPagination";

// const cut = blogCardsData.slice(0, 9);

// const BlogCardSection = () => {
//   const [page, setPage] = useState("1");

//   var handlePageChange = (e) => {
//     var txt = e.target.textContent;
//     var newTxt = e.target.getAttribute("aria-label");
//     var newAttr = e.target.getAttribute("data-testid");

//     var pageCurrentValue = parseInt(page);
//     var newPageValue;

//     if (newTxt === "Go to next page" || newAttr === "ArrowForwardIosIcon") {
//       newPageValue = (pageCurrentValue + 1).toString();
//       setPage(newPageValue);
//     } else if (
//       newTxt == "Go to previous page" ||
//       newAttr == "ArrowBackIosNewIcon"
//     ) {
//       newPageValue = (pageCurrentValue - 1).toString();
//       setPage(newPageValue);
//     } else {
//       setPage(txt);
//     }
//   };

//   return (
//     <Fragment>
//       {/* /////////////////
//        BLOG CARD PAGE 1
//        //////////////////////// */}
//       <div
//         className={styles.blogCardsContainer}
//         style={{ display: page === "1" ? "flex" : "none" }}
//       >
//         {blogCardsData.map((data, index) => (
//           <BlogCard
//             key={index}
//             image={data.image}
//             title={data.title}
//             desc={data.desc}
//             btn1={data.btn1}
//             btn2={data.btn2}
//             reactNative={data.reactImg}
//             className={styles.blogCard}
//           />
//         ))}
//       </div>

//       {/* /////////////////
//        BLOG CARD PAGE 2
//        //////////////////////// */}
//       <div
//         className={styles.blogCardsContainer}
//         style={{ display: page === "2" ? "flex" : "none" }}
//       >
//         {cut.map((data, index) => (
//           <BlogCard
//             key={index}
//             image={data.image}
//             title={data.title}
//             desc={data.desc}
//             btn1={data.btn1}
//             btn2={data.btn2}
//             reactNative={data.reactImg}
//             className={styles.blogCard}
//           />
//         ))}
//       </div>
//       <div className={styles.paginationContainer}>
//         <CustomPagination onHandleChange={handlePageChange} />
//       </div>
//     </Fragment>
//   );
// };

// export default BlogCardSection;
