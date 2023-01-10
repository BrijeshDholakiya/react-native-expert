// // import { useState } from "react";
// import Link from "next/link";

// import classes from "./css/Blog.module.css";
// // import left from "../../images/blog/left.png";
// // import right from "../../images/blog/right.svg";
// import MainPageBlogCard from "./MainPageBlogCard";
// import { blogCardsData } from "../../constants/blogCardData";

// // import App from "../app";
// // import Slider from "react-slick";

// const cut = blogCardsData.slice(0, 4);

// const Blog = () => {
//   return (
//     <div className={classes.blogContainer} id="blog-section">
//       <div className={classes.blogTitle}>
//         <div>
//           <h2>Latest Blog</h2>
//         </div>
//       </div>
//       <div className={classes.blogCardsContainer}>
//         {cut.map((data, index) => {
//           return (
//             <MainPageBlogCard
//               key={index}
//               image={data.image}
//               title={data.title}
//               desc={data.desc}
//               btn1={data.btn1}
//               btn2={data.btn2}
//               reactNative={data.reactImg}
//             />
//           );
//         })}
//       </div>

//       <div className="moreBtn">
//         <Link href="/blog">
//           <button>More Blogs</button>
//         </Link>
//       </div>
//       {/* <App /> */}
//     </div>
//   );
// };

// export default Blog;

// {
//   /* <div className={classes.slideBtnContainer}>
//           <button>
//             <Image src={left} alt="left" />
//           </button>

//           <button>
//             <Image src={right} alt="right" />
//           </button>
//         </div> */
// }
